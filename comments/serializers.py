from rest_framework import serializers
from .models import *


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'owner', 'text', 'created']
