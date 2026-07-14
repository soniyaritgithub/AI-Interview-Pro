from django.db import transaction

from apps.resume.models import Resume


class ResumeDeleteService:
    """
    Production-safe service for deleting a resume.
    """

    @transaction.atomic
    def delete(self, resume: Resume) -> None:
        """
        Delete resume analysis, uploaded file and resume.
        """

        # Delete uploaded file from storage
        if resume.file:
            resume.file.delete(save=False)

        # Delete database record
        resume.delete()