import type { ReactNode } from "react";
import clsx from "clsx";

import Container from "../Container/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      className={clsx(
        "py-16",
        "md:py-20",
        "lg:py-24",
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}