from django.contrib import admin
from pages.models import Homepage
from pages.models import Skill


class ProjectAdmin(admin.ModelAdmin):
    pass


admin.site.register(Homepage, ProjectAdmin)
admin.site.register(Skill, ProjectAdmin)
