# Generated by Django 4.2.7 on 2024-01-03 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Avocat', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avocat',
            name='status',
            field=models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive'), ('pending', 'Pending')], max_length=50),
        ),
    ]
