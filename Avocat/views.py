from django.shortcuts import render
from .models import Avocat
from .models import Wilaya
from .models import Speciality
from .models import RateAndComments
from .models import Day
from .models import Admin
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AvocatSerializer
from .serializers import DaySerializer



# Create your views here.
@api_view(['GET'])
def getAllAvocats(request):
    all=Avocat.objects.all()
    serializer=AvocatSerializer(all,many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getPlanOfAvocat(request):
    all=Day.objects.filter(avocat=2)
    serializer=DaySerializer(all,many=True)

    return Response({'planification': serializer.data})