from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from api.models import Employee,Department,Designation
from rest_framework.decorators import api_view
from api.serializers import EmployeeSerializer, DepartmentSerializer, DesignationSerializer
import string
import random
from django.contrib.auth.hashers import make_password

# writing the class based views

def generate_random_password():
    password_length = 13
    s = string.ascii_letters + string.digits + string.punctuation
    characters_list = list(s)
    random.shuffle(characters_list)
    password = random.sample(characters_list, password_length)    
    password = "".join(password)
    return password

class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
    def __init__(self, *args, **kwargs):
        generate_random_password()
        
        
    def post(self, request, *args, **kwargs):
        response  = super().post(request, *args, **kwargs)
        username  = [x for x in response['first_name'] if x!=" "]
        print(username)
   
class DepartmentList(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DesignationList(generics.ListCreateAPIView):
    queryset = Designation.objects.all()
    serializer_class = DesignationSerializer
    
# class RegisterUser(APIView):
#     #  register new user with random usernames and password
#     def post(self, request, *args, **kwargs):
#         # 1. username created
#         # 2. password created 
#         # 3. save the username and hashed password to the database
#         username = request.data['first_name']
#         password = generate_random_password()
        


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