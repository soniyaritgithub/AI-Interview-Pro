import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "shadow-xl",
        "transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-violet-500/40",
        "hover:shadow-violet-500/10",
        "p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}