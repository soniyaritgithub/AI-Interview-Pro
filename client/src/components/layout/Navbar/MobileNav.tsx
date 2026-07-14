import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Button from "../../ui/Button/Button";
import { navigation } from "./navigation";
import {
  drawerVariants,
  itemVariants,
  backdropVariants,
} from "../../../animations/navbar";


export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
  function handleEsc(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  window.addEventListener("keydown", handleEsc);

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, []);
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);
useEffect(() => {
  if (open) {
    drawerRef.current?.focus();
  }
}, [open]);

  return (
    <>
      {/* Hamburger */}
      <motion.button
  onClick={() => setOpen(true)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.92 }}
  aria-label="Open menu"
  aria-expanded={open}
  aria-controls="mobile-menu"
  className="
    lg:hidden
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl
    border
    border-white/10
    bg-slate-900
    text-white
    transition-all
    duration-300
    hover:bg-slate-800
  "
>
  <Menu size={22} />
</motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
  variants={backdropVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-sm
              "
            />

            {/* Drawer */}
         <motion.aside
          variants={drawerVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
         id="mobile-menu"
  ref={drawerRef}
  tabIndex={-1}
              
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
              w-full
max-w-[320px]
sm:max-w-[360px]
md:max-w-[400px]

                flex-col
                bg-slate-950
                border-l
                border-white/10
                p-6
              "
            >
              {/* Top */}
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  Menu
                </h2>

               <motion.button
  onClick={() => setOpen(false)}
  whileHover={{ rotate: 90 }}
  whileTap={{ scale: 0.9 }}
  className="
    rounded-lg
    p-2
    text-white
    transition-colors
    hover:bg-white/10
  "
>
  <X size={24} />
</motion.button>
              </div>

              {/* Navigation */}
         <motion.nav
  className="flex flex-col gap-5"
>
                {navigation.map((item) => (
                 <motion.a
  variants={itemVariants}
                    key={item.label}
                    href={item.href}
                    className="
  text-lg
  font-medium
  text-gray-300
  transition-all
  duration-300
  hover:text-violet-400
  hover:translate-x-2
"
                  >
                    {item.label}
                </motion.a>
                ))}
             </motion.nav>

              {/* Bottom Buttons */}
           <motion.div
  variants={itemVariants}
  className="mt-auto space-y-4"
>
                <Button
                  variant="outline"
                  fullWidth
                >
                  Login
                </Button>

                <Button fullWidth>
                  Get Started
                </Button>
         </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}