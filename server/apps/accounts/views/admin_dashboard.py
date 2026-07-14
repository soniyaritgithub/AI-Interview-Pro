from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from apps.accounts.permissions import IsAdmin
from apps.core.responses import success_response


class AdminDashboardView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):
        return success_response(
            message="Admin dashboard fetched successfully.",
            data={
                "dashboard": "admin",
                "user": request.user.username,
                "role": request.user.role,
            },
        )