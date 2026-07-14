import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ResumeHistoryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ResumeHistoryPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ResumeHistoryPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Resume history pagination"
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

      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="
            inline-flex
            items-center
            gap-2
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
          <ChevronLeft
            aria-hidden="true"
            className="h-4 w-4"
          />
          Previous
        </button>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="
            inline-flex
            items-center
            gap-2
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
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4"
          />
        </button>
      </div>
    </nav>
  );
}