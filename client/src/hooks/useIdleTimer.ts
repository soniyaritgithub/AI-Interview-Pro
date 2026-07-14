import {
  useEffect,
  useRef,
} from "react";

interface UseIdleTimerOptions {
  timeout?: number;
  onIdle: () => void;
}

const EVENTS = [
  "mousemove",
  "mousedown",
  "keydown",
  "scroll",
  "touchstart",
];

export default function useIdleTimer({
  timeout = 30 * 60 * 1000, // 30 min
  onIdle,
}: UseIdleTimerOptions): void {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        onIdle();
      }, timeout);
    };

    EVENTS.forEach((event) =>
      window.addEventListener(
        event,
        resetTimer,
        {
          passive: true,
        }
      )
    );

    resetTimer();

    return () => {
      EVENTS.forEach((event) =>
        window.removeEventListener(
          event,
          resetTimer
        )
      );

      if (timerRef.current !== null) {
        window.clearTimeout(
          timerRef.current
        );
      }
    };
  }, [
    timeout,
    onIdle,
  ]);
}