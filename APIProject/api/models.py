from django.db import models

# Create your models here.


class Article(models.Model):
    subject = models.TextField()
    date_of_publish = models.DateField()
    state = models.TextField()
    attachment = models.FileField(upload_to="attachments", default='null')

    def __str__(self):
        return self.subject
