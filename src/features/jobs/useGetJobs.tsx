import { useEffect, useState } from "react";
import { URL } from "./api/api";
import { JobSchemaType, JobsSchema } from "./Job/JobSchema";

export const useGetJobs = () => {
  const [jobs, setJobs] = useState<JobSchemaType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/jobs`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `Something goes wrong : (${response.status}) ${response.statusText} `
          );
        }

        const data = await response.json();

        const parsedData = JobsSchema.parse(data);

        console.log(parsedData);

        if (parsedData) {
          setJobs(parsedData);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { jobs, isLoading, error } as const;
};
