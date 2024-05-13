from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        instance.is_active = True
        if password is not None:
            instance.set_password(raw_password=password)
        instance.save()
        return instance


class PasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(min_length=2)
    password = serializers.CharField(min_length=2)
    confirm_password = serializers.CharField(min_length=2)

