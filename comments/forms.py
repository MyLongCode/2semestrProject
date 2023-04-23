from .models import *
from django import forms


class AddCommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['post', 'owner', 'text', 'created']