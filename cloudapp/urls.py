from .import views
from django.urls import path


app_name = "cloudapp"


urlpatterns = [
    path('', views.home, name="home"),
]