import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

/* -------------------------------------------------------------------------- */
/*                             API REQUEST CONFIG                             */
/* -------------------------------------------------------------------------- */

export interface ApiRequestConfig
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             API RESPONSE                                   */
/* -------------------------------------------------------------------------- */

export type ApiResponse<T = unknown> =
  AxiosResponse<T>;

/* -------------------------------------------------------------------------- */
/*                         REFRESH TOKEN RESPONSE                             */
/* -------------------------------------------------------------------------- */

export interface RefreshTokenResponse {
  access: string;
}

/* -------------------------------------------------------------------------- */
/*                              API ERROR                                     */
/* -------------------------------------------------------------------------- */

export interface ApiErrorResponse {
  detail?: string;
  message?: string;
  errors?: Record<string, unknown>;
}