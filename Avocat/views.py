from django.shortcuts import render
#models
from .models import Avocat
from .models import Wilaya
from .models import Speciality
from .models import RateAndComments
from .models import Day
from .models import Admin
from rest_framework.response import Response
from rest_framework.decorators import api_view
#serializers
from .serializers import AvocatSerializer
from .serializers import DaySerializer
from .serializers import WilayaSerializer
from .serializers import SpecialitySerializer
from .serializers import RateAndCommentsSerializer



# Create your views here.

#user views
@api_view(['GET'])
def getAllAvocats(request):
    all=Avocat.objects.all()
    serializer=AvocatSerializer(all,many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getPlanOfAvocat(request,avocat_id):
    all=Day.objects.filter(avocat=avocat_id)
    serializer=DaySerializer(all,many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getCommentsOfAvocat(request,avocat_id):
    all=RateAndComments.objects.filter(avocat=avocat_id)
    serializer=RateAndCommentsSerializer(all,many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getAvocatInfo(request,avocat_id):
    all=Avocat.objects.get(id=avocat_id)
    serializer=AvocatSerializer(all)

    return Response(serializer.data)


@api_view(['POST'])
def searchAllAvocats(request):
   nom=request.data.get('nom')
   prenom=request.data.get('prenom')
   specialite=request.data.get('specialite')
   wilaya=request.data.get('wilaya')

   queryset = Avocat.objects.filter(status='active')

   if nom is not None and nom != "":
           queryset = queryset.filter(nom=nom)

   if prenom is not None and prenom != "":
           queryset = queryset.filter(prenom=prenom)

   if specialite is not None and specialite != "":
           specialite_id=Speciality.objects.filter(name=specialite)
           queryset = queryset.filter(specialite=specialite_id)

   if wilaya is not None and wilaya != "":
           wilaya_id=Wilaya.objects.filter(name=wilaya)
           queryset = queryset.filter(wilaya=wilaya_id)

   serializer=AvocatSerializer(queryset,many=True)
   return Response(serializer.data)


@api_view(['GET'])
def getAllWilayas(request):
    all=Wilaya.objects.all()
    serializer=WilayaSerializer(all,many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getAllSpecialities(request):
    all=Speciality.objects.all()
    serializer=SpecialitySerializer(all,many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getActiveAvocats(request):
    all=Avocat.objects.filter(status='active')
    serializer=AvocatSerializer(all,many=True)

    return Response(serializer.data)


@api_view(['POST'])
def addComment(request):
    serializer = RateAndCommentsSerializer(data=request.data)
    if serializer.is_valid():
                serializer.save()
                return Response({'comment inserted successfully'})


    return Response(serializer.data)

