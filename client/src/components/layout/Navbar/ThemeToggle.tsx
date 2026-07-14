import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      aria-label="Toggle Theme"
      className="
      hidden
      lg:flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-white/5
      text-white
      transition-all
      duration-300
      hover:bg-white/10
      "
    >
      <Moon size={18} />
    </button>
  );
}