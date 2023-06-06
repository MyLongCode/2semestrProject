from rest_framework import serializers
from .models import *
from taggit.serializers import (TagListSerializerField,
                                TaggitSerializer)


class MusicSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Music
        fields = '__all__'


class MusicDetailSerializer(TaggitSerializer, serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ['id', 'tags', 'title', 'image', 'music', 'create_time', 'owner', 'count_likes']
        extra_kwargs = {'mus': {'required': False}}
