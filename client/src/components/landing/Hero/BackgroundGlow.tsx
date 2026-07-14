import { motion } from "framer-motion";
import { glowVariants } from "../../../animations/hero";
import useParallax from "../../../hooks/useParallax";


export default function BackgroundGlow() {
  const { x, y } = useParallax();
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        -z-10
      "
    >
      {/* Top Glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        style={{
transform:
`translate(${x*0.4}px,${y*0.4}px)`
}}
        className="
          absolute
          -top-32
          left-1/2
          -translate-x-1/2
          h-[320px]
          w-[320px]

          
          rounded-full
          bg-violet-500/20
          blur-[120px]

          sm:h-[420px]
          sm:w-[420px]

          lg:h-[650px]
          lg:w-[650px]
        "
      />

      {/* Bottom Right Glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="
          absolute
          bottom-0
          right-0
          h-[220px]
          w-[220px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]

          sm:h-[300px]
          sm:w-[300px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* Bottom Left Glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="
          absolute
          bottom-10
          left-0
          h-[180px]
          w-[180px]
          rounded-full
          bg-fuchsia-500/10
          blur-[90px]

          sm:h-[250px]
          sm:w-[250px]

          lg:h-[420px]
          lg:w-[420px]
        "
      />
    </div>
  );
}