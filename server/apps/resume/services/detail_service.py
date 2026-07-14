from django.shortcuts import get_object_or_404

from rest_framework.exceptions import PermissionDenied

from apps.resume.models import (
    Resume,
    ResumeAnalysis,
)


class ResumeDetailService:

    def __init__(
        self,
        user,
        resume_id,
    ):
        self.user = user
        self.resume_id = resume_id

    def get_resume(self):

        resume = get_object_or_404(
            Resume,
            pk=self.resume_id,
        )

        if resume.user != self.user:

            raise PermissionDenied(
                "You do not have permission to access this resume."
            )

        return resume

    def get_analysis(
        self,
        resume,
    ):

        analysis = get_object_or_404(
            ResumeAnalysis,
            resume=resume,
        )

        return analysis

    def execute(self):

        resume = self.get_resume()

        analysis = self.get_analysis(
            resume,
        )

        return {
            "resume": resume,
            "analysis": analysis,
        }