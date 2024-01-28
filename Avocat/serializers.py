from rest_framework import serializers
from .models import Avocat
from .models import Day
from .models import Wilaya
from .models import Speciality
from .models import RateAndComments
from .models import RDV
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
      class Meta:
            model=User
            fields=['email', 'password','username']

class AvocatSerializer(serializers.ModelSerializer):
      class Meta:
            model=Avocat
            fields='__all__'


class SignupSerializer(serializers.ModelSerializer):
      class Meta:
            model=Avocat
            fields=['nom', 'prenom','experience','nmr_tlfn','adresse','adresse_link','competence','langue','nmrInscitBureau','email','linckedIn','wilaya','specialite']

class DaySerializer(serializers.ModelSerializer):
      class Meta:
            model=Day
            fields='__all__'


class WilayaSerializer(serializers.ModelSerializer):
      class Meta:
            model=Wilaya
            fields='__all__'

class SpecialitySerializer(serializers.ModelSerializer):
      class Meta:
            model=Speciality
            fields='__all__'

class RateAndCommentsSerializer(serializers.ModelSerializer):
      class Meta:
            model=RateAndComments
            fields='__all__'

class RDVSerializer(serializers.ModelSerializer):
      class Meta:
            model=RDV
            fields='__all__'