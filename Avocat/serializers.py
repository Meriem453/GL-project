from rest_framework import serializers
from .models import Avocat
from .models import Day
from .models import Wilaya
from .models import Speciality
from .models import RateAndComments

class AvocatSerializer(serializers.ModelSerializer):
      class Meta:
            model=Avocat
            fields='__all__'

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