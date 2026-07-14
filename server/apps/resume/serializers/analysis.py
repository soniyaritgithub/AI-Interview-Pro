from rest_framework import serializers

from apps.resume.models import (
    Resume,
    ResumeAnalysis,
)


class ResumeSerializer(serializers.ModelSerializer):
    """
    Lightweight Resume serializer for nested response.
    """

    class Meta:
        model = Resume

        fields = (
            "id",
            "title",
            "status",
            "uploaded_at",
            "updated_at",
        )

        read_only_fields = fields


class ResumeAnalysisSerializer(serializers.ModelSerializer):
    """
    Serializer for ATS Dashboard response.
    """

    resume = ResumeSerializer(read_only=True)

    class Meta:
        model = ResumeAnalysis

        fields = (
            "id",
            "resume",
            "ats_score",
            "summary",
            "strengths",
            "weaknesses",
            "missing_skills",
            "suggestions",
            "raw_response",
            "created_at",
            "updated_at",
        )

        read_only_fields = fields