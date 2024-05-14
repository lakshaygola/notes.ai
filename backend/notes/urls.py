from django.urls import path
from .views import (TodoCreate, TodoList, TodoDelete, TodoUpdate)


urlpatterns = [
    path('create/', TodoCreate.as_view(), name='todo-task-create'),
    path('all/todos/', TodoList.as_view(), name='todo-list'),
    path('delete/<int:todo_id>/', TodoDelete.as_view(), name='todo-delete'),
    path('update/<int:todo_id>/', TodoUpdate.as_view(), name='todo-update'),
]
