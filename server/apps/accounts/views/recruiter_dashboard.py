from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from apps.accounts.permissions import IsRecruiter
from apps.core.responses import success_response


class RecruiterDashboardView(APIView):
    permission_classes = [IsAuthenticated, IsRecruiter]

    def get(self, request):
        return success_response(
            message="Recruiter dashboard fetched successfully.",
            data={
                "dashboard": "recruiter",
                "user": request.user.username,
                "role": request.user.role,
            },
        )