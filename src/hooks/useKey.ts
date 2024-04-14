import { useEffect } from "react";

export const useKey = (key: string, handler: () => void) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const escape = e.key === key;

      if (!escape) return;

      handler();
    });

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [key, handler]);
};
