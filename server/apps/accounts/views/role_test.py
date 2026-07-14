from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from apps.accounts.permissions import (
    IsCandidate,
)
from apps.core.responses import success_response


class CandidateDashboardView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsCandidate,
    ]

    def get(self, request):

        return success_response(
            message="Candidate dashboard access granted.",
            data={
                "user": request.user.username,
                "role": request.user.role,
            },
        )