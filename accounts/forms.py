from django import forms
from . import models
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import *
from django import forms


class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'place', 'biography', 'image_url']


class UserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username',)

        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['password1'].help_text = None
            self.fields['password2'].help_text = None
            self.fields['username'].help_text = None


class UserChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'place', 'biography', 'count_followers', 'image_url')


class FollowersForm(forms.ModelForm):
    class Meta:
        model = Followers
        fields = ('first_follower', 'second_follower', 'status')
