import json
from django.contrib.auth import logout
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer, PasswordSerializer
from .utils import validate_change_passwords
from rest_framework.views import APIView


class RegisterUser(generics.CreateAPIView):
    """
    RegisterUserView creates a new user and saves its information in the database
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        """
        Create a user account
        request: http request object
        *args, **kwargs: additional arguments
        """
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.create(serializer.validated_data)
            if user is not None:
                pass
            return Response({user.username}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangePassword(generics.UpdateAPIView):

    """
    ChangePasswordView changes the password of a existing user
    """

    serializer_class = PasswordSerializer

    def get_queryset(self):
        """
        Queryset to get the specific user
        """
        user = self.request.user
        queryset = User.objects.get(username=user.username)
        return queryset

    def update(self, request, *args, **kwargs):
        """
        Update the password of current user
        request: http request object
        *args, **kwargs: additional arguments
        """
        serializer = self.serializer_class(data=request.data)
        user = request.user
        if serializer.is_valid():
            old_password = serializer.validated_data.get('old_password')
            password = serializer.validated_data.get('password', None)
            confirm_password = serializer.validated_data.get('confirm_password', None)
            is_password_valid, error = validate_change_passwords(user=user,
                                                                 old_password=old_password,
                                                                 new_password=password,
                                                                 confirm_password=confirm_password)
            if is_password_valid:
                user.set_password(raw_password=password)
                user.save()
                return Response({'Changed user password'}, status=status.HTTP_200_OK)
            return Response({error}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Logout(APIView):

    def post(self, request, *args, **kwargs):
        logout(request=request)
        return Response({f'User logged out'}, status=status.HTTP_200_OK)
