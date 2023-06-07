from django.db import models

from accounts.models import User
from validators import validate_is_music
from taggit.managers import TaggableManager


class Music(models.Model):
    title = models.CharField(max_length=50)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='uploads/images/', null=True)
    music = models.FileField(upload_to='uploads/music/', validators=(validate_is_music,))
    count_likes = models.IntegerField(default=0)
    create_time = models.DateTimeField(auto_now=True)
    tags = TaggableManager()


class PlayList(models.Model):
    name = models.CharField(max_length=50)
    is_private = models.BooleanField(default=True)
    create_time = models.DateTimeField(auto_now=True)


class PlayListToUser(models.Model):
    list_id = models.ManyToManyField(PlayList, default=0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    music = models.ManyToManyField(Music)