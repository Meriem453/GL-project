from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
#models
from .models import Avocat
from .models import Wilaya
from .models import Speciality
from .models import RateAndComments
from .models import Day
from .models import Admin
from .models import RDV
#serializers
from .serializers import AvocatSerializer
from .serializers import DaySerializer
from .serializers import WilayaSerializer
from .serializers import SpecialitySerializer
from .serializers import RateAndCommentsSerializer
from .serializers import SignupSerializer
from .serializers import UserSerializer
from .serializers import RDVSerializer



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

@api_view(['POST'])
def addRDV(request):
    serializer = RDVSerializer(data=request.data)
    if serializer.is_valid():
                serializer.save()
                return Response({'RDV inserted successfully'})


    return Response(serializer.data)

@api_view(['POST'])
def signUp(request):
    avocat_serializer = AvocatSerializer(data=request.data)
    if avocat_serializer.is_valid():
        avocat_serializer.save()

        user_data = {
            'username': request.data['email'],
            'email': request.data['email'],
            'password': request.data['password']
        }

        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            user.set_password(request.data['password'])
            user.save()
            return Response({'user inserted successfully'})
        else:
            return Response({"errors": user_serializer.errors})
    else:
        return Response({'error'})

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)

    avocat=Avocat.objects.get(email=request.data['email'])
    token, created  = Token.objects.get_or_create(user=user)
    serializer = AvocatSerializer(avocat)
    return Response({'token': token.key, 'user': serializer.data})

#mahich temchi :')
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def getCurrentAvocat(request):

    current_user = request.user
    user=UserSerializer(data=current_user)
    return Response({'user':user.data})
















