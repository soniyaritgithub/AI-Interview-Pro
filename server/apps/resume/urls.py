from django.urls import path

from .views import (
    ResumeUploadView,
    ResumeAnalysisAPIView,
    ResumeHistoryAPIView,
    ResumeDetailAPIView,
    ResumeDeleteAPIView,
    ResumeReanalyzeAPIView,
    DashboardStatisticsAPIView,
    ResumeDownloadAPIView,
    JobMatchAPIView,
    
)

urlpatterns = [

    path(
        "upload/",
        ResumeUploadView.as_view(),
        name="resume-upload",
    ),

    path(
        "analyze/<int:pk>/",
        ResumeAnalysisAPIView.as_view(),
        name="resume-analyze",
    ),

    path(
        "history/",
        ResumeHistoryAPIView.as_view(),
        name="resume-history",
    ),

    path(
    "dashboard/",
    DashboardStatisticsAPIView.as_view(),
    name="resume-dashboard",
    ),

    path(
        "<int:resume_id>/",
        ResumeDetailAPIView.as_view(),
        name="resume-detail",
    ),

    path(
    "<int:resume_id>/delete/",
    ResumeDeleteAPIView.as_view(),
    name="resume-delete",
    ),

    path(
    "<int:resume_id>/reanalyze/",
    ResumeReanalyzeAPIView.as_view(),
    name="resume-reanalyze",
    ),

    path(
    "<int:resume_id>/download/",
    ResumeDownloadAPIView.as_view(),
    name="resume-download",
    ),

    path(
    "match/",
    JobMatchAPIView.as_view(),
    name="resume-match",
    ),

]