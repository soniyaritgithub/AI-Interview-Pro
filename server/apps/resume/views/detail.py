from rest_framework import status

from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response

from rest_framework.views import APIView

from apps.resume.serializers.detail import (
    ResumeDetailSerializer,
)

from apps.resume.services.detail_service import (
    ResumeDetailService,
)


class ResumeDetailView(APIView):

    permission_classes = [
        IsAuthenticated,
    ]

    def get(
        self,
        request,
        resume_id,
    ):

        service = ResumeDetailService(
            user=request.user,
            resume_id=resume_id,
        )

        data = service.execute()

        serializer = ResumeDetailSerializer(
            data,
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )