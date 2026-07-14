import { motion } from "framer-motion";

import {
  fadeUpVariants,
  browserVariants,
} from "../../../animations/hero";

import BrowserTopBar from "./BrowserMockup/BrowserTopBar";
import DashboardPreview from "./BrowserMockup/DashboardPreview";

export default function BrowserMockup() {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="
        relative

        w-full

        max-w-[300px]
        sm:max-w-[360px]
        md:max-w-[450px]
        lg:max-w-[620px]
        xl:max-w-[720px]
        2xl:max-w-[780px]

        mx-auto
      "
    >
      {/* Premium Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
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
        variants={browserVariants}
        initial="hidden"
        animate="visible"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="
          overflow-hidden

          rounded-[28px]

          border
          border-white/10

          bg-slate-900/90

          backdrop-blur-xl

          shadow-[0_30px_80px_rgba(0,0,0,.45)]

          h-[520px]
          sm:h-[560px]
          md:h-[620px]
          lg:h-[700px]
          xl:h-[760px]
        "
      >
        {/* Browser Header */}
        <BrowserTopBar />

        {/* Dashboard */}
        <DashboardPreview />
      </motion.div>
    </motion.div>
  );
}