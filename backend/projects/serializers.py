from rest_framework import serializers
from projects.models import Project
from projects.models import ProjectImage
from taggit.serializers import TagListSerializerField, TaggitSerializer


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ["id", "title", "src"]


class ProjectSerializer(TaggitSerializer, serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    tags = TagListSerializerField()

    def get_images(self, obj):
        selected_options = ProjectImage.objects.filter(project_id=obj.id)
        return ImageSerializer(selected_options, many=True).data

    class Meta:
        model = Project
        fields = ["id", "title", "images", "description", "category", "tags"]
