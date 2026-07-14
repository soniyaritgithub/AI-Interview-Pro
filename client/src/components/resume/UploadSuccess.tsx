import {
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface UploadSuccessProps {
  fileName: string;
  fileSize: string;
  onAnalyze: () => void;
  onUploadAnother: () => void;
}

export default function UploadSuccess({
  fileName,
  fileSize,
  onAnalyze,
  onUploadAnother,
}: UploadSuccessProps) {
  return (
    <section
      role="region"
      aria-labelledby="upload-success"
      className="
        w-full
        rounded-3xl
        border
        border-green-200
        bg-white
        p-6
        shadow-sm

        transition-all
        duration-300

        dark:border-green-800
        dark:bg-slate-900

        sm:p-8
        lg:p-10
      "
    >
      {/* Success Header */}
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
            bg-green-100

            dark:bg-green-900/30
          "
        >
          <CheckCircle2
            aria-hidden="true"
            className="
              h-10
              w-10
              text-green-600
            "
          />
        </div>

        <h2
          id="upload-success"
          className="
            mt-6
            text-2xl
            font-bold
            text-gray-900

            dark:text-white
          "
        >
          Resume Uploaded Successfully 🎉
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            text-sm
            leading-6
            text-gray-500

            dark:text-slate-400

            sm:text-base
          "
        >
          Your resume has been uploaded successfully.
          You can now analyze it for ATS score,
          missing keywords and improvement suggestions.
        </p>
      </div>

      {/* Resume Card */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          p-5

          dark:border-slate-700
          dark:bg-slate-800
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
              min-w-0
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
                  text-gray-500

                  dark:text-slate-400
                "
              >
                {fileSize}
              </p>
            </div>
          </div>

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-green-100
              px-4
              py-2
              text-sm
              font-semibold
              text-green-700
            "
          >
            <CheckCircle2
              aria-hidden="true"
              className="h-4 w-4"
            />

            Uploaded
          </span>
        </div>
      </div>

      {/* AI Message */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-blue-200
          bg-blue-50
          p-5

          dark:border-blue-800
          dark:bg-blue-900/20
        "
      >
        <div className="flex gap-3">
          <Sparkles
            aria-hidden="true"
            className="
              mt-1
              h-5
              w-5
              flex-shrink-0
              text-blue-600
            "
          />

          <div>
            <h4
              className="
                font-semibold
                text-gray-900

                dark:text-white
              "
            >
              Ready for AI Analysis
            </h4>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-gray-600

                dark:text-slate-400
              "
            >
              Our AI will evaluate ATS compatibility,
              keyword optimization,
              grammar,
              formatting,
              recruiter readability,
              and provide actionable improvements.
            </p>
          </div>
        </div>
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
          onClick={onUploadAnother}
          className="
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
          Upload Another
        </button>

        <button
          type="button"
          onClick={onAnalyze}
          className="
            inline-flex
            items-center
            justify-center
            gap-2

            rounded-xl
            bg-blue-600
            px-6
            py-3

            font-semibold
            text-white

            transition-all
            duration-200

            hover:bg-blue-700

            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
          "
        >
          Analyze Resume

          <ArrowRight
            aria-hidden="true"
            className="h-5 w-5"
          />
        </button>
      </div>
    </section>
  );
}