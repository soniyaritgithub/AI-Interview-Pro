from django.db import transaction

from apps.resume.models import (
    Resume,
    ResumeAnalysis,
)

from apps.resume.services.pdf_extractor import (
    PDFExtractor,
)

from apps.resume.services.gemini_analyzer import (
    GeminiAnalyzer,
)


class ResumeAnalysisService:
    """
    Service responsible for:
    1. Extracting PDF text
    2. Running Gemini ATS analysis
    3. Saving analysis into database
    """

    def __init__(self):
        self.pdf_extractor = PDFExtractor()
        self.gemini = GeminiAnalyzer()

    @transaction.atomic
    def analyze(self, resume: Resume) -> ResumeAnalysis:

        extracted_text = self.pdf_extractor.extract_text(
            resume.file.path
        )

        try:
            ai_result = self.gemini.analyze_resume(extracted_text)

        except Exception:
            ai_result = {
                "ats_score": 0,
                "overall_score": 0,
                "summary": "AI service temporarily unavailable.",
                "strengths": [],
                "weaknesses": [],
                "missing_skills": [],
                "suggestions": [],
            }

        analysis, _ = ResumeAnalysis.objects.update_or_create(
            resume=resume,
            defaults={
                "ats_score": ai_result.get(
                    "ats_score",
                    0,
                ),
                "summary": ai_result.get(
                    "summary",
                    "",
                ),
                "strengths": ai_result.get(
                    "strengths",
                    [],
                ),
                "weaknesses": ai_result.get(
                    "weaknesses",
                    [],
                ),
                "missing_skills": ai_result.get(
                    "missing_skills",
                    [],
                ),
                "suggestions": ai_result.get(
                    "suggestions",
                    [],
                ),
                "raw_response": ai_result,
            },
        )

        return analysis