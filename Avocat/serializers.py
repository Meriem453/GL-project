from rest_framework import serializers
from .models import Avocat
from .models import Day

class AvocatSerializer(serializers.ModelSerializer):
      class Meta:
            model=Avocat
            fields='__all__'

class DaySerializer(serializers.ModelSerializer):
      class Meta:
            model=Day
            fields='__all__'