from django.template.context_processors import static
from django.urls import path, re_path

from django.conf import settings
from django.conf.urls.static import static
from . import views
from .views import ProfileListCreate, SignUpView, LoginView

urlpatterns = [
                  path('register/', SignUpView.as_view(), name='register'),
                  path('login/', LoginView.as_view(), name='login'),
                  path('info/', views.user_info, name='info'),
                  path('api/', ProfileListCreate.as_view(), name='users'),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
