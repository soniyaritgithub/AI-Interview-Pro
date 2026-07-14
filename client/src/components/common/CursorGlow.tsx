import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop only
    if (window.innerWidth < 1024) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="
        hidden
        lg:block

        pointer-events-none

        fixed
        inset-0

        z-0

        overflow-hidden
      "
    >
      <div
        ref={glowRef}
        className="
          absolute

          -translate-x-1/2
          -translate-y-1/2

          h-[380px]
          w-[380px]

          rounded-full

          bg-violet-500/20

          blur-[120px]

          mix-blend-screen

          will-change-transform
        "
      />
    </div>
  );
}