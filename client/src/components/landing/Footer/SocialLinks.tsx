import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import {
  MdEmail,
} from "react-icons/md";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/soniyaritgithub",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sunidhishinde",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://twitter.com/yourusername",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    href: "mailto:sunidhishinde28@gmail.com",
    icon: MdEmail,
  },
];

export default function SocialLinks() {
  return (
    <div
  className="
    mt-8

    flex
    flex-wrap

    items-center

    gap-3
    sm:gap-4
  "
>
    {socialLinks.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.a
    key={item.name}

href={item.href}

target="_blank"

rel="noopener noreferrer"

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
  delay: index * 0.08,
  duration: 0.4,
}}

whileHover={{
  y: -4,
  scale: 1.08,
}}

whileTap={{
  scale: 0.95,
}}
className="
group

relative

flex

h-12
w-12

sm:h-14
sm:w-14

items-center
justify-center

rounded-2xl

border
border-white/10

bg-white/[0.05]

backdrop-blur-xl

shadow-lg

transition-all
duration-300

hover:border-violet-500/40
">
    <div
  className="
    absolute

    inset-0

    rounded-2xl

    opacity-0

    blur-xl

    transition-all
    duration-300

    group-hover:opacity-100

    bg-violet-500/20
  "
/>
<div
  className="
    relative

    z-10
  "
>
  <Icon
    size={20}
    className="
      text-slate-300

      transition-colors
      duration-300

      group-hover:text-white
    "
  />
</div>
</motion.a>
);
})}
</div>
);
}