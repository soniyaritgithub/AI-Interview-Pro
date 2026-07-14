from django.conf import settings
from django.db import models

from .utils import resume_upload_path


class Resume(models.Model):

    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        PROCESSING = "processing", "Processing"
        COMPLETED = "completed", "Completed"
        FAILED = "failed", "Failed"

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="resumes",
        null=True,
        blank=True,
    )

    title = models.CharField(
        max_length=255,
    )

    file = models.FileField(
        upload_to=resume_upload_path,
    )

    original_filename = models.CharField(
        max_length=255,
    )

    file_size = models.PositiveBigIntegerField()

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["-uploaded_at"]

    def __str__(self):
        return f"{self.user.username} - {self.title}"


class ResumeAnalysis(models.Model):

    resume = models.OneToOneField(
        Resume,
        on_delete=models.CASCADE,
        related_name="analysis",
    )

    ats_score = models.PositiveIntegerField(
        default=0,
    )

    overall_score = models.PositiveIntegerField(
        default=0,
    )

    summary = models.TextField(
        blank=True,
    )

    extracted_text = models.TextField(
        blank=True,
    )

    strengths = models.JSONField(
        default=list,
        blank=True,
    )

    weaknesses = models.JSONField(
        default=list,
        blank=True,
    )

    missing_skills = models.JSONField(
        default=list,
        blank=True,
    )

    suggestions = models.JSONField(
        default=list,
        blank=True,
    )

    ai_feedback = models.JSONField(
        default=dict,
        blank=True,
    )

    raw_response = models.JSONField(
        default=dict,
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["-updated_at"]

    def __str__(self):
        return f"Analysis #{self.resume_id}"