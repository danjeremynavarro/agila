from django.urls import path
from main.auth import auth_sucess

print("test")
urlpatterns = [
    path('', auth_sucess)
]