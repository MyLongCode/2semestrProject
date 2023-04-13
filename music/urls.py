from django.urls import path, re_path

from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import music_upload_view, MusicListCreate

urlpatterns = [
    path('post/', music_upload_view, name='musicUpload'),
    path('api/', MusicListCreate.as_view(), name='musicList'),
               ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)