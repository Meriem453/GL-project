from rest_framework import serializers
from .models import Avocat

class ItemSerializer(serializers.ModelSerializer):
      class Meta:
            model=Avocat
            fields='__all__'