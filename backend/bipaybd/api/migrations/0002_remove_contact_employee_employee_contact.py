# Generated by Django 4.2.5 on 2024-02-22 14:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='employee',
        ),
        migrations.AddField(
            model_name='employee',
            name='contact',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.contact'),
        ),
    ]