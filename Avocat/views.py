from rest_framework.decorators import api_view, authentication_classes, permission_classes,parser_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
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
#avocat views 
@api_view(['GET'])
@authentication_classes([TokenAuthentication])  # Use TokenAuthentication for authentication
@permission_classes([IsAuthenticated])
def getProfileAvocat(request):
    avovat=Avocat.objects.get(user = request.user)
    serializer=AvocatSerializer(avovat)
    print("avocat loged is :",serializer.data)
    return Response(serializer.data)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Avocat
from .serializers import AvocatSerializer

@api_view(['PUT'])
def modify_profile(request):
    if request.method == 'PUT':
        avocat_instance = Avocat.objects.first()  
        serializer = AvocatSerializer(avocat_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Profile updated successfully'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

# @api_view(['POST'])
# def signUp(request):
#     avocat_serializer = AvocatSerializer(data=request.data)
#     if avocat_serializer.is_valid():
#         avocat_serializer.save()

#         user_data = {
#             'username': request.data['email'],
#             'email': request.data['email'],
#             'password': request.data['password']
#         }

#         user_serializer = UserSerializer(data=user_data)
#         if user_serializer.is_valid():
#             user = user_serializer.save()
#             user.set_password(request.data['password'])
#             user.save()
#             return Response({'user inserted successfully'})
#         else:
#             return Response({"errors": user_serializer.errors})
#     else:
#         return Response({'error'})

@api_view(['POST'])
#@parser_classes([MultiPartParser, FormParser])
def signUp(request):
    if request.method == 'POST':
        try:
            print("in sign up")
            newUser = {
                'nom': request.data['nom'],
                'prenom': request.data['prenom'],
                'nmr_tlfn': request.data['nmr_tlfn'],
                'adresse': request.data['adresse'],
                'nmrInscitBureau': request.data['nmrInscitBureau'],
                'email': request.data['email'],
                'profilePh': request.data['picture'],
                'carteIndent': request.data['carteNationale'],
                'cartePro': request.data['carteProfessionnelle'],
            }
            avocat_serializer = AvocatSerializer(data=newUser)
            if avocat_serializer.is_valid():
                # Check if the email already exists
                if Avocat.objects.filter(email=request.data['email']).exists():
                    return Response({"err": "Cet e-mail est déjà utilisé."}, status=status.HTTP_400_BAD_REQUEST)

                # Create Avocat instance
                avocat_serializer.save()

                # Create a new User object
                user = User.objects.create_user(
                    username=request.data['email'],
                    email=request.data['email'],
                    password=request.data['password']
                )

                return Response({
                    'message': 'User and Avocat created successfully',
                    'redirect': '/profile',
                    'user_data': avocat_serializer.data
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': avocat_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            print(e)
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    return Response({'error': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    print("in the login view")
    email = request.data['email']
    password = request.data['password']
    print(email,password)
    try:
        user = User.objects.get(email=email)
        print("user : ",user)
        if user.check_password(password):
            avocat=Avocat.objects.get(email=request.data['email'])
            print("avocat od the user : ",avocat)
            token, created  = Token.objects.get_or_create(user=user)
            serializer = AvocatSerializer(avocat)
            return Response({'token': token.key,'redirect':"/profile" ,'user': serializer.data})
        else:
            return Response({'message':'password incorrect'},status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
            return Response({'message':'Email and password combinition incorrect'},status=status.HTTP_400_BAD_REQUEST)
    

#mahich temchi :')
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def getCurrentAvocat(request):

    current_user = request.user
    user=UserSerializer(data=current_user)
    return Response({'user':user.data})
















