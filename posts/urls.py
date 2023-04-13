from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from posts.views import PostsListCreate, post_upload_view


urlpatterns = [
    path('upload/', post_upload_view, name='postUpload'),
    path('api/', PostsListCreate.as_view(), name='postsList'),
               ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)





