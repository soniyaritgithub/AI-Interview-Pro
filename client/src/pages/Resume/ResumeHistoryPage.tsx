
import ResumeHistoryToolbar from "../../components/resume/ResumeHistoryToolbar";
import ResumeHistoryTable from "../../components/resume/ResumeHistoryTable";
import ResumeHistoryPagination from "../../components/resume/ResumeHistoryPagination";
import ResumeHistoryEmpty from "../../components/resume/ResumeHistoryEmpty";
import ResumeHistorySkeleton from "../../components/resume/ResumeHistorySkeleton";
import type { Resume } from "../../types/resume";

export default function ResumeHistoryPage() {
  /*
   ==========================================
   Temporary Mock States
   Replace with API later
   ==========================================
  */

  const isLoading = false;

const resumes: Resume[] = [
  {
    id: "1",
    fileName: "Resume.pdf",
    originalFileName: "Resume.pdf",
    fileSize: 250000,
    fileType: "PDF",
    uploadedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "Completed",
    atsScore: 92,
  },
];

const handleView = (resume: Resume) => {
  console.log("View", resume);
};

const handleDownload = (resume: Resume) => {
  console.log("Download", resume);
};

const handleReAnalyze = (resume: Resume) => {
  console.log("ReAnalyze", resume);
};

const handleDelete = (resume: Resume) => {
  console.log("Delete", resume);
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
        md:px-8
        lg:px-8
        xl:px-10
        2xl:px-12
      "
    >
      {/* ======================================
          Page Header
      ====================================== */}

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
          Resume History
        </h1>

        <p
          className="
            mt-2
            max-w-3xl
            text-sm
            leading-6
            text-gray-500

            dark:text-slate-400
          "
        >
          View, search, download, manage and re-analyze all of your uploaded
          resumes from one place.
        </p>
      </section>

      {/* ======================================
          Toolbar
      ====================================== */}

      <section
        aria-label="Resume History Toolbar"
        className="mb-6"
      >
        <ResumeHistoryToolbar />
      </section>

      {/* ======================================
          Content
      ====================================== */}

      <section
        aria-label="Resume History Content"
        className="
          rounded-3xl
          border
          border-gray-200
          bg-white
          shadow-sm

          dark:border-slate-700
          dark:bg-slate-900
        "
      >
       
        {isLoading ? (
          <ResumeHistorySkeleton />
        ) : resumes.length === 0 ? (
          <ResumeHistoryEmpty />
        ) : (
          <>
         <ResumeHistoryTable
  resumes={resumes}
  loading={isLoading}
  currentPage={1}
  totalPages={1}
  onPageChange={() => {}}
  onView={handleView}
  onDownload={handleDownload}
  onReAnalyze={handleReAnalyze}
  onDelete={handleDelete}
/>

            <ResumeHistoryPagination
  currentPage={1}
  totalPages={1}
              onPageChange={() => {}}
            />
          </>
        )}
      </section>
    </main>
  );
}