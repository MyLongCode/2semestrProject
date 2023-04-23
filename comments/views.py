from django.shortcuts import render
from rest_framework import generics

from comments.models import Comment
from comments.serializers import CommentsSerializer


class CommentsListCreate(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentsSerializer


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment
    serializer_class = CommentsSerializer
