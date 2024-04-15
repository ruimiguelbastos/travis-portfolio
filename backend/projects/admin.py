from django.contrib import admin
from projects.models import Project
from projects.models import ProjectImage


class ProjectImageInline(admin.StackedInline):
    model = ProjectImage
    fk_name = "Project"


class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]

    class Meta:
        model = Project

class ProjectAdmin(admin.ModelAdmin):
    pass


admin.site.register(ProjectImage)
admin.site.register(Project, ProjectAdmin)
