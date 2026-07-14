import { useEffect } from "react";

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  getAccessToken,
  getRefreshToken,
} from "../utils/token";

interface UseSessionSyncOptions {
  onLogin?: () => void;
  onLogout?: () => void;
  onTokenChange?: () => void;
}

export default function useSessionSync(
  options: UseSessionSyncOptions = {}
): void {
  const {
    onLogin,
    onLogout,
    onTokenChange,
  } = options;

  useEffect(() => {
    function handleStorage(
      event: StorageEvent
    ): void {
      if (!event.key) {
        return;
      }

      if (
       event.key !== ACCESS_TOKEN_KEY &&
       event.key !== REFRESH_TOKEN_KEY
      ) {
        return;
      }

      const accessToken =
        getAccessToken();

      const refreshToken =
        getRefreshToken();

      if (!accessToken || !refreshToken) {
        onLogout?.();
        return;
      }

      onTokenChange?.();
      onLogin?.();
    }

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, [
    onLogin,
    onLogout,
    onTokenChange,
  ]);
}