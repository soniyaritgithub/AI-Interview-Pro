import axios, { AxiosError } from "axios";

import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

/* ==========================================================
   Base URL
========================================================== */

const BASE_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:8000/api/v1";

/* ==========================================================
   Axios Instance
========================================================== */

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,

  timeout: 30000,

  withCredentials: false,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/* ==========================================================
   Request Interceptor
========================================================== */

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/* ==========================================================
   Response Interceptor
========================================================== */

api.interceptors.response.use(
  (response: AxiosResponse) => response,

  (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(
        new Error(
          "Network error. Please check your internet connection."
        )
      );
    }

    switch (error.response.status) {
      case 400:
  console.log(error.response?.data);

  return Promise.reject(error);

      case 401:
        localStorage.removeItem(
          "accessToken"
        );

        return Promise.reject(
          new Error("Unauthorized.")
        );

      case 403:
        return Promise.reject(
          new Error("Access denied.")
        );

      case 404:
        return Promise.reject(
          new Error("Resource not found.")
        );

      case 413:
        return Promise.reject(
          new Error("Uploaded file is too large.")
        );

      case 422:
        return Promise.reject(
          new Error("Validation failed.")
        );

      case 429:
        return Promise.reject(
          new Error(
            "Too many requests. Please try again later."
          )
        );

      case 500:
        return Promise.reject(
          new Error("Internal server error.")
        );

      default:
        return Promise.reject(
          new Error(
            error.message ||
              "Something went wrong."
          )
        );
    }
  }
);

/* ==========================================================
   Export
========================================================== */

export default api;