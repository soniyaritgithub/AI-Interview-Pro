import { AxiosError } from "axios";

/* -------------------------------------------------------------------------- */
/*                              API ERROR TYPES                               */
/* -------------------------------------------------------------------------- */

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  errors?: Record<string, unknown>;
  originalError?: unknown;
}

/* -------------------------------------------------------------------------- */
/*                          DEFAULT ERROR MESSAGES                            */
/* -------------------------------------------------------------------------- */

const DEFAULT_MESSAGES = {
  NETWORK:
    "Unable to connect to the server. Please check your internet connection.",

  OFFLINE:
    "You are currently offline.",

  TIMEOUT:
    "The request timed out. Please try again.",

  UNAUTHORIZED:
    "Your session has expired. Please log in again.",

  FORBIDDEN:
    "You don't have permission to perform this action.",

  NOT_FOUND:
    "Requested resource was not found.",

  VALIDATION:
    "Please check the entered information.",

  SERVER:
    "Something went wrong on the server.",

  UNKNOWN:
    "Unexpected error occurred.",
} as const;

/* -------------------------------------------------------------------------- */
/*                             ERROR PARSER                                   */
/* -------------------------------------------------------------------------- */

export function parseApiError(
  error: unknown
): ApiError {

  if (!navigator.onLine) {
    return {
      message: DEFAULT_MESSAGES.OFFLINE,
      status: 0,
    };
  }

  if (error instanceof AxiosError) {

    if (
      error.code === "ECONNABORTED"
    ) {
      return {
        message: DEFAULT_MESSAGES.TIMEOUT,
        status: 408,
        code: error.code,
        originalError: error,
      };
    }

    if (!error.response) {
      return {
        message: DEFAULT_MESSAGES.NETWORK,
        status: 0,
        code: error.code,
        originalError: error,
      };
    }

    const status =
      error.response.status;

    switch (status) {

      case 400:
        return {
          message:
            error.response.data?.detail ??
            DEFAULT_MESSAGES.VALIDATION,
          status,
          errors:
            error.response.data,
          originalError: error,
        };

      case 401:
        return {
          message:
            DEFAULT_MESSAGES.UNAUTHORIZED,
          status,
          originalError: error,
        };

      case 403:
        return {
          message:
            DEFAULT_MESSAGES.FORBIDDEN,
          status,
          originalError: error,
        };

      case 404:
        return {
          message:
            DEFAULT_MESSAGES.NOT_FOUND,
          status,
          originalError: error,
        };

      case 500:
      case 502:
      case 503:
      case 504:
        return {
          message:
            DEFAULT_MESSAGES.SERVER,
          status,
          originalError: error,
        };

      default:
        return {
          message:
            error.response.data?.detail ??
            DEFAULT_MESSAGES.UNKNOWN,
          status,
          errors:
            error.response.data,
          originalError: error,
        };
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      status: 0,
      originalError: error,
    };
  }

  return {
    message:
      DEFAULT_MESSAGES.UNKNOWN,
    status: 0,
    originalError: error,
  };
}

/* -------------------------------------------------------------------------- */
/*                            TYPE GUARD                                      */
/* -------------------------------------------------------------------------- */

export function isApiError(
  value: unknown
): value is ApiError {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value
  );
}