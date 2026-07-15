import json
import logging

from google import genai

from django.conf import settings


logger = logging.getLogger(__name__)


class GeminiServiceError(Exception):
    """Raised when Gemini AI fails."""
    pass


class GeminiService:

    def __init__(self):

        if not settings.GEMINI_API_KEY:
            raise GeminiServiceError(
                "GEMINI_API_KEY is missing."
            )

        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    def analyze_resume(
        self,
        resume_text: str,
    ) -> dict:

        prompt = f"""
You are an ATS Resume Analyzer.

Return ONLY valid JSON.

Required JSON format:

{{
    "ats_score": 0,
    "overall_score": 0,
    "summary": "",
    "strengths": [],
    "weaknesses": [],
    "missing_skills": [],
    "suggestions": []
}}

Rules:

- Return ONLY valid JSON.
- Do not use markdown.
- Do not use ```json.
- ATS score must be between 0 and 100.
- overall_score must be between 0 and 100.

Resume:

{resume_text}
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
            )

            content = response.text.strip()

            if content.startswith("```"):
                content = (
                    content
                    .replace("```json", "")
                    .replace("```", "")
                    .strip()
                )

            return json.loads(content)

        except Exception as exc:

            logger.exception(exc)

            raise GeminiServiceError(
                f"Gemini failed: {exc}"
            ) from exc

    def match_job_description(
        self,
        resume_text: str,
        job_description: str,
    ) -> dict:

        prompt = f"""
You are an ATS Resume Matching Expert.

Compare the resume with the job description.

Return ONLY valid JSON.

Required JSON format:

{{
    "match_score": 0,
    "missing_keywords": [],
    "missing_skills": [],
    "strengths": [],
    "suggestions": [],
    "summary": ""
}}

Rules:

- Return ONLY valid JSON.
- Do not use markdown.
- Do not use triple backticks.
- match_score must be between 0 and 100.
- missing_keywords should contain ATS keywords missing from the resume.
- missing_skills should contain technical skills missing from the resume.
- strengths should contain matching skills.
- suggestions should contain practical improvements.
- summary should be concise.

Resume:

{resume_text}

Job Description:

{job_description}
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
            )

            content = response.text.strip()

            if content.startswith("```"):
                content = (
                    content
                    .replace("```json", "")
                    .replace("```", "")
                    .strip()
                )

            return json.loads(content)

        except Exception as exc:

            logger.exception(exc)

            raise GeminiServiceError(
                f"Job match failed: {exc}"
            ) from exc