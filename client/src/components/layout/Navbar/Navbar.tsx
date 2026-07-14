import { useEffect, useState } from "react";
import clsx from "clsx";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
  <header
  className={clsx(
    "sticky top-0 z-50 w-full",
    "transition-all duration-300",
    scrolled
      ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-xl"
      : "bg-transparent"
  )}
>
      <Container
        className="
        flex
       h-16
sm:h-[72px]
lg:h-20
        items-center
        justify-between
        "
      >
        <Logo />

        <DesktopNav />

      <div
  className="
  flex
  items-center
  gap-2
  xl:gap-3
  "
>
  {/* Desktop Buttons */}
 <div
  className="
  hidden
  lg:flex
  items-center
  gap-3
  "
>
    <ThemeToggle />
    <Button variant="outline">
      Login
    </Button>

    <Button>
      Get Started
    </Button>
  </div>

  {/* Mobile Menu */}
  <MobileNav />
</div>
      </Container>
    </header>
  );
}