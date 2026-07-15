from rest_framework import serializers

from apps.resume.models import (
    Resume,
    ResumeAnalysis,
)

from apps.resume.services.pdf_extractor import (
    PDFExtractor,
    PDFExtractionError,
)

from apps.resume.services.gemini_service import GeminiService
from django.contrib.auth.models import AnonymousUser

class ResumeUploadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume
        fields = [
            "id",
            "title",
            "file",
        ]

        read_only_fields = [
            "id",
        ]

    def create(self, validated_data):
        request = self.context["request"]
        user = getattr(request, "user", None)
        
        # Agar user Anonymous hai toh use strict None kar dein
        if isinstance(user, AnonymousUser) or not getattr(user, "is_authenticated", False):
            user = None
            
        uploaded_file = validated_data["file"]

        # ----------------- EXACT UPDATE HERE -----------------
        # Agar user logged in hai, tabhi filter lagayein, nahi toh skip karein
        if user is not None:
            existing_resume = Resume.objects.filter(
                user=user,
                original_filename=uploaded_file.name,
            ).first()
        else:
            existing_resume = None
        # -----------------------------------------------------

        if existing_resume:
            raise serializers.ValidationError(
                "This resume has already been uploaded."
            )

        resume = Resume.objects.create(
            user=user, # Ye ab bilkul safe hai (None ya actual user)
            title=validated_data["title"],
            file=uploaded_file,
            original_filename=uploaded_file.name,
            file_size=uploaded_file.size,
        )

        try:
            extracted_text = PDFExtractor.extract_text(
                resume.file.path,
            )

            analysis, created = ResumeAnalysis.objects.get_or_create(
                resume=resume,
                defaults={
                    "extracted_text": extracted_text,
                },
            )

            if not created:
                analysis.extracted_text = extracted_text
                analysis.save(update_fields=["extracted_text"])
            
            try:
                ai_result = GeminiService().analyze_resume(
                    extracted_text,
                )

                analysis.ats_score = ai_result.get("ats_score", 0)
                analysis.overall_score = ai_result.get("overall_score", 0)
                analysis.summary = ai_result.get("summary", "")
                analysis.strengths = ai_result.get("strengths", [])
                analysis.weaknesses = ai_result.get("weaknesses", [])
                analysis.missing_skills = ai_result.get("missing_skills", [])
                analysis.suggestions = ai_result.get("suggestions", [])
                analysis.raw_response = ai_result

                analysis.save()

                resume.status = "completed"
                resume.save(update_fields=["status"])

            except Exception as exc:
                print(exc)

                analysis.raw_response = {
                    "error": str(exc),
                }
                analysis.save(update_fields=["raw_response"])

                resume.status = "failed"
                resume.save(update_fields=["status"])

            return resume

        except PDFExtractionError as exc:
            raise serializers.ValidationError(
                {
                    "file": str(exc),
                }
            )

        return resume