# Generated by Django 4.2.7 on 2024-01-04 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Avocat', '0004_delete_article'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avocat',
            name='carteIndent',
            field=models.ImageField(upload_to='./images/carteIndent'),
        ),
        migrations.AlterField(
            model_name='avocat',
            name='cartePro',
            field=models.ImageField(upload_to='./images/cartePro'),
        ),
        migrations.AlterField(
            model_name='avocat',
            name='profilePh',
            field=models.ImageField(upload_to='./images/profile'),
        ),
    ]
