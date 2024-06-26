from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('core.urls')),
    path('api/todo/app/', include('notes.urls'))
]
