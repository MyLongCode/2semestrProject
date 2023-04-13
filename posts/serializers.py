from rest_framework import serializers
from .models import *


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'owner', 'music', 'post_text', 'image', 'count_likes', 'create_time']