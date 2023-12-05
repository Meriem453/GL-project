from django.db import models


# Create your models here.

class Wilaya(models.Model):
    name = models.CharField(max_length=50)


class Avocat(models.Model):
    name = models.CharField(max_length=100)
    experience = models.CharField(max_length=500)
    adress = models.CharField(max_length=100)
    competence = models.IntegerField()
    langue = models.CharField(max_length=50)
    wilaya = models.ForeignKey(Wilaya,on_delete=models.SET_NULL,null=True)


class Client(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)


class Speciality(models.Model):
    name = models.CharField(max_length=100)


class AvocatSpecRelation(models.Model):
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)
    speciality = models.ForeignKey(Speciality, on_delete=models.CASCADE)


class Article(models.Model):
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=500)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)


class Day(models.Model):
    number = models.IntegerField(max_length=7)
    stat = models.CharField(max_length=50)
    client = models.ForeignKey(Client,on_delete=models.SET_NULL,null=True)
    avocat = models.ForeignKey(Avocat,on_delete=models.SET_NULL,null=True)


class RateAndComments(models.Model):
    rate = models.IntegerField(max_length=5)
    commentTitle = models.CharField(max_length=50)
    commentBody = models.CharField(max_length=500)
    avocat = models.ForeignKey(Avocat, on_delete=models.CASCADE)
