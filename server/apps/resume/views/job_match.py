from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.resume.serializers import (
    JobMatchRequestSerializer,
    JobMatchResponseSerializer,
)

from apps.resume.services import (
    JobMatchService,
)
from drf_spectacular.utils import (
    extend_schema,
)


class JobMatchAPIView(APIView):
    """
    Compare a resume against a Job Description using Gemini AI.
    """

    permission_classes = [
        IsAuthenticated,
    ]
    @extend_schema(
        request=JobMatchRequestSerializer,
        responses=JobMatchResponseSerializer,
    )
    def post(
        self,
        request,
    ):

        serializer = JobMatchRequestSerializer(
            data=request.data,
        )

        serializer.is_valid(
            raise_exception=True,
        )

        resume_id = serializer.validated_data[
            "resume_id"
        ]

        job_description = serializer.validated_data[
            "job_description"
        ]

        result = JobMatchService.match_resume(
            user=request.user,
            resume_id=resume_id,
            job_description=job_description,
        )

        return Response(
            {
                "success": True,
                "message": "Job description matched successfully.",
                "data": result["job_match"],
                "errors": None,
            },
            status=status.HTTP_200_OK,
        )