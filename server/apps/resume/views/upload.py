from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser

from drf_spectacular.utils import (
    extend_schema,
    OpenApiExample,
    OpenApiResponse,
    OpenApiRequest,
)

from apps.resume.serializers import ResumeUploadSerializer


class ResumeUploadView(CreateAPIView):
    serializer_class = ResumeUploadSerializer

    permission_classes = [AllowAny]
    authentication_classes = []

    parser_classes = [
        MultiPartParser,
        FormParser,
    ]

    @extend_schema(
        summary="Upload Resume",
        description="Upload a resume PDF for AI ATS analysis.",
        request=OpenApiRequest(
            request=ResumeUploadSerializer,
            encoding={
                "file": {
                    "contentType": "application/pdf",
                },
            },
        ),
        examples=[
            OpenApiExample(
                "Resume Upload",
                value={
                    "title": "Software Engineer Resume",
                    "file": "(binary PDF file)",
                },
                request_only=True,
            ),
        ],
        responses={
            201: OpenApiResponse(description="Resume uploaded successfully."),
            400: OpenApiResponse(description="Validation failed."),
        },
    )
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data,
            context={"request": request},
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {
                "success": True,
                "message": "Resume uploaded successfully.",
                "data": serializer.data,
                "errors": None,
            },
            status=status.HTTP_201_CREATED,
        )