from django.db.models import Avg, Max

from apps.resume.models import ResumeAnalysis


class ResumeDashboardService:
    """
    Build dashboard statistics for the authenticated user.
    """

    def get_statistics(self, user):

        queryset = (
            ResumeAnalysis.objects
            .select_related("resume")
            .filter(
                resume__user=user,
            )
        )

        total_resumes = queryset.count()

        average_score = (
            queryset.aggregate(
                Avg("ats_score"),
            )["ats_score__avg"]
            or 0
        )

        highest_score = (
            queryset.aggregate(
                Max("ats_score"),
            )["ats_score__max"]
            or 0
        )

        latest_analysis = (
            queryset
            .order_by("-updated_at")
            .first()
        )

        return {
            "total_resumes": total_resumes,
            "average_score": round(average_score, 2),
            "highest_score": highest_score,
            "latest_analysis": latest_analysis,
        }