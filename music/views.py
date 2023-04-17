from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.utils import timezone
from django.views.generic import CreateView
from rest_framework import generics

from music.forms import MusicUploadForm
from django.shortcuts import render

from music.models import Music
from music.serializers import MusicSerializer


@login_required
def music_upload_view(request):
    user = request.user

    if request.method == 'POST':
        form = MusicUploadForm(request.POST, request.FILES)
        if form.is_valid():
            music = form.save(commit=False)
            music.owner = request.user
            music.create_time = timezone.now()
            music.save()
            img_obj = form.instance
            return render(request, 'music/upload_music.html', {'form': form, 'img_obj': img_obj})
    else:
        form = MusicUploadForm()
    return render(request, 'music/upload_music.html', {'form': form})


class MusicListCreate(generics.ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


class MusicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Music
    serializer_class = MusicSerializer
