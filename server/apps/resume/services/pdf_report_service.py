from io import BytesIO

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


class ResumePDFService:
    """
    Generate ATS Report PDF.
    """

    def generate(self, analysis):

        buffer = BytesIO()

        document = SimpleDocTemplate(buffer)

        styles = getSampleStyleSheet()

        story = []

        story.append(
            Paragraph(
                "<b>AI Interview Copilot</b>",
                styles["Title"],
            )
        )

        story.append(
            Spacer(1, 20),
        )

        story.append(
            Paragraph(
                f"<b>ATS Score:</b> {analysis.ats_score}",
                styles["Heading2"],
            )
        )

        story.append(
            Spacer(1, 12),
        )

        story.append(
            Paragraph(
                "<b>Professional Summary</b>",
                styles["Heading2"],
            )
        )

        story.append(
            Paragraph(
                analysis.summary or "-",
                styles["BodyText"],
            )
        )

        story.append(
            Spacer(1, 12),
        )

        story.append(
            Paragraph(
                "<b>Strengths</b>",
                styles["Heading2"],
            )
        )

        for item in analysis.strengths:
            story.append(
                Paragraph(
                    f"• {item}",
                    styles["BodyText"],
                )
            )

        story.append(
            Spacer(1, 12),
        )

        story.append(
            Paragraph(
                "<b>Weaknesses</b>",
                styles["Heading2"],
            )
        )

        for item in analysis.weaknesses:
            story.append(
                Paragraph(
                    f"• {item}",
                    styles["BodyText"],
                )
            )

        story.append(
            Spacer(1, 12),
        )

        story.append(
            Paragraph(
                "<b>Missing Skills</b>",
                styles["Heading2"],
            )
        )

        for item in analysis.missing_skills:
            story.append(
                Paragraph(
                    f"• {item}",
                    styles["BodyText"],
                )
            )

        story.append(
            Spacer(1, 12),
        )

        story.append(
            Paragraph(
                "<b>Suggestions</b>",
                styles["Heading2"],
            )
        )

        for item in analysis.suggestions:
            story.append(
                Paragraph(
                    f"• {item}",
                    styles["BodyText"],
                )
            )

        document.build(story)

        pdf = buffer.getvalue()

        buffer.close()

        return pdf