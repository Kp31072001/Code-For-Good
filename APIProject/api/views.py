from django.shortcuts import render, HttpResponse
from .models import Article
from .forms import FileUploadForm
from rest_framework import viewsets

# Create your views here.


from django.shortcuts import render
from django.http import JsonResponse
from .forms import FileUploadForm


def django_image_and_file_upload_ajax(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return JsonResponse({'error': False, 'message': 'Uploaded Successfully'})
        else:
            return JsonResponse({'error': True, 'errors': form.errors})
    else:
        form = FileUploadForm()
        return render(request, './django_image_upload_ajax.html', {'form': form})
