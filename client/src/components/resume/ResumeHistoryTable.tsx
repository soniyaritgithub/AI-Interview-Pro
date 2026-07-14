import { FileText } from "lucide-react";

import {
  Eye,
  Download,
  RefreshCcw,
  Trash2,
  Bot,
} from "lucide-react";

import type { Resume } from "../../types/resume";

interface ResumeHistoryTableProps {
  resumes: Resume[];

  onView: (resume: Resume) => void;

onDownload: (resume: Resume) => void;

onReAnalyze: (resume: Resume) => void;

onDelete: (resume: Resume) => void;

loading?: boolean;

currentPage: number;

totalPages: number;

onPageChange: (page: number) => void;
}

export default function ResumeHistoryTable({
  resumes,
  loading = false,
  currentPage,
  totalPages,
  onPageChange,
  onView,
  onDownload,
  onDelete,
  onReAnalyze,
}: ResumeHistoryTableProps) {
  return (
    <section
      role="region"
      aria-label="Resume History Table"
      className="
        w-full
      "
    >
      {loading && (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="
            h-24
            animate-pulse
            rounded-2xl
            bg-gray-100
            dark:bg-slate-800
          "
        />
      ))}
    </div>
  )}
  {!loading &&
resumes.length === 0 && (

<div
  className="
    flex
    flex-col
    items-center
    justify-center
    rounded-3xl
    border
    border-dashed
    border-gray-300
    py-20
    text-center
    dark:border-slate-700
  "
>

<FileText
  aria-hidden="true"
  className="
    h-14
    w-14
    text-gray-300
    dark:text-slate-600
  "
/>

<h3
  className="
    mt-5
    text-xl
    font-semibold
    text-gray-900
    dark:text-white
  "
>
  No Resume Found
</h3>

<p
  className="
    mt-2
    max-w-sm
    text-sm
    text-gray-500
    dark:text-slate-400
  "
>
  Upload your first resume to start ATS analysis.
</p>

</div>

)}  

      {/* ==========================================
          Desktop Table
      ========================================== */}

     {!loading &&
resumes.length > 0 && (

<div
  className="
    hidden
    overflow-x-auto
    lg:block
  "
>
        <table
          aria-label="Resume History"
          className="
            min-w-full
            border-collapse
          "
        >
          <thead>
            <tr
              className="
                border-b
                border-gray-200

                dark:border-slate-700
              "
            >
              <th
                scope="col"
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-500

                  dark:text-slate-400
                "
              >
                Resume
              </th>

              <th
                scope="col"
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-500

                  dark:text-slate-400
                "
              >
                Uploaded
              </th>

              <th
                scope="col"
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-500

                  dark:text-slate-400
                "
              >
                ATS Score
              </th>

              <th
                scope="col"
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-500

                  dark:text-slate-400
                "
              >
                Status
              </th>

              <th
                scope="col"
                className="
                  px-6
                  py-4
                  text-right
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-500

                  dark:text-slate-400
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {resumes.map((resume) => (
              <tr
                key={resume.id}
                className="
                  border-b
                  border-gray-100

                  transition-all
                  duration-300

                  hover:bg-blue-50

                  dark:border-slate-800
                  dark:hover:bg-slate-800/40
                "
              >
                <td className="px-6 py-5">
  <div className="flex items-center gap-4">
    <div
      className="
        flex
        h-12
        w-12
        flex-shrink-0
        items-center
        justify-center
        rounded-2xl
        bg-blue-100
        dark:bg-blue-900/30
      "
    >
      <FileText
        aria-hidden="true"
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
      />
    </div>

    <div className="min-w-0 flex-1">
      <p
        className="
          truncate
          text-sm
          font-semibold
          text-gray-900
          dark:text-white
        "
      >
        {resume.fileName}
      </p>

      <p
        className="
          mt-1
          text-xs
          text-gray-500
          dark:text-slate-400
        "
      >
        {resume.fileType}
      </p>
    </div>
  </div>
</td>

<td
  className="
    px-6
    py-5
    text-sm
    text-gray-600
    dark:text-slate-400
  "
>
  {new Date(resume.uploadedAt).toLocaleDateString()}
</td>

<td className="px-6 py-5">
  <span
    className="
      inline-flex
      items-center
      rounded-full
      bg-green-100
      px-3
      py-1
      text-xs
      font-semibold
      text-green-700
    "
  >
    {resume.atsScore ?? 0}%
  </span>
</td>

<td className="px-6 py-5">
  <span
    className={`
      inline-flex
      items-center
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold

      ${
        resume.status === "Completed"
          ? "bg-green-100 text-green-700"
          : resume.status === "Processing"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-red-100 text-red-700"
      }
    `}
  >
    {resume.status}
  </span>
</td>

<td className="px-6 py-5">
  <div
    className="
      flex
      items-center
      justify-end
      gap-2
    "
  >
    {/* View */}

    <button
      type="button"
      aria-label={`View ${resume.fileName}`}
      title="View Resume"
      onClick={() => onView?.(resume)}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        text-gray-600

        transition-all
        duration-200

        hover:border-blue-300
        hover:bg-blue-50
        hover:text-blue-600

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-300
        dark:hover:bg-slate-800
      "
    >
      <Eye
        aria-hidden="true"
        className="h-4 w-4"
      />
    </button>

    {/* Download */}

    <button
      type="button"
      aria-label={`Download ${resume.fileName}`}
      title="Download Resume"
      onClick={() => onDownload?.(resume)}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        text-gray-600

        transition-all
        duration-200

        hover:border-green-300
        hover:bg-green-50
        hover:text-green-600

        focus:outline-none
        focus:ring-2
        focus:ring-green-500
        focus:ring-offset-2

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-300
        dark:hover:bg-slate-800
      "
    >
      <Download
        aria-hidden="true"
        className="h-4 w-4"
      />
    </button>

    {/* Re-analyze */}

    <button
      type="button"
      aria-label={`Analyze ${resume.fileName}`}
      title="Re-analyze Resume"
     onClick={() => onReAnalyze(resume)}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        text-gray-600

        transition-all
        duration-200

        hover:border-purple-300
        hover:bg-purple-50
        hover:text-purple-600

        focus:outline-none
        focus:ring-2
        focus:ring-purple-500
        focus:ring-offset-2

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-300
        dark:hover:bg-slate-800
      "
    >
      <Bot
        aria-hidden="true"
        className="h-4 w-4"
      />
    </button>

    {/* Delete */}

    <button
      type="button"
      aria-label={`Delete ${resume.fileName}`}
      title="Delete Resume"
      onClick={() => onDelete?.(resume)}
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-red-200
        bg-white
        text-red-600

        transition-all
        duration-200

        hover:bg-red-50
        hover:border-red-300

        focus:outline-none
        focus:ring-2
        focus:ring-red-500
        focus:ring-offset-2

        dark:border-red-800
        dark:bg-slate-900
        dark:hover:bg-red-900/20
      "
    >
      <Trash2
        aria-hidden="true"
        className="h-4 w-4"
      />
    </button>
  </div>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

)}

      {/* ==========================================
          Mobile Cards
          STEP 3.8.3.4
      ========================================== */}

     {!loading &&
resumes.length > 0 && (

<div
className="
grid
gap-4
lg:hidden
"
>
  {resumes.map((resume) => (
    <article
  role="article"
      key={resume.id}
      aria-label={resume.fileName}
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-lg
        hover:border-blue-200

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* ==============================
          Resume Header
      ============================== */}

      <div
        className="
          flex
          items-start
          gap-4
        "
      >
        {/* File Icon */}

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

            dark:bg-blue-900/30
          "
        >
          <FileText
            aria-hidden="true"
            className="
              h-7
              w-7
              text-blue-600

              dark:text-blue-400
            "
          />
        </div>

        {/* Resume Info */}

        <div
          className="
            min-w-0
            flex-1
          "
        >
          <h3
            className="
              truncate
              text-base
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            {resume.fileName}
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-gray-500

              dark:text-slate-400
            "
          >
            {resume.fileType}
          </p>

          <p
            className="
              mt-2
              text-xs
              text-gray-400

              dark:text-slate-500
            "
          >
            Uploaded{" "}
            {new Date(
              resume.uploadedAt
            ).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* STEP 3.8.3.4.2
          ATS + Status Badges
      */}
{/* ==========================================
    ATS Score + Status
========================================== */}

<div
  className="
    mt-5
    flex
    flex-wrap
    items-center
    justify-between
    gap-3
  "
>
  {/* ATS Badge */}

  <span
    className="
      inline-flex
      items-center
      rounded-full
      bg-green-100
      px-3
      py-1.5
      text-xs
      font-semibold
      text-green-700

      dark:bg-green-900/30
      dark:text-green-400
    "
  >
    ATS&nbsp;
    {resume.atsScore ?? 0}%
  </span>

  {/* Status Badge */}

  <span
    className={`
      inline-flex
      items-center
      rounded-full
      px-3
      py-1.5
      text-xs
      font-semibold

      ${
        resume.status === "Completed"
          ? `
            bg-green-100
            text-green-700

            dark:bg-green-900/30
            dark:text-green-400
          `
          : resume.status === "Processing"
          ? `
            bg-yellow-100
            text-yellow-700

            dark:bg-yellow-900/30
            dark:text-yellow-400
          `
          : `
            bg-red-100
            text-red-700

            dark:bg-red-900/30
            dark:text-red-400
          `
      }
    `}
  >
    {resume.status}
  </span>
</div>
      {/* ==========================================
    Mobile Actions
========================================== */}

<div
  className="
    mt-6
    grid
    grid-cols-2
    gap-3

    sm:grid-cols-4
  "
>
  {/* View */}

  <button
    type="button"
    aria-label={`View ${resume.fileName}`}
    onClick={() => onView(resume)}
    className="
      inline-flex
      items-center
      justify-center
      gap-2

      rounded-xl

      border
      border-gray-200

      bg-white

      px-4
      py-3

      text-sm
      font-medium
      text-gray-700

      transition-all
      duration-200

      hover:bg-gray-50
      hover:border-blue-200

      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:ring-offset-2

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-white
      dark:hover:bg-slate-800
    "
  >
    <Eye
      aria-hidden="true"
      className="h-4 w-4"
    />

    <span>View</span>
  </button>

  {/* Download */}

  <button
    type="button"
    aria-label={`Download ${resume.fileName}`}
    onClick={() => onDownload(resume)}
    className="
      inline-flex
      items-center
      justify-center
      gap-2

      rounded-xl

      border
      border-gray-200

      bg-white

      px-4
      py-3

      text-sm
      font-medium
      text-gray-700

      transition-all
      duration-200

      hover:bg-gray-50
      hover:border-green-200

      focus:outline-none
      focus:ring-2
      focus:ring-green-500
      focus:ring-offset-2

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-white
      dark:hover:bg-slate-800
    "
  >
    <Download
      aria-hidden="true"
      className="h-4 w-4"
    />

    <span>Download</span>
  </button>

  {/* Re-analyze */}

  <button
    type="button"
    aria-label={`Re-analyze ${resume.fileName}`}
    onClick={() => onReAnalyze(resume)}
    className="
      inline-flex
      items-center
      justify-center
      gap-2

      rounded-xl

      border
      border-gray-200

      bg-white

      px-4
      py-3

      text-sm
      font-medium
      text-gray-700

      transition-all
      duration-200

      hover:bg-gray-50
      hover:border-purple-200

      focus:outline-none
      focus:ring-2
      focus:ring-purple-500
      focus:ring-offset-2

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-white
      dark:hover:bg-slate-800
    "
  >
    <RefreshCcw
      aria-hidden="true"
      className="h-4 w-4"
    />

    <span>Analyze</span>
  </button>

  {/* Delete */}

  <button
    type="button"
    aria-label={`Delete ${resume.fileName}`}
    onClick={() => onDelete(resume)}
    className="
      inline-flex
      items-center
      justify-center
      gap-2

      rounded-xl

      border
      border-red-200

      bg-white

      px-4
      py-3

      text-sm
      font-medium
      text-red-600

      transition-all
      duration-200

      hover:bg-red-50
      hover:border-red-300

      focus:outline-none
      focus:ring-2
      focus:ring-red-500
      focus:ring-offset-2

      dark:border-red-800
      dark:bg-slate-900
      dark:text-red-400
      dark:hover:bg-red-900/20
    "
  >
    <Trash2
      aria-hidden="true"
      className="h-4 w-4"
    />

    <span>Delete</span>
  </button>
</div>
    </article>
  ))}
</div>

)}

{!loading &&
resumes.length > 0 &&
totalPages > 1 && (

<div
  className="
    mt-8
    flex
    flex-col
    items-center
    justify-between
    gap-4
    sm:flex-row
  "
>

<p
  className="
    text-sm
    text-gray-500
    dark:text-slate-400
  "
>
  Page {currentPage} of {totalPages}
</p>

<div
  className="
    flex
    items-center
    gap-3
  "
>

<button
  type="button"
  disabled={currentPage===1}
  onClick={() =>
    onPageChange(currentPage-1)
  }
  className="
    rounded-xl
    border
    border-gray-200
    px-4
    py-2
    text-sm
    font-medium
    transition
    hover:bg-gray-50
    disabled:cursor-not-allowed
    disabled:opacity-50
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    dark:border-slate-700
    dark:text-white
    dark:hover:bg-slate-800
  "
>
Previous
</button>

<button
  type="button"
  disabled={currentPage===totalPages}
  onClick={() =>
    onPageChange(currentPage+1)
  }
  className="
    rounded-xl
    bg-blue-600
    px-4
    py-2
    text-sm
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
  "
>
Next
</button>

</div>

</div>

)}
</section>
);
}