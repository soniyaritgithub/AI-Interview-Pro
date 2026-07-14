from django.shortcuts import get_object_or_404

from apps.resume.models import (
    Resume,
    ResumeAnalysis,
)

from apps.resume.services.gemini_service import (
    GeminiService,
)


class JobMatchService:
    """
    Handles Resume vs Job Description matching.
    """

    @staticmethod
    def match_resume(
        *,
        user,
        resume_id: int,
        job_description: str,
    ):

        resume = get_object_or_404(
            Resume,
            id=resume_id,
            user=user,
        )

        analysis = get_object_or_404(
            ResumeAnalysis,
            resume=resume,
        )

        resume_text = analysis.extracted_text

        ai_result = GeminiService().match_job_description(
            resume_text=resume_text,
            job_description=job_description,
        )

        return {
            "resume": resume,
            "analysis": analysis,
            "job_match": ai_result,
        }