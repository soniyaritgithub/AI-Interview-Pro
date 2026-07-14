import { motion } from "framer-motion";

import { containerVariants } from "../../../animations/hero";

import BackgroundGlow from "./BackgroundGlow";
import BrowserMockup from "./BrowserMockup";
import Container from "../../ui/Container/Container";
import FloatingCards from "./FloatingCards";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroDescription from "./HeroDescription";
import HeroHeading from "./HeroHeading";
import CursorGlow from "../../common/CursorGlow";
import HeroParticles from "./HeroParticles";


export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden

        min-h-[calc(100vh-80px)]

        flex
        items-center

        pt-16
        sm:pt-20
        lg:pt-12

        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      <BackgroundGlow />
      <CursorGlow />
<HeroParticles />


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full"
      >
      <Container
  className="
w-full

pt-8
sm:pt-12
md:pt-16
lg:pt-0

flex
flex-col
lg:flex-row

items-center
justify-between

gap-10

px-4
sm:px-6
md:px-8
lg:px-8
xl:px-10
2xl:px-12
"
>
          {/* LEFT */}
         <div
className="
w-full

lg:w-[50%]
xl:w-[48%]

flex
flex-col

items-center
lg:items-start

text-center
lg:text-left

lg:pr-4
xl:pr-6
2xl:pr-8

lg:-translate-x-12
xl:-translate-x-16
2xl:-translate-x-20
"
>
        <div className="-mt-6 lg:-mt-5">
  <HeroBadge />
</div>

<HeroHeading
  title="Master Every"
  highlight="AI Interview"
/>

            <HeroDescription
              description="Practice AI-powered mock interviews, receive detailed feedback, improve communication, coding, and confidence—all in one professional platform."
            />

            <HeroButtons />

           
          </div>

          {/* RIGHT */}
          <div
          className="
relative

order-1
lg:order-2

w-full
lg:w-[54%]

flex
justify-center
items-center

mx-auto

mt-6
lg:mt-0
"
          >
            <BrowserMockup />

            <FloatingCards />
          </div>
        </Container>
      </motion.div>
    </section>
  );
}