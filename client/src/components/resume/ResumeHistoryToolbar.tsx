import {
  Search,
  RefreshCw,
  ArrowUpDown,
  Filter,
} from "lucide-react";

interface ResumeHistoryToolbarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  filterValue?: string;
  onFilterChange?: (value: string) => void;

  sortValue?: string;
  onSortChange?: (value: string) => void;

  onRefresh?: () => void;

  isRefreshing?: boolean;
}

export default function ResumeHistoryToolbar({
  searchValue = "",
  onSearchChange,
  filterValue = "all",
  onFilterChange,
  sortValue = "newest",
  onSortChange,
  onRefresh,
  isRefreshing = false,
}: ResumeHistoryToolbarProps) {
  return (
    <section
      role="region"
      aria-label="Resume history toolbar"
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-900

        sm:p-5
        lg:p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* ================= Search ================= */}

        <div
          className="
            relative
            w-full
            lg:max-w-md
          "
        >
          <Search
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="search"
            value={searchValue}
            placeholder="Search resumes..."
            aria-label="Search resumes"
            onChange={(event) =>
              onSearchChange?.(event.target.value)
            }
            className="
              h-12
              w-full
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              pl-11
              pr-4
              text-sm
              text-gray-900

              transition-all
              duration-200

              placeholder:text-gray-400

              focus:border-blue-500
              focus:bg-white
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* ================= Controls ================= */}

        <div
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
          "
        >
          {/* Filter */}

          <div className="relative">
            <Filter
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-gray-400
              "
            />

            <select
              value={filterValue}
              aria-label="Filter resumes"
              onChange={(event) =>
                onFilterChange?.(
                  event.target.value
                )
              }
              className="
                h-11
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-8
                text-sm

                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2

                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            >
              <option value="all">
                All
              </option>

              <option value="completed">
                Completed
              </option>

              <option value="processing">
                Processing
              </option>

              <option value="failed">
                Failed
              </option>
            </select>
          </div>

          {/* Sort */}

          <div className="relative">
            <ArrowUpDown
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-gray-400
              "
            />

            <select
              value={sortValue}
              aria-label="Sort resumes"
              onChange={(event) =>
                onSortChange?.(
                  event.target.value
                )
              }
              className="
                h-11
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-8
                text-sm

                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2

                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            >
              <option value="newest">
                Newest
              </option>

              <option value="oldest">
                Oldest
              </option>

              <option value="ats-high">
                ATS High → Low
              </option>

              <option value="ats-low">
                ATS Low → High
              </option>
            </select>
          </div>

          {/* Refresh */}

          <button
            type="button"
            aria-label="Refresh resume history"
            onClick={onRefresh}
            disabled={isRefreshing}
            className="
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              text-sm
              font-medium
              text-gray-700

              transition-all
              duration-200

              hover:bg-gray-50

              disabled:cursor-not-allowed
              disabled:opacity-60

              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2

              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
            "
          >
            <RefreshCw
              aria-hidden="true"
              className={`
                h-4
                w-4
                ${
                  isRefreshing
                    ? "animate-spin"
                    : ""
                }
              `}
            />

            Refresh
          </button>
        </div>
      </div>
    </section>
  );
}