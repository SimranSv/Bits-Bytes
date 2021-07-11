from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime, timedelta
from .models import *
import json
import jwt
import qrcode
import requests
from io import BytesIO
from PIL import Image

# only patient can sign-up
# both doctor and patient can login

def convertToJpeg(im):
    with BytesIO() as f:
        im.save(f, format='JPEG')
        return f.getvalue()

def validateJWT(request):
    jwtToken = request.META['HTTP_AUTHORIZATION']
    try:
        validation = jwt.decode(jwtToken, 'maths', algorithms="HS256")
        return True
    except:
        return False

class SignUpAPI(APIView):
    def post(self, request):
        JWT_SECRET = 'Conjuring'
        JWT_ALGORITHM = 'HS256'
        JWT_EXP_DELTA_SECONDS = 2628000
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']
        fname = request.data['fname']
        lname = request.data['lname']   
        
        try:
            user = User.objects.create_user(username, email, password, first_name=fname,last_name=lname)
            user.save()
            newPatient = Patient(User=user)
            newPatient.save()
            try:
                payload = {
                'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
                }
            
                jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
                
                return Response({"status": "200 OK", "username": username, "fname": fname, "lname": lname, "email": email, "token": jwt_token, "type": "Patient"})
            except:
                return Response({"status": "400 Bad Request", "message": "Invalid Password/Username"})
        except:
            return Response({"status": "403 User already exists", "message": "User already exists."})


class LoginAPI(APIView):

    def post(self, request):
        JWT_SECRET = 'Conjuring'
        JWT_ALGORITHM = 'HS256'
        # JWT_EXP_DELTA_SECONDS = 2628000
        JWT_EXP_DELTA_SECONDS = 2628000
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            thatUser = Patient.objects.filter(User=user)
            if len(thatUser) > 0:
                userType = "Patient"
                
            thatUser = Doctor.objects.filter(User=user)
            if len(thatUser) > 0:
                userType = "Doctor"
                
            payload = {
                'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
                }
            
            jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
            
            return Response({"status": "200 OK", "username": username, "token": jwt_token, "type": userType})
        else:
            return Response({"status": "400 Bad Request", "message": "Invalid Password/Username"})


class PrescriptionAPI(APIView):
    
    def post(self,request):
        #if validateJWT(request) is False:
        #    return Response({"status": "401 Unauthorized", "message": "authentication token invalid."})
        patientUsername = request.data['PatientUsername']
        doctorUsername = request.data['DoctorUsername']
        medicines=request.data['medicines']
        remarks=request.data['remarks']
        diagnosis = request.data['diagnosis']
        
        try:
            pUser = User.objects.filter(username=patientUsername)[0]
            dUser = User.objects.filter(username=doctorUsername)[0]
        except:
            return Response({"status": "404 Not Found", "message": "patient does not exist"})
        
        try:
            thatPatient = Patient.objects.filter(User=pUser)[0]
        except:
            return Response({"status": "404 Not Found", "message": "user is not a patient"}) 
        
        thatDoctor = Doctor.objects.filter(User=dUser)[0]
        
        newPrescription = Prescription(patient=thatPatient, doctor=thatDoctor, medicines=medicines, remarks=remarks, diagnosis=diagnosis)
        newPrescription.save()

        prescriptionID = newPrescription.id
        
        #generate QR Code (Ritesh)
        data = "ZindagiNaMilegiDobara"
        img = qrcode.make(data)
        img = convertToJpeg(img)
        
        url = 'https://acm-hackathon.deta.dev/api/bitsnbytes/imageupload'
        files = {'file': img}
        resp = requests.post(url, files=files)
        
        imageLink = resp.json()['link']
        
        Prescription.objects.filter(id=prescriptionID).update(imageLink=imageLink)
        
        return Response({"status": "201 Created", "link": imageLink})
        
        #email that QR Code (Vaishnavi)
        
        #return response to user
        
        
class SpecificPrescriptionAPI(APIView):
    def get(self, request, id):
        #if validateJWT(request) is False:
        #    return Response({"status": "401 Unauthorized", "message": "authentication token invalid."})
        try:
            thatPrescription = Prescription.objects.filter(id=id)[0]
            return Response({"status": "200 OK", "id":id, "patient": thatPrescription.patient.User.username, "doctor": thatPrescription.doctor.User.username, "medicines": thatPrescription.medicines, "remarks": thatPrescription.remarks, "diagnosis": thatPrescription.diagnosis, "time": thatPrescription.dateTime.strftime("%m/%d/%Y, %H:%M:%S"), "imageLink":thatPrescription.imageLink})
        except:
            return Response({"status": "404 Not Found", "message": "prescription not found"}) 

class DoctorsPrescriptionsAPI(APIView):
    def get(self, request, username):
        #if validateJWT(request) is False:
        #    return Response({"status": "401 Unauthorized", "message": "authentication token invalid."})
        thatUser = User.objects.filter(username=username)[0]
        thatDoctor = Doctor.objects.filter(User=thatUser)[0]
        thosePrescriptions = Prescription.objects.filter(doctor=thatDoctor)
        prescs = []
        for presc in thosePrescriptions:
            prescInstance = {}
            prescInstance['id'] = presc.id
            prescInstance['patient'] = presc.patient.User.username
            prescInstance['doctor'] = presc.doctor.User.username
            prescInstance['medicines'] = presc.medicines
            prescInstance['remarks'] = presc.remarks
            prescInstance['diagnosis'] = presc.diagnosis
            prescInstance['dateTime'] = presc.dateTime.strftime("%m/%d/%Y, %H:%M:%S")
            prescInstance['imageLink'] = presc.imageLink
            prescs.append(prescInstance)
        return Response(prescs)
        
class PatientsPrescriptionsAPI(APIView):
    def get(self, request, username):
        #if validateJWT(request) is False:
        #    return Response({"status": "401 Unauthorized", "message": "authentication token invalid."})
        thatUser = User.objects.filter(username=username)[0]
        thatPatient = Patient.objects.filter(User=thatUser)[0]
        thosePrescriptions = Prescription.objects.filter(patient=thatPatient)
        prescs = []
        for presc in thosePrescriptions:
            prescInstance = {}
            prescInstance['id'] = presc.id
            prescInstance['patient'] = presc.patient.User.username
            prescInstance['doctor'] = presc.doctor.User.username
            prescInstance['medicines'] = presc.medicines
            prescInstance['remarks'] = presc.remarks
            prescInstance['diagnosis'] = presc.diagnosis
            prescInstance['dateTime'] = presc.dateTime.strftime("%m/%d/%Y, %H:%M:%S")
            prescInstance['imageLink'] = presc.imageLink
            prescs.append(prescInstance)
        return Response(prescs)
    
class ChemistPrescriptionAPI(APIView):
    def get(self, request, id):
        try:
            thatPrescription = Prescription.objects.filter(id=id)[0]
            return Response({"status": "200 OK", "id":id, "doctor": thatPrescription.doctor.User.username, "medicines": thatPrescription.medicines, "time": thatPrescription.dateTime.strftime("%m/%d/%Y, %H:%M:%S"), "imageLink":thatPrescription.imageLink})
        except:
            return Response({"status": "404 Not Found", "message": "prescription not found"})
