import { useEffect, useRef } from "react";

import { refreshAccessToken } from "../api/auth";
import { getAccessToken } from "../utils/token";
import { shouldRefreshToken } from "../utils/jwt";

const DEFAULT_CHECK_INTERVAL = 60 * 1000; // 1 minute

export default function useTokenRefresh(): void {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = getAccessToken();

        if (!token) {
          return;
        }

        if (shouldRefreshToken(token)) {
          await refreshAccessToken();
        }
      } catch (error) {
        console.error(
          "Automatic token refresh failed:",
          error
        );
      }
    };

    void checkToken();

    timerRef.current = window.setInterval(() => {
      void checkToken();
    }, DEFAULT_CHECK_INTERVAL);

    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);
}