import { motion } from "framer-motion";
import { Globe, Lock, Search } from "lucide-react";

import { browserInfo } from "../../../../data/dashboardPreviewData";

export default function BrowserTopBar() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.65,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        flex
        items-center
        gap-3

        border-b
        border-white/10

        bg-white/[0.02]

        px-4
        sm:px-5
        lg:px-6

        py-3
        lg:py-4
      "
    >
      {/* macOS Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      {/* Address Bar */}
      <div
        className="
          hidden
          md:flex

          flex-1
          items-center

          gap-3

          min-w-0

          rounded-xl

          border
          border-white/10

          bg-white/5

          px-4
          py-2.5

          backdrop-blur-md

          transition-all
          duration-300

          hover:bg-white/10
        "
      >
        <Lock
          size={14}
          className="text-emerald-400 shrink-0"
        />

        <p
          className="
            flex-1

            truncate

            text-[12px]
            lg:text-sm

            font-medium

            text-slate-300
          "
        >
          {browserInfo.url}
        </p>

        <Search
          size={15}
          className="text-slate-500 shrink-0"
        />
      </div>

      {/* Mobile URL */}
      <div
        className="
          flex
          md:hidden

          flex-1
          justify-center
        "
      >
        <div
          className="
            rounded-full

            border
            border-white/10

            bg-white/5

            px-3
            py-1.5

            transition-all
            duration-300

            hover:bg-white/10
          "
        >
          <Globe
            size={15}
            className="text-slate-400"
          />
        </div>
      </div>

      {/* Right Status */}
      <div
        className="
          hidden
          md:flex

          items-center

          gap-2

          rounded-full

          border
          border-emerald-500/20

          bg-emerald-500/10

          px-3
          py-1.5
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span
            className="
              absolute
              inline-flex

              h-full
              w-full

              rounded-full

              bg-emerald-400

              opacity-75

              animate-ping
            "
          />

          <span
            className="
              relative

              inline-flex

              h-2.5
              w-2.5

              rounded-full

              bg-emerald-400
            "
          />
        </span>

        <span
          className="
            text-xs

            font-medium

            text-emerald-300
          "
        >
          {browserInfo.secure ? "Secure" : "Not Secure"}
        </span>
      </div>
    </motion.div>
  );
}