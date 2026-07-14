/* -------------------------------------------------------------------------- */
/*                              JWT UTILITIES                                 */
/* -------------------------------------------------------------------------- */

export interface JwtPayload {
  exp?: number;
  iat?: number;
  sub?: string;
  user_id?: number;
  username?: string;
  email?: string;
  role?: string;

  [key: string]: unknown;
}

/* -------------------------------------------------------------------------- */
/*                             BASE64 URL DECODE                              */
/* -------------------------------------------------------------------------- */

function base64UrlDecode(value: string): string {
  const base64 = value
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const padding =
    "=".repeat((4 - (base64.length % 4)) % 4);

  return atob(base64 + padding);
}

/* -------------------------------------------------------------------------- */
/*                               JWT DECODE                                   */
/* -------------------------------------------------------------------------- */

export function decodeJwt(
  token: string
): JwtPayload | null {
  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      return null;
    }

    const payload = JSON.parse(
      base64UrlDecode(parts[1])
    ) as JwtPayload;

    return payload;
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/*                          TOKEN EXPIRY DATE                                 */
/* -------------------------------------------------------------------------- */

export function getTokenExpiry(
  token: string
): Date | null {
  const payload = decodeJwt(token);

  if (!payload?.exp) {
    return null;
  }

  return new Date(payload.exp * 1000);
}

/* -------------------------------------------------------------------------- */
/*                        TOKEN REMAINING TIME                                */
/* -------------------------------------------------------------------------- */

export function getRemainingTime(
  token: string
): number {
  const payload = decodeJwt(token);

  if (!payload?.exp) {
    return 0;
  }

  const expiry = payload.exp * 1000;

  return Math.max(
    expiry - Date.now(),
    0
  );
}

/* -------------------------------------------------------------------------- */
/*                           TOKEN EXPIRED?                                   */
/* -------------------------------------------------------------------------- */

export function isTokenExpired(
  token: string
): boolean {
  return getRemainingTime(token) <= 0;
}

/* -------------------------------------------------------------------------- */
/*                  SHOULD REFRESH TOKEN?                                     */
/* -------------------------------------------------------------------------- */

export function shouldRefreshToken(
  token: string,
  threshold = 60
): boolean {
  const remaining =
    getRemainingTime(token);

  return remaining <= threshold * 1000;
}

/* -------------------------------------------------------------------------- */
/*                        TOKEN VALIDATION                                    */
/* -------------------------------------------------------------------------- */

export function isValidJwt(
  token: string
): boolean {
  const payload = decodeJwt(token);

  if (!payload) {
    return false;
  }

  return !isTokenExpired(token);
}

/* -------------------------------------------------------------------------- */
/*                         USER ROLE                                          */
/* -------------------------------------------------------------------------- */

export function getUserRole(
  token: string
): string | null {
  const payload = decodeJwt(token);

  return typeof payload?.role === "string"
    ? payload.role
    : null;
}

/* -------------------------------------------------------------------------- */
/*                         USER ID                                            */
/* -------------------------------------------------------------------------- */

export function getUserId(
  token: string
): number | null {
  const payload = decodeJwt(token);

  if (
    typeof payload?.user_id === "number"
  ) {
    return payload.user_id;
  }

  return null;
}