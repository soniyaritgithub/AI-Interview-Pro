from django.contrib import admin

from .models import Resume, ResumeAnalysis


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "user",
        "title",
        "status",
        "uploaded_at",
    )

    search_fields = (
        "title",
        "user__username",
        "user__email",
    )

    list_filter = (
        "status",
        "uploaded_at",
    )

    ordering = (
        "-uploaded_at",
    )


@admin.register(ResumeAnalysis)
class ResumeAnalysisAdmin(admin.ModelAdmin):

    list_display = (
        "resume",
        "ats_score",
        "overall_score",
        "updated_at",
    )

    search_fields = (
        "resume__title",
        "resume__user__username",
        "resume__user__email",
    )

    list_filter = (
        "updated_at",
    )

    ordering = (
        "-updated_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )