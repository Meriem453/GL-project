from django.shortcuts import render
from .models import Avocat
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ItemSerializer



# Create your views here.
@api_view(['GET'])
def getAllAvocats(request):
    all=Avocat.objects.all()
    serializer=ItemSerializer(all,many=True)

    #return render(request, 'test.html', {'data': all, 'json_data': serializer.data})
    return Response(serializer.data)