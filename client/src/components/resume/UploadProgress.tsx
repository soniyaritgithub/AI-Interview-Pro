import { CheckCircle, Loader2 } from "lucide-react";
interface UploadProgressProps {
  progress: number;

  isUploading: boolean;

  isCompleted: boolean;
}
export default function UploadProgress({
  progress,
  isUploading,
  isCompleted,
}: UploadProgressProps) {
    return (
        <section
  role="region"
  aria-labelledby="upload-progress"
  className="
    w-full
    rounded-2xl
    border
    border-gray-200
    bg-white
    p-5
    shadow-sm

    sm:p-6

    lg:p-8
  "
>
    <div
  className="
    flex
    flex-col
    gap-2

    sm:flex-row
    sm:items-center
    sm:justify-between
  "
>
  <h2
    id="upload-progress"
    className="
      text-lg
      font-semibold
      text-gray-900
    "
  >
    Upload Progress
  </h2>

  <span
    className="
      text-sm
      font-medium
      text-gray-500
    "
  >
    {progress}%
  </span>
</div>
<div
  className="
    mt-5
    h-3
    overflow-hidden
    rounded-full
    bg-gray-200
  "
>
    <div
  className="
    h-full
    rounded-full
    bg-blue-600
    transition-all
    duration-500
    ease-out
  "
  style={{
    width: `${progress}%`,
  }}
/>
</div>
<div
  className="
    mt-5
    flex
    items-center
    justify-between
    gap-4
  "
>
    <div
  className="
    flex
    items-center
    gap-3
  "
>
    {isUploading && (
  <Loader2
    aria-hidden="true"
    className="
      h-5
      w-5
      animate-spin
      text-blue-600
    "
  />
)}
{isCompleted && (
  <CheckCircle
    aria-hidden="true"
    className="
      h-5
      w-5
      text-green-600
    "
  />
)}
<p
  className="
    text-sm
    text-gray-600
  "
>
  {isCompleted
    ? "Upload completed successfully."

    : isUploading
    ? "Uploading your resume..."

    : "Waiting to upload..."}
</p>
</div>
<span
  className={`
    rounded-full
    px-3
    py-1
    text-xs
    font-semibold

    ${
      isCompleted
        ? "bg-green-100 text-green-700"

        : isUploading
        ? "bg-blue-100 text-blue-700"

        : "bg-gray-100 text-gray-600"
    }
  `}
>
  {isCompleted
    ? "Completed"

    : isUploading
    ? "Uploading"

    : "Pending"}
</span>
</div>
<p
  className="
    mt-5
    text-xs
    leading-6
    text-gray-500
  "
>
  Please do not close the browser while your resume is being uploaded.
</p>
</section>
);
}