from django.urls import path
from api.views import EmployeeList,DepartmentList,DesignationList
from rest_framework.authtoken.views import obtain_auth_token



urlpatterns = [
    path('employees/', EmployeeList.as_view()),
    path('departments/', DepartmentList.as_view()),
    path('designations/', DesignationList.as_view()),
]
