from django.http import HttpResponse

from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.resume.models import Resume, ResumeAnalysis
from apps.resume.serializers import ResumeAnalysisSerializer
from apps.resume.services import (
    ResumeAnalysisService,
    ResumeDeleteService,
    ResumeDashboardService,
    ResumeHistoryService,
    ResumePDFService,
    ResumeReanalyzeService,
    ResumeDetailService,
)
from apps.resume.serializers.detail import (
    ResumeDetailSerializer,
)
from apps.resume.pagination import ResumeHistoryPagination


class ResumeAnalysisAPIView(APIView):

    permission_classes = [AllowAny]

    def post(self, request, pk):

        resume = Resume.objects.filter(
            pk=pk,
        ).first()

        if resume is None:
            return Response(
                {
                    "success": False,
                    "message": "Resume not found.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        service = ResumeAnalysisService()

        try:
            analysis = service.analyze(resume)

        except Exception as e:
            return Response(
                {
                    "success": False,
                    "message": str(e),
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        serializer = ResumeAnalysisSerializer(
            analysis,
        )

        return Response(
            {
                "success": True,
                "message": "Resume analyzed successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )


class ResumeHistoryAPIView(generics.ListAPIView):
    """
    Return all analyzed resumes for the authenticated user.
    """

    serializer_class = ResumeAnalysisSerializer

    permission_classes = [AllowAny]
    pagination_class = ResumeHistoryPagination
    def get_queryset(self):

        service = ResumeHistoryService()

        return service.get_queryset(
            user=self.request.user,
            search=self.request.query_params.get("search"),
            status=self.request.query_params.get("status"),
            ordering=self.request.query_params.get(
                "ordering",
                "-updated_at",
            ),
        )


class ResumeDetailAPIView(APIView):
    """
    Return a single resume with complete AI analysis.
    """

    permission_classes = [AllowAny]

    def get(
        self,
        request,
        resume_id,
    ):

        service = ResumeDetailService(
            user=request.user,
            resume_id=resume_id,
        )

        result = service.execute()

        serializer = ResumeDetailSerializer(
            {
                "resume": result["resume"],
                "analysis": result["analysis"],
            }
        )

        return Response(
            {
                "success": True,
                "message": "Resume fetched successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )


class ResumeDeleteAPIView(APIView):
    """
    Delete a resume and its analysis.
    """

    permission_classes = [AllowAny]

    def delete(self, request, resume_id):

        resume = Resume.objects.filter(
            id=resume_id,
            user=request.user,
        ).first()

        if resume is None:
            return Response(
                {
                    "success": False,
                    "message": "Resume not found.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        service = ResumeDeleteService()

        service.delete(resume)

        return Response(
            {
                "success": True,
                "message": "Resume deleted successfully.",
            },
            status=status.HTTP_200_OK,
        )
    
class DashboardStatisticsAPIView(APIView):
    """
    Return dashboard statistics for the authenticated user.
    """

    permission_classes = [AllowAny]

    def get(self, request):

        service = ResumeDashboardService()

        statistics = service.get_statistics(
            request.user,
        )

        latest = statistics["latest_analysis"]

        latest_resume = None

        if latest is not None:
            latest_resume = ResumeAnalysisSerializer(
                latest,
            ).data

        return Response(
            {
                "success": True,
                "message": "Dashboard statistics fetched successfully.",
                "data": {
                    "total_resumes": statistics["total_resumes"],
                    "average_score": statistics["average_score"],
                    "highest_score": statistics["highest_score"],
                    "latest_resume": latest_resume,
                },
            },
            status=status.HTTP_200_OK,
        )

class ResumeReanalyzeAPIView(APIView):
    """
    Re-analyze an existing resume.
    """

    permission_classes = [AllowAny]
    def post(self, request, resume_id):

        resume = Resume.objects.filter(
            id=resume_id,
            user=request.user,
        ).first()

        if resume is None:
            return Response(
                {
                    "success": False,
                    "message": "Resume not found.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        service = ResumeReanalyzeService()

        analysis = service.reanalyze(
            resume,
        )

        serializer = ResumeAnalysisSerializer(
            analysis,
        )

        return Response(
            {
                "success": True,
                "message": "Resume re-analyzed successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_200_OK,
        )
    
class ResumeDownloadAPIView(APIView):
    """
    Download ATS Report PDF.
    """

    permission_classes = [AllowAny]

    def get(self, request, resume_id):

        analysis = (
            ResumeAnalysis.objects
            .select_related("resume")
            .filter(
                resume__id=resume_id,
                resume__user=request.user,
            )
            .first()
        )

        if analysis is None:

            return Response(
                {
                    "success": False,
                    "message": "Resume analysis not found.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        pdf_service = ResumePDFService()

        pdf = pdf_service.generate(
            analysis,
        )

        response = HttpResponse(
            pdf,
            content_type="application/pdf",
        )

        response[
            "Content-Disposition"
        ] = (
            f'attachment; filename="ATS_Report_{resume_id}.pdf"'
        )

        return response