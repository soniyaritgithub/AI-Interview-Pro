from rest_framework import serializers


class JobMatchRequestSerializer(serializers.Serializer):
    """
    Request serializer for Resume vs Job Description matching.
    """

    resume_id = serializers.IntegerField(
        min_value=1,
    )

    job_description = serializers.CharField(
        min_length=50,
        max_length=10000,
        trim_whitespace=True,
    )


class JobMatchResponseSerializer(serializers.Serializer):
    """
    Response serializer for Job Match response.
    """

    match_score = serializers.IntegerField(
        min_value=0,
        max_value=100,
    )

    missing_keywords = serializers.ListField(
        child=serializers.CharField(),
    )

    missing_skills = serializers.ListField(
        child=serializers.CharField(),
    )

    strengths = serializers.ListField(
        child=serializers.CharField(),
    )

    suggestions = serializers.ListField(
        child=serializers.CharField(),
    )

    summary = serializers.CharField()