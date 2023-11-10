from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self,username,email,password=None):
        if not email:
            raise ValueError('users must have an email address')
        email = self.normalize_email(email)
        user= self.model(email=email,username=username)
        
        user.set_password(password)
        user.save()
        return user
class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    password =models.CharField(max_length=20)
    is_active=models.BooleanField(default=True)
    
    USERNAME_FIELD ='email'
    REQUIRED_FIELDS=['username']
    
    def get_name(self):
        return self.username
    def __str__(self):
        return self.email