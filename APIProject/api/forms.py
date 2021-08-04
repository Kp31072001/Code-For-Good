from django import forms
from .models import Article


class FileUploadForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ('subject', 'date_of_publish', 'attachment', 'state')
