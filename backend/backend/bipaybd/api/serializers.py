from rest_framework import serializers
from api.models import Employee, Department, Designation



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
       model  = Department
       fields = '__all__'

class DesignationSerializer(serializers.ModelSerializer):
    class Meta:
       model  = Designation
       fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    department_emp  = DepartmentSerializer(Department, read_only=True)
    designation_emp = DesignationSerializer(Designation, read_only=True)
    department      = serializers.PrimaryKeyRelatedField(source='department_emp', queryset=Department.objects.all(), write_only=True)
    designation     = serializers.PrimaryKeyRelatedField(source='designation_emp', queryset=Designation.objects.all(), write_only=True)

 
    class Meta:
        model = Employee    
        fields = '__all__'
    
    
