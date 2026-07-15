from django.db.models import Q
from apps.resume.models import ResumeAnalysis

class ResumeHistoryService:
    """
    Production-ready service for Resume History API.

    Features:
    - Search by resume title
    - Filter by status
    - Safe ordering
    - Optimized queryset (Bypassed authentication)
    """

    def get_queryset(
        self,
        *,
        user=None,        # User parameter optional hai, ab ise filter mein use nahi karenge
        search=None,
        status=None,
        ordering="-updated_at",
    ):
        # 1. Base Queryset (User filter hata diya gaya hai)
        queryset = ResumeAnalysis.objects.select_related("resume")

        # 2. Search by Resume Title
        if search:
            queryset = queryset.filter(
                Q(resume__title__icontains=search)
            )

        # 3. Filter by Resume Status
        if status:
            queryset = queryset.filter(
                resume__status=status,
            )

        # 4. Safe ordering logic
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