from django.template.context_processors import static
from django.urls import path, re_path, include

from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import ProfileListCreate, SignUpView, LoginView, ProfileDetail, FollowersDetail, FollowersListCreate

urlpatterns = [
                  path('register/', SignUpView.as_view(), name='register'),
                  path('login/', LoginView.as_view(), name='login'),
                  path('info/', views.user_info, name='info'),
                  path('api/', ProfileListCreate.as_view(), name='users'),
                  path('api/<int:pk>', ProfileDetail.as_view(), name='usersDetail'),
                  path('api/friends/<int:pk>', FollowersDetail.as_view(), name='usersDetail'),
                  path('api/friends/', FollowersListCreate.as_view(), name='users'),
                  path('api/drf-auth/', include('rest_framework.urls'), name='auth api'),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
