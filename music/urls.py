from django.urls import path, re_path

from django.conf import settings
from django.conf.urls.static import static
from .views import music_upload_view, MusicListCreate, MusicDetail

urlpatterns = [
    path('post/', music_upload_view, name='musicUpload'),
    path('api/', MusicListCreate.as_view(), name='musicList'),
    path('api/<int:pk>', MusicDetail.as_view(), name='musicDetail'),
               ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)