import { useState } from "react";
import resumeService from "../../services/resume.service";
import UploadDropzone from "../../components/resume/UploadDropzone";
import UploadProgress from "../../components/resume/UploadProgress";
import UploadedResumeCard from "../../components/resume/UploadedResumeCard";
import UploadSuccess from "../../components/resume/UploadSuccess";
import UploadError from "../../components/resume/UploadError";
import type { Resume } from "../../types/resume";

export default function ResumeUploadPage() {
  /* ==========================================
     Local State
  ========================================== */

 const [selectedFile, setSelectedFile] =
  useState<File | null>(null);

const [uploadProgress, setUploadProgress] =
  useState(0);

const [isUploading, setIsUploading] =
  useState(false);

const [isSuccess, setIsSuccess] =
  useState(false);

const [error, setError] =
  useState<string | null>(null);

const [uploadedResume, setUploadedResume] =
  useState<Resume | null>(null);

  const handleUpload = async () => {
  if (!selectedFile) return;

try {
  setUploadedResume(null);
  setIsSuccess(false);

  setError(null);

  setIsUploading(true);

  setUploadProgress(0);
    const resume = await resumeService.uploadResume(
  selectedFile,
  (progress) => {
    setUploadProgress(progress);
  }
);

// 👇 Debug
console.log("Resume:", resume);

setUploadedResume(resume);

// 👇 Analyze only if id exists
if (resume?.id) {
  await resumeService.analyzeResume(
    String(resume.id)
  );
} else {
  console.error("Resume ID not found", resume);
}

setUploadProgress(100);
setIsSuccess(true);
  } catch (error) {
  setUploadedResume(null);

  setIsSuccess(false);

  console.error(error);

  setError(
    "Failed to upload resume."
  );
} finally {
    setIsUploading(false);
  }
};

  const handleRetry = () => {
  setError(null);
  setUploadProgress(0);
  setIsSuccess(false);

  handleUpload();
};

  

  return (
    <main
      className="
        mx-auto
        w-full
        max-w-7xl
        px-4
        py-6

        sm:px-6
        lg:px-8
        xl:px-10
        2xl:px-12
      "
    >
      {/* ==========================================
          Page Header
      ========================================== */}

      <section
        className="
          mb-8
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            tracking-tight
            text-gray-900

            dark:text-white
          "
        >
          Resume Upload
        </h1>

        <p
          className="
            mt-2
            max-w-2xl
            text-sm
            leading-6
            text-gray-500

            dark:text-slate-400
          "
        >
          Upload your latest resume to receive an AI-powered ATS analysis,
          recruiter insights and job matching recommendations.
        </p>
      </section>

      {/* ==========================================
          Upload Content
      ========================================== */}

      <div
        className="
          grid
          gap-6
        "
      >
        {/* STEP 2 */}
      <UploadDropzone
  selectedFile={selectedFile}
  setSelectedFile={setSelectedFile}
  setUploadError={(message) => setError(message)}
  isUploading={isUploading}
/>
<div
  className="
    flex
    justify-stretch
    sm:justify-end
  "
>
  <button
    type="button"
    onClick={handleUpload}
    disabled={!selectedFile || isUploading}
    className="
w-full
rounded-xl

bg-blue-600

px-6
py-3

font-medium
text-white

transition

hover:bg-blue-700

disabled:cursor-not-allowed
disabled:opacity-50

focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:ring-offset-2

sm:w-auto
"
  >
    Upload Resume
  </button>
</div>

        {/* STEP 3 */}
        {isUploading && (
          <UploadProgress
  progress={uploadProgress}
  isUploading={isUploading}
  isCompleted={isSuccess}
/>
        )}

        {/* STEP 4 */}
       {error && (
 <UploadError
  message={error}
  fileName={selectedFile?.name}
  onRetry={handleRetry}
  onChangeFile={() => {
    setSelectedFile(null);
    setError(null);
  }}
/>
)}

        {/* STEP 5 */}
       {isSuccess &&
uploadedResume && (
 <UploadSuccess
  fileName={uploadedResume.fileName}
  fileSize={`${(
    uploadedResume.fileSize / 1024
  ).toFixed(2)} KB`}
  onAnalyze={() => {
    // Navigate to analysis page
  }}
  onUploadAnother={() => {
    setSelectedFile(null);
    setUploadedResume(null);
    setIsSuccess(false);
    setUploadProgress(0);
    setError(null);
  }}
/>
)}

        {/* STEP 6 */}
       {uploadedResume && (
          <UploadedResumeCard
  fileName={uploadedResume.fileName}
  fileSize={`${(
    uploadedResume.fileSize / 1024
  ).toFixed(2)} KB`}
  uploadedAt={uploadedResume.uploadedAt}
  atsScore={uploadedResume.atsScore ?? 0}
  status={
    uploadedResume.status === "Completed"
      ? "Completed"
      : "Processing"
  }
  onView={() => {}}
  onDelete={() => {}}
/>
        )}
      </div>
    </main>
  );
}