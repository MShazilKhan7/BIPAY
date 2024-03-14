from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from api.models import Employee,Department,Designation
from rest_framework.decorators import api_view
from api.serializers import EmployeeSerializer, DepartmentSerializer, DesignationSerializer
import string
import random
from django.contrib.auth.hashers import make_password

# Create your views here.
# writing the class based views

def generate_password():
    password_length = 13
    s = string.ascii_letters + string.digits + string.punctuation
    characters_list = list(s)
    random.shuffle(characters_list)
    password = random.sample(characters_list, password_length)    
    password = "".join(password)
    print(make_password(password))

class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
    def __init__(self, *args, **kwargs):
        generate_password()
        
        
    def post(self, request, *args, **kwargs):
        response  = super().post(request, *args, **kwargs)
        print(response.data)

    
    
    
class DepartmentList(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DesignationList(generics.ListCreateAPIView):
    queryset = Designation.objects.all()
    serializer_class = DesignationSerializer
    




# def generate_credentials():
#     pass


    
# @api_view(['GET'])
# def EmployeeList(request):
#     employees  = Employee.objects.all()
#     serializer = EmployeeSerializer(employees, many=True)
#     return Response(serializer.data)
#     #get all the employees
#     # serialize them 
#     # return json
    
   
    
    
    