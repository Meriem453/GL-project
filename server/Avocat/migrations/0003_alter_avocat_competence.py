# Generated by Django 4.2.7 on 2024-01-03 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Avocat', '0002_alter_avocat_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avocat',
            name='competence',
            field=models.CharField(max_length=100),
        ),
    ]
