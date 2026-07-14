interface ResumeHistorySkeletonProps {
  rows?: number;
}

export default function ResumeHistorySkeleton({
  rows = 5,
}: ResumeHistorySkeletonProps) {
  return (
    <section
      aria-label="Loading resume history"
      className="space-y-4"
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-6

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-gray-200

                dark:bg-slate-700
              "
            />

            <div className="flex-1 space-y-3">
              <div
                className="
                  h-4
                  w-48
                  rounded
                  bg-gray-200

                  dark:bg-slate-700
                "
              />

              <div
                className="
                  h-3
                  w-28
                  rounded
                  bg-gray-200

                  dark:bg-slate-700
                "
              />
            </div>

            <div
              className="
                h-10
                w-24
                rounded-full
                bg-gray-200

                dark:bg-slate-700
              "
            />
          </div>
        </div>
      ))}
    </section>
  );
}