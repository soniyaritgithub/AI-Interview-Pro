import { motion } from "framer-motion";

const particles = Array.from({ length: 32 }).map((_, i) => ({
  id: i,

  size: Math.random() * 8 + 4,

  left: Math.random() * 100,

  top: Math.random() * 100,

  delay: Math.random() * 5,

  duration: Math.random() * 10 + 12,

  opacity: Math.random() * 0.4 + 0.2,
}));

export default function HeroParticles() {
  return (
    <div
      className="
        absolute
        inset-0

        overflow-hidden

        pointer-events-none

        z-0
      "
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            y: 0,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, 20, -20],

            x: [-8, 8, -8],

            opacity: [
              particle.opacity,
              particle.opacity + 0.15,
              particle.opacity,
            ],
          }}
          transition={{
            repeat: Infinity,

            ease: "easeInOut",

            duration: particle.duration,

            delay: particle.delay,
          }}
          style={{
            left: `${particle.left}%`,

            top: `${particle.top}%`,

            width: particle.size,

            height: particle.size,

            opacity: particle.opacity,
          }}
          className="
            absolute

            rounded-full

            bg-gradient-to-br
            from-violet-400
            via-fuchsia-400
            to-cyan-400

            blur-[1px]

            will-change-transform
          "
        />
      ))}
    </div>
  );
}