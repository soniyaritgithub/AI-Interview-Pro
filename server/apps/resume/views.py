import io
import json
import logging

from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

import pymupdf

from apps.resume.models import Resume
from apps.resume.serializers import ResumeSerializer
from apps.resume.services.gemini_analyzer import GeminiAnalyzer, GeminiAnalysisError
from apps.resume.services.gemini_service import GeminiService, GeminiServiceError

# ⚠️ pdf_service import hata diya - module missing hai
# from apps.resume.services.pdf_service import generate_pdf_report

logger = logging.getLogger(__name__)


# ========== BASE VIEW WITH CSRF EXEMPT ==========
@method_decorator(csrf_exempt, name='dispatch')
class BaseCSRFExemptView(APIView):
    """Base view with CSRF exemption for all API endpoints"""
    pass


# ========== RESUME UPLOAD ==========
class ResumeUploadView(BaseCSRFExemptView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        try:
            file = request.FILES.get("file")
            if not file:
                return Response(
                    {"success": False, "message": "No file provided.", "data": None, "errors": {}},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            pdf_bytes = file.read()
            doc = pymupdf.open(stream=pdf_bytes, filetype="pdf")
            text = ""
            for page in doc:
                text += page.get_text()
            doc.close()

            resume = Resume.objects.create(
                file_name=file.name,
                raw_text=text,
            )

            return Response(
                {"success": True, "message": "Resume uploaded.", "data": ResumeSerializer(resume).data, "errors": {}},
                status=status.HTTP_201_CREATED,
            )

        except Exception as exc:
            logger.exception(exc)
            return Response(
                {"success": False, "message": "Upload failed.", "data": None, "errors": {"detail": str(exc)}},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


# ========== RESUME ANALYZE ==========
class ResumeAnalyzeView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def post(self, request, pk):
        try:
            resume = Resume.objects.get(pk=pk)
            analyzer = GeminiAnalyzer()
            result = analyzer.analyze_resume(resume.raw_text)

            resume.analysis_result = result
            resume.save()

            return Response(
                {"success": True, "message": "Analysis complete.", "data": result, "errors": {}},
                status=status.HTTP_200_OK,
            )

        except Resume.DoesNotExist:
            return Response(
                {"success": False, "message": "Resume not found.", "data": None, "errors": {}},
                status=status.HTTP_404_NOT_FOUND,
            )
        except GeminiAnalysisError as exc:
            logger.exception(exc)
            return Response(
                {"success": False, "message": str(exc), "data": None, "errors": {}},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


# ========== RESUME HISTORY ==========
class ResumeHistoryView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def get(self, request):
        resumes = Resume.objects.all().order_by("-created_at")
        return Response(
            {"success": True, "message": "OK", "data": ResumeSerializer(resumes, many=True).data, "errors": {}},
            status=status.HTTP_200_OK,
        )


# ========== RESUME DETAIL ==========
class ResumeDetailView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def get(self, request, resume_id):
        try:
            resume = Resume.objects.get(pk=resume_id)
            return Response(
                {"success": True, "message": "OK", "data": ResumeSerializer(resume).data, "errors": {}},
                status=status.HTTP_200_OK,
            )
        except Resume.DoesNotExist:
            return Response(
                {"success": False, "message": "Not found.", "data": None, "errors": {}},
                status=status.HTTP_404_NOT_FOUND,
            )

    def delete(self, request, resume_id):
        try:
            resume = Resume.objects.get(pk=resume_id)
            resume.delete()
            return Response(
                {"success": True, "message": "Deleted.", "data": None, "errors": {}},
                status=status.HTTP_200_OK,
            )
        except Resume.DoesNotExist:
            return Response(
                {"success": False, "message": "Not found.", "data": None, "errors": {}},
                status=status.HTTP_404_NOT_FOUND,
            )


# ========== RESUME REANALYZE ==========
class ResumeReanalyzeView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def post(self, request, resume_id):
        try:
            resume = Resume.objects.get(pk=resume_id)
            analyzer = GeminiAnalyzer()
            result = analyzer.analyze_resume(resume.raw_text)
            resume.analysis_result = result
            resume.save()
            return Response(
                {"success": True, "message": "Reanalysis complete.", "data": result, "errors": {}},
                status=status.HTTP_200_OK,
            )
        except Resume.DoesNotExist:
            return Response(
                {"success": False, "message": "Not found.", "data": None, "errors": {}},
                status=status.HTTP_404_NOT_FOUND,
            )


# ========== RESUME DOWNLOAD (pdf_service hata diya) ==========
class ResumeDownloadView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def get(self, request, resume_id):
        try:
            resume = Resume.objects.get(pk=resume_id)
            if not resume.analysis_result:
                return Response(
                    {"success": False, "message": "No analysis found.", "data": None, "errors": {}},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            
            # ⚠️ Temporary: JSON response instead of PDF (pdf_service missing)
            pdf_bytes = json.dumps(resume.analysis_result, indent=2).encode('utf-8')
            
            response = HttpResponse(pdf_bytes, content_type="application/json")
            response["Content-Disposition"] = f'attachment; filename="report_{resume_id}.json"'
            return response
            
        except Resume.DoesNotExist:
            return Response(
                {"success": False, "message": "Not found.", "data": None, "errors": {}},
                status=status.HTTP_404_NOT_FOUND,
            )


# ========== RESUME DASHBOARD ==========
class ResumeDashboardView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def get(self, request):
        total = Resume.objects.count()
        analyzed = Resume.objects.exclude(analysis_result=None).count()
        return Response(
            {
                "success": True,
                "message": "OK",
                "data": {
                    "total_resumes": total,
                    "analyzed_resumes": analyzed,
                },
                "errors": {},
            },
            status=status.HTTP_200_OK,
        )


# ========== RESUME MATCH ==========
class ResumeMatchView(BaseCSRFExemptView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            resume_id = request.data.get("resume_id")
            job_description = request.data.get("job_description")

            if not resume_id or not job_description:
                return Response(
                    {"success": False, "message": "resume_id and job_description required.", "data": None, "errors": {}},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            resume = Resume.objects.get(pk=resume_id)
            service = GeminiService()
            result = service.match_job_description(resume.raw_text, job_description)

            return Response(
                {"success": True, "message": "Match complete.", "data": result, "errors": {}},
                status=status.HTTP_200_OK,
            )

        except Resume.DoesNotExist:
            return Response(
                {"success": False, "message": "Resume not found.", "data": None, "errors": {}},
                status=status.HTTP_404_NOT_FOUND,
            )
        except GeminiServiceError as exc:
            return Response(
                {"success": False, "message": str(exc), "data": None, "errors": {}},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )