from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

    
class Designation(models.Model):
    name = models.CharField(max_length=200, unique=True)
    
    def __str__(self):
        return self.name
    

class Contact(models.Model):
    home_phone      = PhoneNumberField(null=False, blank=False, unique=True)
    work_phone      = PhoneNumberField(null=False, blank=False, unique=True)
    other_phone     = PhoneNumberField(null=False, blank=False, unique=True) 
    employee_email  = models.EmailField(max_length=70,blank=False,unique=True)
    facebook        = models.URLField(max_length=200, blank=True)
    linkedIn        = models.URLField(max_length=200, blank=True)
    Twitter         = models.URLField(max_length=200, blank=True)
    home_address    = models.CharField(max_length=200)
    
    
    
class Department(models.Model):
    name              = models.CharField(max_length=200)
    manager           = models.OneToOneField('Employee', on_delete=models.SET_NULL, null=True, blank=True)
    parent_department = models.OneToOneField('Department', on_delete=models.DO_NOTHING, null=True, blank=True)
    location          = models.CharField(max_length=200, null=True, blank=True) # for now using character field
    work_shift        = models.CharField(max_length=100, null=True, blank=True) 
    description       = models.CharField(max_length=300, null=True, blank=True)

    
    def __str__(self):
        return self.name
        
        
class Employee(models.Model):
    first_name      = models.CharField(max_length=100)
    last_name       = models.CharField(max_length=100)
    department_emp  = models.ForeignKey(Department, on_delete=models.PROTECT, related_name="employees", null=True, blank=True)
    designation_emp = models.ForeignKey(Designation, on_delete=models.DO_NOTHING, blank=True, null=True)
    contact         = models.OneToOneField(Contact, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.first_name + " " +self.last_name
    
    
class Announcement(models.Model):
    title       = models.CharField(max_length=200)
    start_date  = models.DateField()
    end_date    = models.DateField()
    department  = models.ForeignKey(Department, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.CharField(max_length=250, null=True, blank=True)
    
    
    def __str__(self):
        return self.title