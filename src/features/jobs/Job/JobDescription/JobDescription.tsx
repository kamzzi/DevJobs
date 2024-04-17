import { useNavigate, useParams } from "react-router";
import { useGetJobs } from "../../useGetJobs";

import { JobDescriptionHeader } from "./JobDescriptionHeader/JobDescriptionHeader";
import { useEffect } from "react";
import { RoutesPaths } from "../../../../types/shared";
import { JobInformations } from "./JobInformations/JobInformations";
import { JobApply } from "./JobApply/JobApply";

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
    <>
      <JobDescriptionHeader job={job} />
      <JobInformations job={job} />
      <JobApply job={job} />
    </>
  );
};
