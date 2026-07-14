from django.db import transaction

from apps.resume.services.analysis_service import ResumeAnalysisService


class ResumeReanalyzeService:
    """
    Re-run AI analysis for an existing resume.
    """

    def __init__(self):
        self.analysis_service = ResumeAnalysisService()

    @transaction.atomic
    def reanalyze(self, resume):
        """
        Analyze the existing resume again.
        """

        return self.analysis_service.analyze(resume)