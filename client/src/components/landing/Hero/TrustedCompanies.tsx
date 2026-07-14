import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "/logos/google.svg",
  },
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.svg",
  },
  {
    name: "Meta",
    logo: "/logos/meta.svg",
  },
  {
    name: "OpenAI",
    logo: "/logos/openai.svg",
  },
  {
    name: "Netflix",
    logo: "/logos/netflix.svg",
  },
  {
    name: "Adobe",
    logo: "/logos/adobe.svg",
  },
];

export default function TrustedCompanies() {
  return (
    <section
      className="
        relative
        mt-12

        w-full
        overflow-hidden
      "
    >
      {/* Title */}
      <p
        className="
          text-[11px]
          sm:text-xs
          md:text-sm

          uppercase
          tracking-[0.35em]

          text-slate-400

          text-center
          lg:text-left
        "
      >
        Trusted by developers preparing for top companies
      </p>

      {/* Marquee */}
      <div
        className="
w-full
overflow-hidden
relative

mt-12

lg:-ml-8
xl:-ml-12
2xl:-ml-16
"
      >
        {/* Left Fade */}
        <div
          className="
            pointer-events-none

            absolute
            left-0
            top-0
            bottom-0

            z-20

            w-12
            sm:w-16

            bg-gradient-to-r
            from-[#090B1A]
            to-transparent
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none

            absolute
            right-0
            top-0
            bottom-0

            z-20

            w-12
            sm:w-16

            bg-gradient-to-l
            from-[#090B1A]
            to-transparent
          "
        />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 28,
          }}
          className="
            flex

            w-max

            items-center

            gap-6
            sm:gap-7
            md:gap-10
            lg:gap-14
          "
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="
                flex
                flex-shrink-0

                items-center
                justify-center

                w-28
                sm:w-32
                md:w-36
                lg:w-40

                h-12
                sm:h-14
                lg:h-16
              "
            >
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="
                  w-auto

                  max-h-8
                  sm:max-h-10
                  lg:max-h-11

                  select-none

                  grayscale

                  opacity-60

                  transition-all
                  duration-300

                  hover:grayscale-0
                  hover:opacity-100
                  hover:scale-110
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}