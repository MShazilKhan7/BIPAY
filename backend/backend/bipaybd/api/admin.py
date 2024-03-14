from django.contrib import admin
from .models import Employee,Contact,Department,Designation, Announcement
from django import forms
# Register your models here.

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','department_emp', 'designation_emp')
   
admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Contact)
admin.site.register(Department)
admin.site.register(Designation)
admin.site.register(Announcement)

