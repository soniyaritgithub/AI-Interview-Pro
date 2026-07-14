from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from apps.accounts.serializers import ProfileSerializer
from apps.core.responses import success_response


class ProfileView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        serializer = ProfileSerializer(request.user)

        return success_response(
            message="Profile fetched successfully.",
            data=serializer.data,
        )