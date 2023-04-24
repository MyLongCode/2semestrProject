from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            place=validated_data['place'],
            biography=validated_data['biography'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'place', 'biography')


class FollowersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Followers
        fields = ['first_follower', 'second_follower', 'status']

