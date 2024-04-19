import { useEffect, useState } from "react";
import { URL } from "./api/api";
import { JobSchemaType, JobsSchema } from "./Job/JobSchema";

const JOBS_INITIAL_LIMIT = 6;
const LOAD_MORE_INCREMENT = 3;

export const useGetJobs = () => {
  const [jobs, setJobs] = useState<JobSchemaType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(JOBS_INITIAL_LIMIT);

  const returnedJobs = jobs.slice(0, limit);
  const isFull = limit >= jobs.length;

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

  const loadMore = () => {
    if (isFull) return;

    setLimit((prevLimit) => prevLimit + LOAD_MORE_INCREMENT);
  };

  const getJob = (id?: number) => {
    if (!id) return;

    const job = jobs.find((job) => job.id === id);

    return job;
  };

  return {
    jobs: returnedJobs,
    isLoading,
    error,
    isFull,
    loadMore,
    getJob,
  } as const;
};
