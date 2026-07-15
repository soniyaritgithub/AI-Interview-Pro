import json
import logging

import google.generativeai as genai

from django.conf import settings

from apps.resume.prompts import ATS_ANALYSIS_PROMPT

logger = logging.getLogger(__name__)


class GeminiAnalysisError(Exception):
    """Raised when Gemini analysis fails."""
    pass


class GeminiAnalyzer:

    def __init__(self):

        if not settings.GEMINI_API_KEY:
            raise GeminiAnalysisError(
                "GEMINI_API_KEY is missing."
            )

        genai.configure(
            api_key=settings.GEMINI_API_KEY
        )

        self.model = genai.GenerativeModel(
            "gemini-2.5-flash"
        )

        logger.info(
            "Gemini initialized successfully."
        )

    def analyze_resume(
        self,
        resume_text: str,
    ) -> dict:

        prompt = f"""
{ATS_ANALYSIS_PROMPT}

Resume:

{resume_text}
"""

        try:

            response = self.model.generate_content(
                prompt,
            )

            content = response.text.strip()

            if content.startswith("```"):
                content = (
                    content
                    .replace("```json", "")
                    .replace("```", "")
                    .strip()
                )

            logger.info(
                "Gemini analysis completed."
            )

            return json.loads(content)

        except json.JSONDecodeError as exc:

            logger.exception(exc)

            raise GeminiAnalysisError(
                "Gemini returned invalid JSON."
            ) from exc

        except Exception as exc:

            logger.exception(exc)

            raise GeminiAnalysisError(
                f"Gemini analysis failed: {exc}"
            ) from exc