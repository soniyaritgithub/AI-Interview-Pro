from rest_framework import serializers
from apps.resume.models import ResumeAnalysis

class ResumeHistorySerializer(serializers.ModelSerializer):
    # Resume ka title show karne ke liye
    resume_title = serializers.CharField(source='resume.title', read_only=True)
    
    class Meta:
        model = ResumeAnalysis
        fields = ['id', 'resume_title', 'ats_score', 'updated_at']