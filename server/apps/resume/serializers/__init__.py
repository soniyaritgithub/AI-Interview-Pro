from .upload import ResumeUploadSerializer
from .analysis import ResumeAnalysisSerializer
from .history import ResumeHistorySerializer  # Ye nayi line add ki
from .detail import ResumeDetailSerializer
from .job_match import (
    JobMatchRequestSerializer,
    JobMatchResponseSerializer,
)

__all__ = [
    "ResumeUploadSerializer",
    "ResumeAnalysisSerializer",
    "ResumeHistorySerializer", # Ye add kiya
    "ResumeDetailSerializer",
    "JobMatchRequestSerializer",
    "JobMatchResponseSerializer",
]