from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver

# python manage.py makemigrations
# python manage.py migrate


class User(AbstractUser):
    place = models.CharField(max_length=100)
    biography = models.CharField(max_length=200)
    count_followers = models.IntegerField(default=0)
    image_url = models.URLField(blank=True)

