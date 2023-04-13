from django.db import models

from accounts.models import User
from music.models import Music


class Post(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    music = models.ForeignKey(Music, on_delete=models.CASCADE)
    count_likes = models.IntegerField(default=0)
    post_text = models.TextField(max_length=1000)
    image = models.ImageField(upload_to='uploads/images/')
    create_time = models.DateTimeField(auto_now=True)