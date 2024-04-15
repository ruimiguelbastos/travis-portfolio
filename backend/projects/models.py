from django.db import models
from django.utils.translation import gettext_lazy as _
from taggit.managers import TaggableManager


class Project(models.Model):
    class Category(models.TextChoices):
        WEDDING = "WEDDING", _("Wedding")
        INTERIOR_DECORATION = "INTERIOR_DECORATION", _("Interior Decoration")
        FLOWERS = "FLOWERS", _("Flower Arrangments")
        HANDCRAFT = "HANDCRAFT", _("Handcraft")

    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.TextField(
        choices=Category.choices, default=Category.INTERIOR_DECORATION
    )
    tags = TaggableManager()


class ProjectImage(models.Model):
    src = models.FileField(upload_to="project_images/")
    title = models.CharField(max_length=100)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
