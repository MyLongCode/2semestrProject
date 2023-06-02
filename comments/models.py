from django.db import models

from accounts.models import User
from posts.models import Music


class Comment(models.Model):
    music = models.ForeignKey(Music, related_name='comments', on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created',)