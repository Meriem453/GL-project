from django.db import models


# Create your models here.

STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('pending', 'Pending'),
    ]


class Wilaya(models.Model):
    name = models.CharField(max_length=50)


class Speciality(models.Model):
    name = models.CharField(max_length=100)

class Avocat(models.Model):
    nom = models.CharField(max_length=100)
    prenom=models.CharField(max_length=100)
    experience = models.CharField(max_length=500)
    nmr_tlfn=models.CharField(max_length=10)
    adresse = models.CharField(max_length=100)
    adresse_link = models.CharField(max_length=100)
    competence = models.CharField(max_length=100)
    langue = models.CharField(max_length=50)
    nmrInscitBureau=models.CharField(max_length=50)
    email=models.CharField(max_length=50,unique=True)
    status=models.CharField(max_length=50, choices=STATUS_CHOICES,default='pending')
    linckedIn=models.CharField(max_length=100)
    profilePh=models.ImageField(upload_to='./images/profile')
    cartePro=models.ImageField(upload_to='./images/cartePro')
    carteIndent=models.ImageField(upload_to='./images/carteIndent')
    wilaya = models.ForeignKey(Wilaya,on_delete=models.SET_NULL,null=True)
    specialite = models.ForeignKey(Speciality,on_delete=models.SET_NULL,null=True)


class Day(models.Model):
    number = models.IntegerField()
    session1=models.BooleanField()
    session2=models.BooleanField()
    session3=models.BooleanField()
    session4=models.BooleanField()
    session5=models.BooleanField()
    session6=models.BooleanField()
    session7=models.BooleanField()
    avocat = models.ForeignKey(Avocat,on_delete=models.CASCADE)


class RateAndComments(models.Model):
    rate = models.IntegerField()
    commentBody = models.CharField(max_length=500)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)

class RDV(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    situation = models.CharField(max_length=50)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)

class Admin(models.Model):
    username=models.CharField(max_length=10)
    password=models.CharField(max_length=10)
