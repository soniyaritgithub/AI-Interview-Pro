from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.resume.models import Resume, ResumeAnalysis
from apps.resume.serializers import (
    ResumeAnalysisSerializer,
    ResumeHistorySerializer,
    ResumeDetailSerializer,
)
from apps.resume.services import (
    ResumeAnalysisService,
    ResumeDeleteService,
    ResumeDashboardService,
    ResumeHistoryService,
    ResumePDFService,
    ResumeReanalyzeService,
    ResumeDetailService,
)

@method_decorator(csrf_exempt, name='dispatch')
class ResumeAnalysisAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, pk):
        resume = Resume.objects.filter(pk=pk).first()
        if resume is None:
            return Response({"success": False, "message": "Resume not found."}, status=status.HTTP_404_NOT_FOUND)

        service = ResumeAnalysisService()
        try:
            analysis = service.analyze(resume)
        except Exception as e:
            return Response({"success": False, "message": str(e)}, status=status.HTTP_503_SERVICE_UNAVAILABLE)

        serializer = ResumeAnalysisSerializer(analysis)
        return Response({"success": True, "message": "Resume analyzed successfully.", "data": serializer.data}, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class ResumeHistoryAPIView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ResumeHistorySerializer
    service_class = ResumeHistoryService

    def get_queryset(self):
        return self.service_class().get_queryset(
            user=None,
            search=self.request.query_params.get("search"),
            status=self.request.query_params.get("status"),
            ordering=self.request.query_params.get("ordering", "-updated_at")
        )

@method_decorator(csrf_exempt, name='dispatch')
class ResumeDetailAPIView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, resume_id):
        service = ResumeDetailService(user=None, resume_id=resume_id)
        result = service.execute()
        serializer = ResumeDetailSerializer({"resume": result["resume"], "analysis": result["analysis"]})
        return Response({"success": True, "data": serializer.data}, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class ResumeDeleteAPIView(APIView):
    permission_classes = [AllowAny]
    def delete(self, request, resume_id):
        resume = Resume.objects.filter(id=resume_id).first()
        if resume is None:
            return Response({"success": False, "message": "Resume not found."}, status=status.HTTP_404_NOT_FOUND)
        ResumeDeleteService().delete(resume)
        return Response({"success": True, "message": "Deleted successfully."}, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class DashboardStatisticsAPIView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        service = ResumeDashboardService()
        statistics = service.get_statistics(user=None)
        return Response({"success": True, "data": statistics}, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class ResumeReanalyzeAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request, resume_id):
        resume = Resume.objects.filter(id=resume_id).first()
        if resume is None:
            return Response({"success": False, "message": "Resume not found."}, status=status.HTTP_404_NOT_FOUND)
        analysis = ResumeReanalyzeService().reanalyze(resume)
        return Response({"success": True, "data": ResumeAnalysisSerializer(analysis).data}, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class ResumeDownloadAPIView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, resume_id):
        analysis = ResumeAnalysis.objects.select_related("resume").filter(resume__id=resume_id).first()
        if analysis is None:
            return Response({"success": False, "message": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        pdf = ResumePDFService().generate(analysis)
        response = HttpResponse(pdf, content_type="application/pdf")
        response["Content-Disposition"] = f'attachment; filename="ATS_Report_{resume_id}.pdf"'
        return response