from django.urls import path, re_path

from django.conf import settings
from django.conf.urls.static import static
from .views import MusicListCreate, MusicDetail, PlayListToUserDetail, PlayListToUserCreate, PlayListDetail, \
    PlayListCreate

urlpatterns = [
    path('api/', MusicListCreate.as_view(), name='musicList'),
    path('api/<int:pk>', MusicDetail.as_view(), name='musicDetail'),
    path('api/playlistrel', PlayListToUserCreate.as_view(), name='playrelLists'),
    path('api/playlistrel/<int:pk>', PlayListToUserDetail.as_view(), name='playlistrelDetail'),
    path('api/playlist', PlayListCreate.as_view(), name='playLists'),
    path('api/playlist/<int:pk>', PlayListDetail.as_view(), name='playlistDetail'),
               ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)