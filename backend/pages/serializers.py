from rest_framework import serializers
from pages.models import Homepage, Skill


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "description"]


class HomepageSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()

    def get_skills(self, obj):
        selected_options = Skill.objects.all().distinct()
        return SkillSerializer(selected_options, many=True).data

    class Meta:
        model = Homepage
        fields = ["title", "description", "email", "linkedin", "skills"]
