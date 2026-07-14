import refreshApi from "./refreshApi";
import API from "./api";
import { parseApiError } from "./errorHandler";

import {
  getAccessToken,
  getRefreshToken,
  saveTokens,
  clearTokens,
} from "../utils/token";

import type {
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from "../types/auth";

/* -------------------------------------------------------------------------- */
/*                              REQUEST OPTIONS                               */
/* -------------------------------------------------------------------------- */

export interface RequestOptions {
  signal?: AbortSignal;
}

/* -------------------------------------------------------------------------- */
/*                                 REGISTER                                   */
/* -------------------------------------------------------------------------- */

export async function register(
  payload: RegisterRequest,
  options?: RequestOptions
): Promise<RegisterResponse> {
  try {
    const { data } = await API.post<RegisterResponse>(
      "/auth/register/",
      payload,
      {
        signal: options?.signal,
      }
    );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                                   LOGIN                                    */
/* -------------------------------------------------------------------------- */

export async function login(
  payload: LoginRequest,
  options?: RequestOptions
): Promise<LoginResponse> {
  try {
    const { data } = await API.post<LoginResponse>(
      "/auth/login/",
      payload,
      {
        signal: options?.signal,
      }
    );

    saveTokens(
      data.access,
      data.refresh
    );

    return data;
  } catch (error) {
    clearTokens();
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                                  LOGOUT                                    */
/* -------------------------------------------------------------------------- */

export async function logout(): Promise<void> {
  try {
    const refresh = getRefreshToken();

    if (refresh) {
      await API.post(
        "/auth/logout/",
        {
          refresh,
        }
      );
    }
  } catch {
    // Ignore logout API errors.
  } finally {
    clearTokens();
  }
}

/* -------------------------------------------------------------------------- */
/*                              CURRENT USER                                  */
/* -------------------------------------------------------------------------- */

export async function getCurrentUser(
  options?: RequestOptions
): Promise<User> {
  try {
    const { data } = await API.get<User>(
      "/auth/me/",
      {
        signal: options?.signal,
      }
    );

    return data;
  } catch (error) {
    throw parseApiError(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                            REFRESH ACCESS TOKEN                            */
/* -------------------------------------------------------------------------- */

export async function refreshAccessToken(): Promise<string | null> {
  try {
    const refresh = getRefreshToken();

    if (!refresh) {
      return null;
    }

    const { data } =
      await refreshApi.post<RefreshTokenResponse>(
        "/auth/refresh/",
        {
          refresh,
        }
      );

    saveTokens(
      data.access,
      refresh
    );

    return data.access;
  } catch {
    clearTokens();
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/*                              AUTH HELPERS                                  */
/* -------------------------------------------------------------------------- */

export function isAuthenticated(): boolean {
  return Boolean(
    getAccessToken()
  );
}

export function getAuthorizationHeader():
  | Record<string, string>
  | Record<string, never> {
  const token =
    getAccessToken();

  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}