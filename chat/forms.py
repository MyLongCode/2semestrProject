from .models import *
from django import forms


class AddCommentForm(forms.ModelForm):
    class Meta:
        model = Chat
        fields = ['post', 'owner', 'text', 'created']