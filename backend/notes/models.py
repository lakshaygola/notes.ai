from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    todo_id = models.AutoField(primary_key=True)
    todo_title = models.CharField(max_length=200)
    todo_description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="todos")

    def __str__(self):
        return f'{self.todo_title}->{self.author}'
