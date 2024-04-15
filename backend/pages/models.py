from django.db import models


class Homepage(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    email = models.EmailField()
    linkedin = models.CharField(max_length=100)


class Skill(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    Homepage = models.ForeignKey(Homepage, on_delete=models.CASCADE)
