from django.db import models

# Create your models here.
class React(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField(("tammy@gmail.com"), max_length=254)
    password =models.CharField(max_length=20)