from .models import *
from django import forms


class AddCommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['music', 'owner', 'text', 'created']