import { motion } from "framer-motion";

import FAQItem from "./FAQItem";

import { faqData } from "./faqData";

export default function FAQ() {
  return (
    <section
  id="faq"
  className="
    relative

    overflow-hidden

    py-24

    sm:py-28

    lg:py-32
  "
>
  <div
  className="
    absolute

    inset-0

    -z-10

    bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_65%)]
  "
/>
<div
  className="
    mx-auto

    w-full

    max-w-7xl

    px-5

    sm:px-6

    lg:px-8
  "
>
  <motion.div initial={{
  opacity: 0,
  y: 40,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
  once: true,
}}

transition={{
  duration: 0.6,
}} className="
mx-auto

max-w-3xl

text-center
">
  <span
  className="
    inline-flex

    rounded-full

    border
    border-violet-500/20

    bg-violet-500/10

    px-4

    py-2

    text-sm

    font-medium

    text-violet-300
  "
>
Frequently Asked Questions
</span>
<h2
  className="
    mt-6

    text-3xl

    font-bold

    text-white

    sm:text-4xl

    lg:text-5xl
  "
>
Everything You Need to Know
</h2>
<p
  className="
    mx-auto

    mt-6

    max-w-2xl

    text-base

    leading-8

    text-slate-400

    sm:text-lg
  "
>
Find answers to the most common questions about AI Interview Copilot, resume analysis, mock interviews, ATS scoring and interview preparation.
</p>
</motion.div>
<div
  className="
    mx-auto

    mt-16

    flex

    max-w-4xl

    flex-col

    gap-6
  "
>
  {faqData.map((item) => (
    <FAQItem
  key={item.question}
  question={item.question}
  answer={item.answer}
/>
))}
</div>
</div>
</section>
);
}