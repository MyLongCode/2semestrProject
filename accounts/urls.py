from django.template.context_processors import static
from django.urls import path

from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
	path('register/', views.user_register, name='register'),
	path('login/', views.user_login, name='login'),
	path('info/', views.user_info, name='info'),
]


if settings.DEBUG:
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
