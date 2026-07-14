import json
import logging

from google import genai
from google.genai import types

from django.conf import settings

from apps.resume.prompts import ATS_ANALYSIS_PROMPT
from apps.resume.schemas import ATS_RESPONSE_SCHEMA

logger = logging.getLogger(__name__)


class GeminiAnalysisError(Exception):
    """Raised when Gemini analysis fails."""
    pass


class GeminiAnalyzer:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY,
            http_options=types.HttpOptions(
                timeout=60000,
            ),
        )

        self.model = "gemini-2.5-flash"

        logger.info(
            "Gemini client initialized."
        )

    def analyze_resume(self, resume_text: str) -> dict:
        """
        Analyze resume using Gemini and return structured JSON.
        """

        prompt = f"""
{ATS_ANALYSIS_PROMPT}

Resume:

{resume_text}
"""

        try:

            response = self.client.models.generate_content(
                model=self.model,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    response_json_schema=ATS_RESPONSE_SCHEMA,
                    temperature=0.2,
                ),
            )

            if not response.text:
                raise GeminiAnalysisError(
                    "Empty response received from Gemini."
                )

            logger.info(
                "Gemini analysis completed successfully."
            )

            return json.loads(response.text)

        except json.JSONDecodeError as exc:

            logger.exception(
                "Invalid JSON returned by Gemini."
            )

            raise GeminiAnalysisError(
                "Gemini returned invalid JSON."
            ) from exc

        except Exception as exc:

            logger.exception(
                "Gemini analysis failed."
            )

            raise GeminiAnalysisError(
                f"Gemini Analysis Failed: {exc}"
            ) from exc