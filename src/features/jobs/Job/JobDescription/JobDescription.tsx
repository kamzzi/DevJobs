import { useNavigate, useParams } from "react-router";
import { useGetJobs } from "../../useGetJobs";

import { JobDescriptionHeader } from "./JobDescriptionHeader/JobDescriptionHeader";
import { useEffect } from "react";
import { RoutesPaths } from "../../../../types/shared";

export const JobDescription = () => {
  const { isLoading, getJob } = useGetJobs();
  const { id } = useParams();
  const navigate = useNavigate();

  const job = getJob(id);

  useEffect(() => {
    if (!isLoading && !job) {
      return navigate(RoutesPaths.HOME);
    }
  }, [job, isLoading, navigate]);

  if (!job) return;

  return (
    <div>
      <JobDescriptionHeader job={job} />
    </div>
  );
};
