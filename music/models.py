from django.db import models

from accounts.models import User
from validators import validate_is_music


class Music(models.Model):
    title = models.CharField(max_length=50)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='uploads/images/', null=True)
    music = models.FileField(upload_to='uploads/music/', validators=(validate_is_music,))
    create_time = models.DateTimeField(auto_now=True)


