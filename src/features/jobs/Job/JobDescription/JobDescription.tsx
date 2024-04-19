import { useNavigate, useParams } from "react-router";
import { useGetJobs } from "../../useGetJobs";

import { JobDescriptionHeader } from "./JobDescriptionHeader/JobDescriptionHeader";
import { useEffect } from "react";
import { RoutesPaths } from "../../../../types/shared";
import { JobInformations } from "./JobInformations/JobInformations";
import { JobApply } from "./JobApply/JobApply";
import { Wrapper } from "../../../ui/Wrapper/Wrapper";
import { Spinner } from "../../../ui/Spinner/Spinner";
import { useJobTitle } from "./useJobTitle";

export const JobDescription = () => {
  const { isLoading, getJob } = useGetJobs();
  const { id } = useParams();
  const navigate = useNavigate();

  const job = getJob(Number(id));
  useJobTitle(job?.position);

  useEffect(() => {
    if (!isLoading && !job) {
      return navigate(RoutesPaths.HOME);
    }
  }, [job, isLoading, navigate]);

  if (!job) return;

  return (
    <>
      <Wrapper>
        {isLoading && <Spinner />}
        <JobDescriptionHeader job={job} />
        <JobInformations job={job} />
      </Wrapper>
      <JobApply job={job} />
    </>
  );
};
