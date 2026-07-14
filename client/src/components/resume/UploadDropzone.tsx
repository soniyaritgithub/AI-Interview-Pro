import {
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
} from "react";

import {
  UploadCloud,
  FileText,
} from "lucide-react";

interface UploadDropzoneProps {
  selectedFile: File | null;

  setSelectedFile: (
    file: File | null
  ) => void;

  setUploadError: (
    error: string
  ) => void;

  isUploading?: boolean;
}
export default function UploadDropzone({
  selectedFile,
  setSelectedFile,
  setUploadError,
  isUploading = false,
}: UploadDropzoneProps) {
    const [isDragging, setIsDragging] =
  useState(false);

const inputRef =
  useRef<HTMLInputElement | null>(null);
  const MAX_FILE_SIZE =
  5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",

  "application/msword",

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
function validateFile(file: File) {
  if (
    !ALLOWED_TYPES.includes(file.type)
  ) {
    setUploadError(
      "Only PDF, DOC and DOCX files are allowed."
    );

    return false;
  }

  if (file.size > MAX_FILE_SIZE) {
    setUploadError(
      "Maximum file size is 5 MB."
    );

    return false;
  }

  setUploadError("");

  return true;
}
function handleFile(file: File) {
  if (!validateFile(file)) {
    return;
  }

  setSelectedFile(file);
}
function handleInputChange(
  event: ChangeEvent<HTMLInputElement>
) {
  const file =
    event.target.files?.[0];

  if (!file) return;

  handleFile(file);
}
function handleDragOver(
  event: DragEvent<HTMLDivElement>
) {
  event.preventDefault();

  setIsDragging(true);
}
function handleDragLeave(
  event: DragEvent<HTMLDivElement>
) {
  event.preventDefault();

  setIsDragging(false);
}
function handleDrop(
  event: DragEvent<HTMLDivElement>
) {
  event.preventDefault();

  setIsDragging(false);

  const file =
    event.dataTransfer.files?.[0];

  if (!file) return;

  handleFile(file);
}
function openFilePicker() {
  inputRef.current?.click();
}

return (
  <>
    <input
      ref={inputRef}
      type="file"
      accept=".pdf,.doc,.docx"
      className="hidden"
      onChange={handleInputChange}
    />

    <div
      role="button"
      tabIndex={0}
      aria-label="Upload Resume"
      onClick={openFilePicker}
      onDragEnter={handleDragOver}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFilePicker();
        }
      }}
      className={`
        relative
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        p-8
        transition-all
        duration-300

        sm:p-10
        lg:p-14

        ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50"
        }

        ${
          isUploading
            ? "pointer-events-none opacity-70"
            : ""
        }

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      `}
    >
      <UploadCloud
        className="h-14 w-14 text-blue-600"
        aria-hidden="true"
      />

      <h2 className="mt-5 text-center text-xl font-bold text-gray-900">
        Drag & Drop Resume
      </h2>

      <p className="mt-3 max-w-xl text-center text-sm text-gray-500 sm:text-base">
        Upload PDF, DOC or DOCX file.
        <br />
        Maximum size 5 MB.
      </p>

      <button
        type="button"
        disabled={isUploading}
        onClick={(event) => {
          event.stopPropagation();
          openFilePicker();
        }}
        className="
          mt-6
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition-all
          duration-200
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-50
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2
        "
      >
        Browse Files
      </button>

      {selectedFile && (
        <div className="mt-8 flex items-center gap-3 rounded-xl bg-gray-100 px-5 py-4 dark:bg-slate-800">
          <FileText
            className="h-6 w-6 text-blue-600"
            aria-hidden="true"
          />

          <span className="truncate text-sm font-medium text-gray-700 dark:text-white">
            {selectedFile.name}
          </span>
        </div>
      )}

      {selectedFile && (
        <div
          className="
            mt-8
            w-full
            max-w-xl
            rounded-2xl
            border
            border-green-200
            bg-green-50
            p-5
            text-left
            dark:border-green-800
            dark:bg-green-950/20
          "
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                {selectedFile.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        </div>
      )}

      {isDragging && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            rounded-3xl
            bg-blue-600/10
            backdrop-blur-sm
          "
        >
          <div className="rounded-2xl bg-white px-8 py-6 shadow-xl dark:bg-slate-900">
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              Drop your resume here
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          ATS Compatible
        </span>

        <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          AI Resume Analysis
        </span>

        <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Secure Upload
        </span>
      </div>

      {selectedFile && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-green-200
            bg-green-50
            px-5
            py-4
            text-green-700
            dark:border-green-800
            dark:bg-green-950/20
            dark:text-green-400
          "
        >
          Resume selected successfully.
          Click <strong>Upload Resume</strong> to continue.
        </div>
      )}
    </div>
  </>
);
}