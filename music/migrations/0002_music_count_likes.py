# Generated by Django 4.1.7 on 2023-04-23 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='music',
            name='count_likes',
            field=models.IntegerField(default=0),
        ),
    ]
