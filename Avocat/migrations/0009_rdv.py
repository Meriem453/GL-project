# Generated by Django 4.2.7 on 2024-01-05 00:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Avocat', '0008_alter_avocat_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='RDV',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=50)),
                ('prenom', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('situation', models.CharField(max_length=50)),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Avocat.avocat')),
            ],
        ),
    ]