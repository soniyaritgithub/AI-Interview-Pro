/**
 * ----------------------------------------------------------
 * Correlation ID Utility
 * ----------------------------------------------------------
 * Generates a unique request identifier.
 *
 * Uses the browser's native crypto.randomUUID(),
 * which is supported by all modern browsers.
 *
 * Compatible with:
 * - React 19
 * - Vite
 * - TypeScript
 * - Render
 * - Docker
 * - Vercel
 * ----------------------------------------------------------
 */

export function generateCorrelationId(): string {
  return crypto.randomUUID();
}