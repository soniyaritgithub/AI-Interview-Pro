/**
 * --------------------------------------------------------------------------
 * JWT TOKEN UTILITY
 * --------------------------------------------------------------------------
 * Centralized JWT token management.
 * React 19 + TypeScript Strict Mode
 * Render / Docker / Vercel Ready
 * --------------------------------------------------------------------------
 */

/* -------------------------------------------------------------------------- */
/*                               STORAGE KEYS                                 */
/* -------------------------------------------------------------------------- */

export const ACCESS_TOKEN_KEY = "access_token";

export const REFRESH_TOKEN_KEY = "refresh_token";

/* -------------------------------------------------------------------------- */
/*                              ACCESS TOKEN                                  */
/* -------------------------------------------------------------------------- */

export function setAccessToken(
  token: string
): void {
  localStorage.setItem(
    ACCESS_TOKEN_KEY,
    token
  );
}

export function getAccessToken():
  | string
  | null {
  return localStorage.getItem(
    ACCESS_TOKEN_KEY
  );
}

export function removeAccessToken(): void {
  localStorage.removeItem(
    ACCESS_TOKEN_KEY
  );
}

/* -------------------------------------------------------------------------- */
/*                              REFRESH TOKEN                                 */
/* -------------------------------------------------------------------------- */

export function setRefreshToken(
  token: string
): void {
  localStorage.setItem(
    REFRESH_TOKEN_KEY,
    token
  );
}

export function getRefreshToken():
  | string
  | null {
  return localStorage.getItem(
    REFRESH_TOKEN_KEY
  );
}

export function removeRefreshToken(): void {
  localStorage.removeItem(
    REFRESH_TOKEN_KEY
  );
}

/* -------------------------------------------------------------------------- */
/*                              SAVE TOKENS                                   */
/* -------------------------------------------------------------------------- */

export function saveTokens(
  access: string,
  refresh: string
): void {
  setAccessToken(access);
  setRefreshToken(refresh);
}

/* -------------------------------------------------------------------------- */
/*                             CLEAR TOKENS                                   */
/* -------------------------------------------------------------------------- */

export function clearTokens(): void {
  removeAccessToken();
  removeRefreshToken();
}

/* -------------------------------------------------------------------------- */
/*                           AUTHENTICATION                                   */
/* -------------------------------------------------------------------------- */

export function isAuthenticated(): boolean {
  return getAccessToken() !== null;
}

/* -------------------------------------------------------------------------- */
/*                           TOKEN EXISTS                                     */
/* -------------------------------------------------------------------------- */

export function hasTokens(): boolean {
  return Boolean(
    getAccessToken() &&
    getRefreshToken()
  );
}

/* -------------------------------------------------------------------------- */
/*                           TOKEN OBJECT                                     */
/* -------------------------------------------------------------------------- */

export interface AuthTokens {
  access: string;
  refresh: string;
}

export function getTokens():
  | AuthTokens
  | null {
  const access =
    getAccessToken();

  const refresh =
    getRefreshToken();

  if (!access || !refresh) {
    return null;
  }

  return {
    access,
    refresh,
  };
}