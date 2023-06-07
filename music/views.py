from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.utils import timezone
from django.views.generic import CreateView
from rest_framework import generics

from music.forms import MusicUploadForm
from django.shortcuts import render

from music.models import Music, PlayListToUser, PlayList
from music.serializers import MusicSerializer, PlayListToUserSerializer, PlayListSerializer


class MusicListCreate(generics.ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


class MusicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Music
    serializer_class = MusicSerializer


class PlayListToUserCreate(generics.ListCreateAPIView):
    queryset = PlayListToUser.objects.all()
    serializer_class = PlayListToUserSerializer


class PlayListToUserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlayListToUser
    serializer_class = PlayListToUserSerializer


class PlayListCreate(generics.ListCreateAPIView):
    queryset = PlayList.objects.all()
    serializer_class = PlayListSerializer


class PlayListDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlayList
    serializer_class = PlayListSerializer
