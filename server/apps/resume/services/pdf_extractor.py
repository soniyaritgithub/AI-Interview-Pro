import fitz


class PDFExtractionError(Exception):
    """Raised when PDF extraction fails."""
    pass


class PDFExtractor:

    @staticmethod
    def extract_text(file_path: str) -> str:

        try:
            with fitz.open(file_path) as document:

                pages = []

                for page in document:
                    text = page.get_text("text").strip()

                    if text:
                        pages.append(text)

                extracted_text = "\n".join(pages).strip()

                if not extracted_text:
                    raise PDFExtractionError(
                        "No readable text found in PDF."
                    )

                return extracted_text

        except PDFExtractionError:
            raise

        except Exception as exc:
            raise PDFExtractionError(
                f"Unable to extract text: {exc}"
            ) from exc