from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['place', 'biography', 'count_followers', 'image_url']


class UserSerializer(serializers.ModelSerializer):
    user_extended = ProfileSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'user_extended']



