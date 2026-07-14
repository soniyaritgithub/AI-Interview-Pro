import {
  AlertTriangle,
  RefreshCcw,
  UploadCloud,
  FileWarning,
} from "lucide-react";

interface UploadErrorProps {
  title?: string;
  message: string;
  fileName?: string;
  onRetry: () => void;
  onChangeFile: () => void;
}

export default function UploadError({
  title = "Upload Failed",
  message,
  fileName,
  onRetry,
  onChangeFile,
}: UploadErrorProps) {
  return (
    <section
      role="alert"
      aria-labelledby="upload-error-title"
      className="
        w-full
        rounded-3xl
        border
        border-red-200
        bg-white
        p-6
        shadow-sm

        transition-all
        duration-300

        dark:border-red-800
        dark:bg-slate-900

        sm:p-8
        lg:p-10
      "
    >
      {/* Error Icon */}
      <div
        className="
          flex
          flex-col
          items-center
          text-center
        "
      >
        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-red-100

            dark:bg-red-900/30
          "
        >
          <AlertTriangle
            aria-hidden="true"
            className="
              h-10
              w-10
              text-red-600
            "
          />
        </div>

        <h2
          id="upload-error-title"
          className="
            mt-6
            text-2xl
            font-bold
            text-gray-900

            dark:text-white
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-gray-600

            dark:text-slate-400

            sm:text-base
          "
        >
          {message}
        </p>
      </div>

      {/* File Details */}
      {fileName && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-5

            dark:border-red-800
            dark:bg-red-900/20
          "
        >
          <div
            className="
              flex
              items-center
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
                bg-white

                dark:bg-slate-800
              "
            >
              <FileWarning
                aria-hidden="true"
                className="
                  h-7
                  w-7
                  text-red-600
                "
              />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  truncate
                  font-semibold
                  text-gray-900

                  dark:text-white
                "
              >
                {fileName}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-red-600
                "
              >
                Upload could not be completed.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Common Reasons */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-yellow-200
          bg-yellow-50
          p-5

          dark:border-yellow-800
          dark:bg-yellow-900/20
        "
      >
        <h3
          className="
            text-base
            font-semibold
            text-gray-900

            dark:text-white
          "
        >
          Possible Reasons
        </h3>

        <ul
          className="
            mt-4
            space-y-2
            text-sm
            text-gray-600

            dark:text-slate-400
          "
        >
          <li>• Unsupported file format</li>
          <li>• File size exceeds 5 MB</li>
          <li>• Network connection interrupted</li>
          <li>• Temporary server issue</li>
        </ul>
      </div>

      {/* Actions */}
      <div
        className="
          mt-10
          flex
          flex-col
          gap-4

          sm:flex-row
          sm:justify-end
        "
      >
        <button
          type="button"
          onClick={onChangeFile}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-xl
            border
            border-gray-300

            px-6
            py-3

            font-medium
            text-gray-700

            transition-all
            duration-200

            hover:bg-gray-100

            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2

            dark:border-slate-700
            dark:text-white
            dark:hover:bg-slate-800
          "
        >
          <UploadCloud
            aria-hidden="true"
            className="h-5 w-5"
          />

          Change File
        </button>

        <button
          type="button"
          onClick={onRetry}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-xl
            bg-red-600

            px-6
            py-3

            font-semibold
            text-white

            transition-all
            duration-200

            hover:bg-red-700

            focus:outline-none
            focus:ring-2
            focus:ring-red-500
            focus:ring-offset-2
          "
        >
          <RefreshCcw
            aria-hidden="true"
            className="h-5 w-5"
          />

          Retry Upload
        </button>
      </div>
    </section>
  );
}