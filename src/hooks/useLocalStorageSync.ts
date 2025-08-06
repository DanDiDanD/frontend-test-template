"use client";

import { useEffect, useCallback } from "react";

type UseLocalStorageSyncProps<T> = {
  storageKey: string;
  // eslint-disable-next-line no-unused-vars
  onSync: (value: T) => void;
};

export function useLocalStorageSync<T>({
  storageKey,
  onSync,
}: UseLocalStorageSyncProps<T>) {
  const handleStorageChange = useCallback(
    (e: StorageEvent) => {
      if (e.key === storageKey && e.newValue !== null) {
        try {
          const parsedValue = JSON.parse(e.newValue) as T;
          onSync(parsedValue);
        } catch {
          // eslint-disable-next-line no-console
          console.error(
            `Invalid data for key "${storageKey}" in localStorage, ignoring update.`
          );
        }
      }
    },
    [storageKey, onSync]
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [handleStorageChange]);
}
