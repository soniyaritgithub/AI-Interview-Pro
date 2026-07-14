import type { ApiRequestConfig } from "../types/api";

import axios from "axios";

import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { generateCorrelationId } from "../utils/correlationId";
import {
  getAccessToken,
  clearTokens,
} from "../utils/token";


/* -------------------------------------------------------------------------- */
/*                              AXIOS INSTANCE                                */
/* -------------------------------------------------------------------------- */

const API: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL,

  timeout:
    Number(
      import.meta.env
        .VITE_REQUEST_TIMEOUT
    ) || 30000,

  headers: {
    Accept: "application/json",
    "Content-Type":
      "application/json",
  },
});

/* -------------------------------------------------------------------------- */
/*                           REQUEST INTERCEPTOR                              */
/* -------------------------------------------------------------------------- */

API.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ) => {
    /* ---------------------------------------------------------------------- */
    /* Offline Detection                                                      */
    /* ---------------------------------------------------------------------- */

    if (!navigator.onLine) {
      return Promise.reject(
        new Error(
          "No internet connection."
        )
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Authorization Header                                                   */
    /* ---------------------------------------------------------------------- */

    const token = getAccessToken();

    if (token) {
      config.headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Default Headers                                                        */
    /* ---------------------------------------------------------------------- */

    config.headers.set(
      "Accept",
      "application/json"
    );

    config.headers.set(
      "X-Requested-With",
      "XMLHttpRequest"
    );

    /* ---------------------------------------------------------------------- */
    /* Correlation ID                                                         */
    /* ---------------------------------------------------------------------- */

    config.headers.set(
      "X-Correlation-ID",
      generateCorrelationId()
    );

    /* ---------------------------------------------------------------------- */
    /* Request Timestamp                                                      */
    /* ---------------------------------------------------------------------- */

    config.headers.set(
      "X-Request-Time",
      new Date().toISOString()
    );

    return config;
  },

  (error: AxiosError) =>
    Promise.reject(error)
);

/* -------------------------------------------------------------------------- */
/*                          RESPONSE INTERCEPTOR                              */
/* -------------------------------------------------------------------------- */
/* Step 23.1:
   Keep this simple.
   Refresh queue will be added in Step 23.2.
*/

API.interceptors.response.use(

  (
    response: AxiosResponse
  ) => response,

  (
    error: AxiosError
  ) => {
    const originalRequest =
  error.config as ApiRequestConfig | undefined;
  if (!originalRequest) {
  return Promise.reject(error);
}

if (originalRequest._retry) {
  return Promise.reject(error);
}

originalRequest._retry = true;
    if (
      error.response?.status === 401
    ) {
      clearTokens();

      if (
        window.location.pathname !==
        "/login"
      ) {
        window.location.replace(
          "/login"
        );
      }
    }

    return Promise.reject(error);
  }
);

export default API;