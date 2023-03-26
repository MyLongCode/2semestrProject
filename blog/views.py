from django.shortcuts import render

from django.http import HttpResponse


def index(request):
    # from blog.models import Blog
    # b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
    # b.save()
    # b5.name = 'New name'
    # b5.save()
    return HttpResponse("It`s blog. OK?")

