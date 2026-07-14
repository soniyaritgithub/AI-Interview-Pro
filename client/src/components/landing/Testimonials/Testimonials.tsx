import { motion } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/testimonialsData";

export default function Testimonials() {
  return (
    <motion.section
    id="testimonials"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        isolate

        w-full

        overflow-hidden

        py-24

sm:py-28

lg:py-32

scroll-mt-24
        xl:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-10

          bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),transparent_65%)]

          blur-3xl
        "
      />

      {/* Container */}
      <div
        className="
          mx-auto

          w-full

          max-w-7xl

          px-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-20
        "
      >
        {/* Heading */}
        <div
          className="
            mx-auto

            max-w-4xl

            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              inline-flex

              items-center

              rounded-full

              border
              border-violet-500/20

              bg-violet-500/10

              px-5
              py-2

              backdrop-blur-xl
            "
          >
            <span
              className="
                text-[11px]
                sm:text-xs

                font-semibold

                uppercase

                tracking-[0.32em]

                text-violet-300
              "
            >
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-6

              font-bold

              tracking-tight

              text-white

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl

              leading-[1.08]
            "
          >
            Loved by Developers
            <br />

            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-fuchsia-400
                to-cyan-400

                bg-clip-text

                text-transparent
              "
            >
              Preparing for Top Companies
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-sm
              sm:text-base
              md:text-lg

              leading-8

              text-slate-400
            "
          >
            Thousands of developers have improved their interview
            preparation, boosted their ATS scores, and secured offers
            from leading technology companies using our AI-powered
            interview platform.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            mt-16
            sm:mt-20
            lg:mt-24

            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3

            gap-5
            sm:gap-6
            md:gap-7
            lg:gap-8
            xl:gap-9
          "
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              review={testimonial.review}
              icon={testimonial.icon}
              accent={testimonial.accent}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-20

            flex
            justify-center
          "
        >
          <div
            className="
              rounded-full

              border
              border-white/10

              bg-white/[0.04]

              px-6
              py-3

              backdrop-blur-xl

              shadow-xl
            "
          >
            <p
              className="
                text-xs
                sm:text-sm

                tracking-wide

                text-slate-300
              "
            >
              ⭐ Trusted by developers preparing for
              <span className="font-semibold text-white">
                {" "}
                Google, Microsoft, Amazon, Meta & OpenAI
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}