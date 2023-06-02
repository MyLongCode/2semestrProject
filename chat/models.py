from django.db import models
from accounts.models import User
from posts.models import Post


class Chat(models.Model):
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created',)