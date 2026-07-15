from rest_framework import serializers
from apps.resume.models import ResumeAnalysis

class ResumeHistorySerializer(serializers.ModelSerializer):
    resume_title = serializers.CharField(source='resume.title', read_only=True)
    
    class Meta:
        model = ResumeAnalysis
        fields = ['id', 'resume_title', 'ats_score', 'updated_at']