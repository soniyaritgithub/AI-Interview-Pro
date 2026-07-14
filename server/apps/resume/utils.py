import os
import uuid


def resume_upload_path(instance, filename):
    extension = os.path.splitext(filename)[1].lower()

    unique_name = f"{uuid.uuid4()}{extension}"

    return os.path.join(
        "resumes",
        unique_name,
    )