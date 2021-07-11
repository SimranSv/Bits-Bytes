from .views import *
from django.urls import path, include

urlpatterns = [
    path('api/login', LoginAPI.as_view(), name='LoginAPI'),
    path('api/signup', SignUpAPI.as_view(), name='SignUpAPI'),
    path('api/prescription/<int:id>', SpecificPrescriptionAPI.as_view(), name='SpecificPrescriptionAPI'),
    path('api/createprescription', PrescriptionAPI.as_view(), name='PrescriptionAPI'),
    path('api/doctorsprescriptions/<str:username>', DoctorsPrescriptionsAPI.as_view(), name='DoctorsPrescriptionsAPI'),
    path('api/patientsprescriptions/<str:username>', PatientsPrescriptionsAPI.as_view(), name='PatientsPrescriptionsAPI'),
    path('api/chemistprescription/<int:id>', ChemistPrescriptionAPI.as_view(), name='ChemistPrescriptionAPI'),
]
