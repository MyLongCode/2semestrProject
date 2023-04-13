from rest_framework import serializers
from .models import *


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ['id', 'title', 'image', 'music', 'create_time', 'owner']

