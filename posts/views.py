

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils import timezone
from rest_framework import generics

from music.models import Music
from music.serializers import MusicSerializer
from posts.forms import PostUploadForm
from posts.models import Post
from posts.serializers import PostSerializer


@login_required
def post_upload_view(request):
    user = request.user

    if request.method == 'POST':
        form = PostUploadForm(request.POST, request.FILES)
        if form.is_valid():
            music = form.save(commit=False)
            music.owner = request.user
            music.create_time = timezone.now()
            music.save()
            # Get the current instance object to display in the template
            img_obj = form.instance
            return render(request, 'music/upload_music.html', {'form': form, 'img_obj': img_obj})
    else:
        form = PostUploadForm()
    return render(request, 'posts/upload_music.html', {'form': form})


class PostsListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post
    serializer_class = PostSerializer
