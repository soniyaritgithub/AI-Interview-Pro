import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full

        max-w-screen-2xl

        mx-auto

        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16

        ${className}
      `}
    >
      {children}
    </div>
  );
}