import { motion } from "framer-motion";
import {
  progressItems,
} from "../../../../data/dashboardData";

export default function ProgressCard() {
  return (
    <section
      className="
        rounded-3xl

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        p-5
        sm:p-6
        lg:p-7

        shadow-xl
      "
    >
      <div
        className="
          mb-6

          flex
          items-center
          justify-between
        "
      >
        <div>
          <h3
            className="
              text-lg
              sm:text-xl

              font-bold

              text-white
            "
          >
            Performance Progress
          </h3>

          <p
            className="
              mt-1

              text-sm

              text-slate-400
            "
          >
            AI generated interview analysis
          </p>
        </div>

        <span
          className="
            rounded-full

            bg-violet-500/15

            px-3
            py-1

            text-xs

            font-semibold

            text-violet-300
          "
        >
          Live
        </span>
      </div>

      <div
        className="
          space-y-5
        "
      >
        {progressItems.map((item) => (
          <div key={item.title}>
            <div
              className="
                mb-2

                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-sm
                  font-medium

                  text-slate-300
                "
              >
                {item.title}
              </span>

              <span
                className="
                  text-sm

                  font-bold

                  text-white
                "
              >
                {item.value}%
              </span>
            </div>

            <div
              className="
                h-2.5

                overflow-hidden

                rounded-full

                bg-slate-800
              "
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${item.value}%`,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="
                  h-full

                  rounded-full

                  bg-gradient-to-r

                  from-violet-500

                  via-fuchsia-500

                  to-cyan-400
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}