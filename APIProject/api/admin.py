from django.contrib import admin
from .models import Article
# Register your models here.


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('subject', 'date_of_publish', 'state')
    list_display = ('subject', 'date_of_publish', 'state')
    date_hierarchy = ('date_of_publish')
