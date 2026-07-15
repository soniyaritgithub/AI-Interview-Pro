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

md:grid-cols-2

xl:grid-cols-4

gap-8

lg:gap-10

xl:gap-12
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
mb-4

text-sm

font-semibold

uppercase

tracking-[0.12em]

text-white

whitespace-nowrap
"
>
  {section.title}
</h3>
<ul
 className="
mt-2

flex

flex-col

gap-4
"
>{section.links.map(
  (
    link: FooterSection["links"][number]
  ) => (
    <li key={link.label}><a
  href={link.href}
  className="
block

text-sm

leading-6

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