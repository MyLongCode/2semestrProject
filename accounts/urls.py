from django.template.context_processors import static
from django.urls import path, re_path, include

from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import ProfileListCreate, SignUpView, LoginView, ProfileDetail, FollowersDetail, FollowersListCreate

urlpatterns = [
                  path('', views.user_list, name='user_list'),
                  path('info/', views.user_info, name='info'),
                  path('api/', ProfileListCreate.as_view(), name='users'),
                  path('api/<int:pk>', ProfileDetail.as_view(), name='usersDetail'),
                  path('api/friends/<int:pk>', FollowersDetail.as_view(), name='usersDetail'),
                  path('api/friends/', FollowersListCreate.as_view(), name='users'),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    #ffe416abd94a6a560998d9f063452d5a51279097
    #http 127.0.0.1:8000/conversations/start/1 'Authorization: Token ffe416abd94a6a560998d9f063452d5a51279097'



