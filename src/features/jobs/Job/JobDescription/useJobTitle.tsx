import { useEffect } from "react";

export const useJobTitle = (position?: string) => {
  useEffect(() => {
    if (!position) return;

    document.title = `DevJobs - ${position} job`;

    return () => {
      document.title = `DevJobs - find your dream job`;
    };
  }, [position]);
};
