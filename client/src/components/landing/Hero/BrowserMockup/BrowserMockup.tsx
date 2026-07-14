import { motion } from "framer-motion";

import { fadeUpVariants } from "../../../../animations/hero";

import BrowserTopBar from "./BrowserTopBar";
import DashboardPreview from "./DashboardPreview";
import useParallax from "../../../../hooks/useParallax";


export default function BrowserMockup() {
  const { x, y } = useParallax();
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      style={{
transform:
`translate(${x}px,${y}px)`
}}
    className="
relative
z-10

w-full

max-w-[340px]
sm:max-w-[430px]
md:max-w-[560px]
lg:max-w-[660px]
xl:max-w-[760px]
2xl:max-w-[820px]

mx-auto
"
    >
      {/* Browser Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10

          rounded-[40px]

          bg-gradient-to-br
          from-violet-600/20
          via-fuchsia-500/10
          to-cyan-500/20

          blur-3xl
          scale-95
        "
      />

      {/* Browser Window */}
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
       className="
       overflow-hidden

w-full

min-w-0

rounded-2xl
lg:rounded-[30px]

border
border-white/10

bg-[#111827]/95

backdrop-blur-2xl

shadow-[0_40px_120px_rgba(0,0,0,.55)]

transition-all
"
      >
        {/* Browser Header */}
        <BrowserTopBar />

        {/* Dashboard Preview */}
        <div
          className="
            p-4
            sm:p-5
            lg:p-6
            xl:p-7
          "
        >
          <DashboardPreview />
        </div>
      </motion.div>
    </motion.div>
  );
}