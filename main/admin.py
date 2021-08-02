from django.contrib import admin
from main.models.snippet import Snippet
from main.models import *
from main.models.auth import *
# Register your models here.
admin.site.register(GlAccount)
admin.site.register(AuthUser)
admin.site.register(AuthGroup)
admin.site.register(Snippet)