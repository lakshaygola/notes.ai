from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['todo_id', 'todo_title', 'todo_description', 'created_at', 'author']
        extra_kwargs = {
            'author': {'read_only': True}
        }
