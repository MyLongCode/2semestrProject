from django import forms
from posts.models import Post


class PostUploadForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('owner', 'music', 'post_text', 'image')
