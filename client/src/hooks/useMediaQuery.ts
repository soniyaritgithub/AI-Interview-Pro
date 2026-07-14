import { useEffect, useState } from "react";

/* ==========================================================
   Breakpoints
========================================================== */

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
};

/* ==========================================================
   Return Type
========================================================== */

interface MediaQueryState {
  width: number;

  isMobile: boolean;

  isTablet: boolean;

  isDesktop: boolean;
}

/* ==========================================================
   Hook
========================================================== */

export default function useMediaQuery(): MediaQueryState {
  const getWidth = () =>
    typeof window === "undefined" ? 1920 : window.innerWidth;

  const [width, setWidth] = useState<number>(getWidth());

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: number;

    const handleResize = () => {
      window.clearTimeout(timeoutId);

      timeoutId = window.setTimeout(() => {
        setWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return {
    width,

    isMobile: width < BREAKPOINTS.mobile,

    isTablet:
      width >= BREAKPOINTS.mobile &&
      width < BREAKPOINTS.tablet,

    isDesktop: width >= BREAKPOINTS.tablet,
  };
}