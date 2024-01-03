# Generated by Django 4.2.7 on 2024-01-03 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Avocat', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='avocat',
            old_name='name',
            new_name='nom',
        ),
        migrations.AddField(
            model_name='avocat',
            name='email',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='avocat',
            name='nmrInscitBureau',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='avocat',
            name='nmr_tlfn',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='avocat',
            name='password',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='avocat',
            name='prenom',
            field=models.CharField(max_length=100, null=True),
        ),
    ]