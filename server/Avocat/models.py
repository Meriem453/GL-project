from django.db import models


# Create your models here.

STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('pending', 'Pending'),
    ]
def upload_to(instance,filename):
    return 'images/profile/{filename}'.format(filename=filename)

class Wilaya(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Speciality(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Avocat(models.Model):
    nom = models.CharField(max_length=100)
    prenom=models.CharField(max_length=100)
    experience = models.CharField(max_length=500,null=True,default="")
    nmr_tlfn=models.CharField(max_length=10)
    adresse = models.CharField(max_length=100)
    adresse_link = models.CharField(max_length=500,null=True,default="")
    competence = models.CharField(max_length=100,null=True,default="")
    langue = models.CharField(max_length=50,null=True,default="")
    nmrInscitBureau=models.CharField(max_length=50)
    email=models.CharField(max_length=50,unique=True,default="")
    status=models.CharField(max_length=50, choices=STATUS_CHOICES,default='pending')
    linckedIn=models.CharField(max_length=100,null=True,default="")
    profilePh=models.ImageField(upload_to='./images/profile')
    cartePro=models.ImageField(upload_to='./images/cartePro')
    carteIndent=models.ImageField(upload_to='./images/carteIndent')
    wilaya = models.ForeignKey(Wilaya,on_delete=models.SET_NULL,null=True,default="")
    specialite = models.CharField(max_length=100,null=True,default="")


class Day(models.Model):
    number = models.IntegerField()
    session1=models.BooleanField(default=True)
    session2=models.BooleanField(default=True)
    session3=models.BooleanField(default=True)
    session4=models.BooleanField(default=True)
    session5=models.BooleanField(default=True)
    session6=models.BooleanField(default=True)
    session7=models.BooleanField(default=True)
    avocat = models.ForeignKey(Avocat,on_delete=models.CASCADE)


class RateAndComments(models.Model):
    rate = models.IntegerField()
    commentBody = models.CharField(max_length=500)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)

class RDV(models.Model):
    nom = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    situation = models.CharField(max_length=50)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)

class Admin(models.Model):
    username=models.CharField(max_length=10)
    password=models.CharField(max_length=10)
    def __str__(self):
        return self.username