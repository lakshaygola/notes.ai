from django.urls import path
from .views import RegisterUser, ChangePassword, Logout
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('register/', RegisterUser.as_view(), name='user-register'),
    path('login/', TokenObtainPairView.as_view(), name='signup'),
    path('access/token/', TokenRefreshView.as_view(), name='access-token'),
    path('change/password/', ChangePassword.as_view(), name='confirm-password'),
    path('logout/', Logout.as_view(), name='logout'),
]