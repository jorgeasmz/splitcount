from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'event', EventView, 'event')
router.register(r'activities', Activity_view, 'activities')

urlpatterns = [
    path("api/", include(router.urls)),
    path('sign-up/', sign_up, name='create-account'),
    path('log-in/', log_in, name='log-in'),
]