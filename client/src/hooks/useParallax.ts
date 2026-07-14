import { useEffect, useState } from "react";

interface ParallaxOffset {
  x: number;
  y: number;
}

export default function useParallax(): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Enable only on desktop
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Horizontal movement: -15px → +15px
      const x =
        ((e.clientX / window.innerWidth) - 0.5) * 30;

      // Vertical movement: -10px → +10px
      const y =
        ((e.clientY / window.innerHeight) - 0.5) * 20;

      setOffset({
        x,
        y,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return offset;
}