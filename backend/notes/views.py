from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .serializers import TodoSerializer
from .models import Todo


class TodoCreate(generics.CreateAPIView):

    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Todo.objects.filter(author=user)
        return queryset

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            return Response({'Task created'}, status=status.HTTP_201_CREATED)
        else:
            return Response({serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class TodoList(generics.ListAPIView):

    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = Todo.objects.filter(author=user)
        return queryset


class TodoDelete(APIView):

    serializer_class = TodoSerializer

    def get_queryset(self, todo_id):
        user = self.request.user
        queryset = Todo.objects.filter(author=user, todo_id=todo_id)
        return queryset

    def get(self, request, todo_id, *args, **kwargs):
        if todo_id is None:
            return Response({'Task id not provided'}, status=status.HTTP_400_BAD_REQUEST)
        queryset = self.get_queryset(todo_id=todo_id)
        if queryset.exists():
            queryset.delete()
            return Response({'Deleted task'}, status=status.HTTP_200_OK)
        return Response({'Task not found'}, status=status.HTTP_404_NOT_FOUND)


class TodoUpdate(generics.UpdateAPIView):

    serializer_class = TodoSerializer

    def get_queryset(self, todo_id, *args, **kwargs):
        user = self.request.user
        print(user, todo_id)
        queryset = Todo.objects.filter(author=user, todo_id=todo_id)
        return queryset

    def update(self, request, *args, **kwargs):
        todo_id = kwargs.get('todo_id', None)
        if todo_id is None:
            return Response({'Todo task id not provided'}, status=status.HTTP_400_BAD_REQUEST)
        queryset = self.get_queryset(todo_id=todo_id)
        if queryset.exists():
            serializer = self.get_serializer(queryset.first(), data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Task not found'}, status=status.HTTP_404_NOT_FOUND)

    def perform_update(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
            return Response({'Updated task'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
