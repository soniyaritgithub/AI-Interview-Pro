import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";

import AuthContext from "./AuthContext";
import useIdleTimer from "../hooks/useIdleTimer";

import useSessionSync from "../hooks/useSessionSync";

import {
  login as loginApi,
  register as registerApi,
  logout as logoutApi,
  getCurrentUser,
  refreshAccessToken,
} from "../api/auth";

import type {
  AuthContextType,
  LoginRequest,
  RegisterRequest,
  User,
} from "../types/auth";

import useTokenRefresh from "../hooks/useTokenRefresh";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
    useTokenRefresh();

    useSessionSync({
  onLogin: () => {
    void refreshUser();
  },

  onLogout: () => {
    setUser(null);
  },

  onTokenChange: () => {
    void refreshUser();
  },
});

useIdleTimer({
  timeout: 30 * 60 * 1000, // 30 minutes

  onIdle: () => {
    void logout();
  },
});

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const isAuthenticated = user !== null;

  /**
   * Load current user
   */
  const refreshUser = useCallback(async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch {
      setUser(null);
    }
  }, []);

  /**
   * Restore session when app starts
   */
  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        const token = await refreshAccessToken();

        if (!mounted) return;

        if (token) {
          await refreshUser();
        } else {
          setUser(null);
        }
      } catch {
        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    void initialize();

    return () => {
      mounted = false;
    };
  }, [refreshUser]);

  /**
   * Login
   */
  const login = useCallback(
    async (payload: LoginRequest): Promise<void> => {
      await loginApi(payload);

      await refreshUser();
    },
    [refreshUser]
  );

  /**
   * Register
   */
  const register = useCallback(
    async (payload: RegisterRequest): Promise<void> => {
      await registerApi(payload);
    },
    []
  );

  /**
   * Logout
   */
  const logout = useCallback(async (): Promise<void> => {
    try {
      await logoutApi();
    } finally {
      setUser(null);
    }
  }, []);

  /**
   * Context Value
   */
  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      isAuthenticated,

      login,
      register,
      logout,

      refreshUser,
    }),
    [
      user,
      loading,
      isAuthenticated,
      login,
      register,
      logout,
      refreshUser,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}