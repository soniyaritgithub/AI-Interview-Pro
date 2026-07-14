import { FileText } from "lucide-react";

interface ResumeHistoryEmptyProps {
  title?: string;
  description?: string;
}

export default function ResumeHistoryEmpty({
  title = "No Resume Found",
  description = "Upload your first resume to start ATS analysis.",
}: ResumeHistoryEmptyProps) {
  return (
    <section
      role="status"
      aria-live="polite"
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
        px-6

        text-center

        dark:border-slate-700
      "
    >
      <FileText
        aria-hidden="true"
        className="
          h-16
          w-16
          text-gray-300

          dark:text-slate-600
        "
      />

      <h2
        className="
          mt-6
          text-2xl
          font-semibold

          text-gray-900

          dark:text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          max-w-md

          text-sm
          leading-6

          text-gray-500

          dark:text-slate-400
        "
      >
        {description}
      </p>
    </section>
  );
}