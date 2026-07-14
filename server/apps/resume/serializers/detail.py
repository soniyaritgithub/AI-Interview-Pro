from rest_framework import serializers

from apps.resume.models import (
    Resume,
    ResumeAnalysis,
)


class ResumeDetailResumeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume

        fields = [
            "id",
            "title",
            "status",
            "uploaded_at",
            "updated_at",
        ]


class ResumeAnalysisSerializer(serializers.ModelSerializer):

    class Meta:
        model = ResumeAnalysis

        fields = [
            "ats_score",
            "overall_score",
            "summary",
            "strengths",
            "weaknesses",
            "missing_skills",
            "suggestions",
            "created_at",
            "updated_at",
        ]


class ResumeDetailSerializer(serializers.Serializer):

    resume = ResumeDetailResumeSerializer()

    analysis = ResumeAnalysisSerializer()