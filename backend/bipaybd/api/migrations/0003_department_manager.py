# Generated by Django 4.2.5 on 2024-02-22 18:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_contact_employee_employee_contact'),
    ]

    operations = [
        migrations.AddField(
            model_name='department',
            name='manager',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.employee'),
        ),
    ]