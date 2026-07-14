import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface RatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function Rating({
  rating,
  size = 18,
  className = "",
}: RatingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`
        flex
        items-center
        gap-1
        sm:gap-1.5
        ${className}
      `}
      aria-label={`Rating: ${rating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.35,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 8,
            }}
          >
            <Star
              size={size}
              className={`
                transition-all
                duration-300

                ${
                  filled
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-transparent text-white/20"
                }
              `}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}