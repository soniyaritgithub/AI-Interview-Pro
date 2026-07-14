import axios from "axios";

import type { AxiosInstance } from "axios";

/* -------------------------------------------------------------------------- */
/*                         REFRESH TOKEN API CLIENT                           */
/* -------------------------------------------------------------------------- */
/**
 * Dedicated Axios instance used ONLY for
 * refresh token requests.
 *
 * No interceptors.
 * No automatic Authorization header.
 * Prevents circular dependency with api.ts.
 */

const refreshApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  timeout:
    Number(
      import.meta.env.VITE_REQUEST_TIMEOUT
    ) || 30000,

  headers: {
    "Content-Type": "application/json",
  },
});

/* -------------------------------------------------------------------------- */
/*                     OPTIONAL REQUEST TRANSFORM                             */
/* -------------------------------------------------------------------------- */

refreshApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

/* -------------------------------------------------------------------------- */
/*                     OPTIONAL RESPONSE TRANSFORM                            */
/* -------------------------------------------------------------------------- */

refreshApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default refreshApi;