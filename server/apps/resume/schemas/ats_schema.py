ATS_RESPONSE_SCHEMA = {
    "type": "object",
    "properties": {
        "ats_score": {
            "type": "integer"
        },
        "missing_skills": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "strengths": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "weaknesses": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "summary": {
            "type": "string"
        },
        "suggestions": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": [
        "ats_score",
        "missing_skills",
        "strengths",
        "weaknesses",
        "summary",
        "suggestions"
    ]
}