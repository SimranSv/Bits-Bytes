from django.db import models
from django.db.models import OneToOneField
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime

class Patient(models.Model):
    User: OneToOneField = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.User.username

class Doctor(models.Model):
    User: OneToOneField = models.OneToOneField(User, on_delete=models.CASCADE)
    qualification = models.CharField(max_length=150, default='')
    
    def __str__(self):
        return self.User.username


class Prescription(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    medicines = models.CharField(max_length=200000, default='')
    remarks = models.CharField(max_length=120000,default='')
    diagnosis = models.CharField(max_length=300000,default='')
    dateTime = models.DateTimeField(default=timezone.now())
    imageLink = models.CharField(max_length=10000, default='')