/**
 * -----------------------------------------
 * Storage Utility
 * -----------------------------------------
 * Generic LocalStorage & SessionStorage Helper
 * Production Safe
 * TypeScript
 * Render Ready
 * Docker Ready
 */

type StorageType = "local" | "session";

/**
 * Get Storage Object
 */
const getStorage = (
  type: StorageType = "local"
): Storage => {
  return type === "local"
    ? window.localStorage
    : window.sessionStorage;
};

/**
 * Save JSON Data
 */
export const setStorageItem = <T>(
  key: string,
  value: T,
  type: StorageType = "local"
): void => {
  try {
    getStorage(type).setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(
      "Storage Write Error:",
      error
    );
  }
};

/**
 * Get JSON Data
 */
export const getStorageItem = <T>(
  key: string,
  type: StorageType = "local"
): T | null => {
  try {
    const item = getStorage(type).getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item) as T;
  } catch (error) {
    console.error(
      "Storage Read Error:",
      error
    );

    return null;
  }
};

/**
 * Remove Item
 */
export const removeStorageItem = (
  key: string,
  type: StorageType = "local"
): void => {
  try {
    getStorage(type).removeItem(key);
  } catch (error) {
    console.error(
      "Storage Remove Error:",
      error
    );
  }
};

/**
 * Clear Storage
 */
export const clearStorage = (
  type: StorageType = "local"
): void => {
  try {
    getStorage(type).clear();
  } catch (error) {
    console.error(
      "Storage Clear Error:",
      error
    );
  }
};

/**
 * Check Key Exists
 */
export const hasStorageItem = (
  key: string,
  type: StorageType = "local"
): boolean => {
  return (
    getStorage(type).getItem(key) !== null
  );
};