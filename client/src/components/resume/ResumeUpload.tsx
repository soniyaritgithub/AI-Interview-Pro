import { useState } from "react";

import UploadDropzone from "./UploadDropzone";
import UploadProgress from "./UploadProgress";
import UploadedResumeCard from "./UploadedResumeCard";
import UploadSuccess from "./UploadSuccess";
import UploadError from "./UploadError";

export default function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

 const isUploading = false;

  const [uploadProgress, setUploadProgress] = useState(0);

  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [uploadError, setUploadError] = useState("");

  return (
    <section
      role="region"
      aria-labelledby="resume-upload"
      className="
        w-full
        space-y-6
      "
    >
      {/* Page Header */}

      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        <h1
          id="resume-upload"
          className="
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
            sm:text-3xl
          "
        >
          Resume Upload
        </h1>

        <p
          className="
            max-w-2xl
            text-sm
            text-gray-500
            dark:text-slate-400
            sm:text-base
          "
        >
          Upload your resume to receive an ATS score, AI suggestions,
          job matching insights and interview recommendations.
        </p>
      </div>

      {/* Upload Dropzone */}

     <UploadDropzone
  selectedFile={selectedFile}
  setSelectedFile={setSelectedFile}
  setUploadError={setUploadError}
  isUploading={isUploading}
/>

      {/* Upload Progress */}

      {isUploading && (
       <UploadProgress
  progress={uploadProgress}
  isUploading={isUploading}
  isCompleted={uploadSuccess}
/>
      )}

      {/* Uploaded Resume */}

     {selectedFile && !isUploading && !uploadSuccess && (
  <UploadedResumeCard
    fileName={selectedFile.name}
    fileSize={`${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`}
    uploadedAt={new Date().toLocaleString()}
    atsScore={0}
    status="Processing"
    onDelete={() => {
      setSelectedFile(null);
      setUploadProgress(0);
      setUploadSuccess(false);
      setUploadError("");
    }}
    onView={() => {}}
  />
)}

      {/* Success */}

    {uploadSuccess && selectedFile && (
  <UploadSuccess
    fileName={selectedFile.name}
    fileSize={`${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`}
    onAnalyze={() => {}}
    onUploadAnother={() => {
      setSelectedFile(null);
      setUploadSuccess(false);
      setUploadProgress(0);
    }}
  />
)}

      {/* Error */}

    {uploadError && (
  <UploadError
    message={uploadError}
    fileName={selectedFile?.name}
    onRetry={() => {
      setUploadError("");
    }}
    onChangeFile={() => {
      setSelectedFile(null);
      setUploadError("");
    }}
  />
)}
    </section>
  );
}