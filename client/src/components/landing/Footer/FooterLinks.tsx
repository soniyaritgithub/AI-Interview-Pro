import { motion } from "framer-motion";
import {
  footerLinks,
  type FooterSection,
} from "./footerData";


export default function FooterLinks() {
  return (
    <motion.div
    initial={{
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
  delay: 0.2,
}}
className="
w-full

grid

grid-cols-2
sm:grid-cols-2
md:grid-cols-2
lg:grid-cols-4

gap-8
sm:gap-10
lg:gap-12
" >
   {footerLinks.map(
  (section: FooterSection, index: number) => (
        <motion.div
        key={section.title}

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
  duration: 0.5,
  delay: index * 0.08,
}} className="
flex

flex-col

gap-5
">
    <h3
  className="
    text-sm
    sm:text-base

    font-semibold

    uppercase

    tracking-[0.18em]

    text-white
  "
>
  {section.title}
</h3>
<ul
  className="
    flex

    flex-col

    gap-3
  "
>{section.links.map(
  (
    link: FooterSection["links"][number]
  ) => (
    <li key={link.label}><a
  href={link.href}
  className="
    text-sm
    sm:text-[15px]

    text-slate-400

    transition-all
    duration-300

    hover:text-violet-300
    hover:translate-x-1
  "
>
  {link.label}
</a></li> ))} </ul>
</motion.div>

))}

</motion.div>
  );
}