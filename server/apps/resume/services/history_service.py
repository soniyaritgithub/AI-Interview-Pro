from django.db.models import Q

from apps.resume.models import ResumeAnalysis


class ResumeHistoryService:
    """
    Production-ready service for Resume History API.

    Features:
    - Search by resume title
    - Filter by status
    - Safe ordering
    - Optimized queryset
    """

    def get_queryset(
        self,
        *,
        user,
        search=None,
        status=None,
        ordering="-updated_at",
    ):
        queryset = (
            ResumeAnalysis.objects
            .select_related("resume")
            .filter(
                resume__user=user,
            )
        )

        # Search by Resume Title
        if search:
            queryset = queryset.filter(
                Q(
                    resume__title__icontains=search,
                )
            )

        # Filter by Resume Status
        if status:
            queryset = queryset.filter(
                resume__status=status,
            )

        # Allow only safe ordering fields
        allowed_ordering = [
            "updated_at",
            "-updated_at",
            "ats_score",
            "-ats_score",
        ]

        if ordering not in allowed_ordering:
            ordering = "-updated_at"

        queryset = queryset.order_by(ordering)

        return queryset