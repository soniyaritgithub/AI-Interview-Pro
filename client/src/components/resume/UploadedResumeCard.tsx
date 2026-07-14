import {
  Eye,
  Trash2,
  FileText,
  Calendar,
  BarChart3,
} from "lucide-react";

interface UploadedResumeCardProps {
  fileName: string;
  fileSize: string;
  uploadedAt: string;
  atsScore: number;

  status:
    | "Completed"
    | "Processing";

  onView?: () => void;
  onDelete?: () => void;
}
export default function UploadedResumeCard({
  fileName,
  fileSize,
  uploadedAt,
  atsScore,
  status,
  onView,
  onDelete,
}: UploadedResumeCardProps) {
    return (
<section
  role="article"
  aria-label={fileName}
  className="
    w-full
    rounded-3xl
    border
    border-gray-200
    bg-white
    p-5
    shadow-sm

    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-blue-200
    hover:shadow-lg

    dark:border-slate-700
    dark:bg-slate-900

    sm:p-6

    lg:p-7
  "
>
    <div
  className="
    flex
    flex-col
    gap-5

    sm:flex-row
    sm:items-start
    sm:justify-between
  "
>
    <div
  className="
    flex
    min-w-0
    items-start
    gap-4
  "
>
    <div
  className="
    flex
    h-14
    w-14
    flex-shrink-0
    items-center
    justify-center
    rounded-2xl
    bg-blue-100
  "
>
  <FileText
    aria-hidden="true"
    className="
      h-7
      w-7
      text-blue-600
    "
  />
</div>
<div
  className="
    min-w-0
    flex-1
  "
>
    <h3
  className="
    truncate
    text-lg
    font-semibold
    text-gray-900

    dark:text-white
  "
>
  {fileName}
</h3>
<p
  className="
    mt-2
    text-sm
    text-gray-500

    dark:text-slate-400
  "
>
  {fileSize}
</p>
<div
  className="
    mt-3
    flex
    items-center
    gap-2
    text-sm
    text-gray-500

    dark:text-slate-400
  "
>
  <Calendar
    aria-hidden="true"
    className="h-4 w-4"
  />

  {uploadedAt}
</div>
</div>
</div>
<div
  className="
    flex
    flex-col
    items-start
    gap-3

    sm:items-end
  "
>
    <div
  className={`
    flex
    items-center
    gap-2
    rounded-full
    px-4
    py-2
    text-sm
    font-semibold

    ${
      status === "Completed"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
    }
  `}
>
  <BarChart3
    aria-hidden="true"
    className="h-4 w-4"
  />

  ATS {atsScore}%
</div>
<span
  className={`
    rounded-full
    px-4
    py-2
    text-xs
    font-semibold

    ${
      status === "Completed"
        ? "bg-green-100 text-green-700"

        : "bg-yellow-100 text-yellow-700"
    }
  `}
>
  {status}
</span>
</div>
</div>
<hr
  className="
    my-6
    border-gray-200

    dark:border-slate-700
  "
/>
<div
  className="
    flex
    flex-col
    gap-3

    sm:flex-row
    sm:justify-end
  "
>
    <button
  type="button"
  aria-label={`View ${fileName}`}
  onClick={onView}
  className="
    inline-flex
    items-center
    justify-center
    gap-2

    rounded-xl

    border
    border-gray-200

    px-5
    py-3

    text-sm
    font-medium

    text-gray-700

    transition-all
    duration-200

    hover:bg-gray-50

    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2

    dark:border-slate-700
    dark:text-white
    dark:hover:bg-slate-800
  "
>
  <Eye
    aria-hidden="true"
    className="h-4 w-4"
  />

  View Resume
</button>
<button
  type="button"
  aria-label={`Delete ${fileName}`}
  onClick={onDelete}
  className="
    inline-flex
    items-center
    justify-center
    gap-2

    rounded-xl

    border
    border-red-200

    px-5
    py-3

    text-sm
    font-medium

    text-red-600

    transition-all
    duration-200

    hover:bg-red-50

    focus:outline-none
    focus:ring-2
    focus:ring-red-500
    focus:ring-offset-2
  "
>
  <Trash2
    aria-hidden="true"
    className="h-4 w-4"
  />

  Remove
</button>
</div>
</section>

);
}