/**
 * --------------------------------------------------------------------------
 * REFRESH TOKEN QUEUE
 * --------------------------------------------------------------------------
 * Prevents multiple simultaneous refresh requests.
 *
 * React 19
 * TypeScript Strict
 * Vite
 * Render
 * Docker
 * Vercel
 * --------------------------------------------------------------------------
 */

type RefreshCallback = (token: string | null) => void;

let isRefreshing = false;

let refreshPromise: Promise<string | null> | null = null;

let subscribers: RefreshCallback[] = [];

/* -------------------------------------------------------------------------- */
/*                             SUBSCRIBERS                                    */
/* -------------------------------------------------------------------------- */

function subscribe(
  callback: RefreshCallback
): void {
  subscribers.push(callback);
}

function notifySubscribers(
  token: string | null
): void {
  subscribers.forEach((callback) => {
    callback(token);
  });

  subscribers = [];
}

/* -------------------------------------------------------------------------- */
/*                         REFRESH STATUS                                     */
/* -------------------------------------------------------------------------- */

export function isRefreshInProgress(): boolean {
  return isRefreshing;
}

/* -------------------------------------------------------------------------- */
/*                         START REFRESH                                      */
/* -------------------------------------------------------------------------- */

export function beginRefresh(
  refreshFunction: () => Promise<string | null>
): Promise<string | null> {
  if (refreshPromise) {
    return refreshPromise;
  }

  isRefreshing = true;

  refreshPromise = refreshFunction()
    .then((token) => {
      notifySubscribers(token);

      return token;
    })
    .finally(() => {
      isRefreshing = false;

      refreshPromise = null;
    });

  return refreshPromise;
}

/* -------------------------------------------------------------------------- */
/*                         WAIT FOR REFRESH                                   */
/* -------------------------------------------------------------------------- */

export function waitForRefresh(): Promise<string | null> {
  return new Promise((resolve) => {
    subscribe(resolve);
  });
}