# Generated by Django 4.2.7 on 2024-01-03 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Avocat', '0002_rename_name_avocat_nom_avocat_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avocat',
            name='email',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='avocat',
            name='nmrInscitBureau',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='avocat',
            name='nmr_tlfn',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='avocat',
            name='password',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='avocat',
            name='prenom',
            field=models.CharField(max_length=100),
        ),
    ]
