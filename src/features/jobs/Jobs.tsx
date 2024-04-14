import { Error } from "../ui/Error/Error";
import { Spinner } from "../ui/Spinner/Spinner";
import { Wrapper } from "../ui/Wrapper/Wrapper";
import styled from "./Jobs.module.css";
import { JobsList } from "./JobsList/JobsList";
import { useGetJobs } from "./useGetJobs";

export const Jobs = () => {
  const { jobs, error, isLoading } = useGetJobs();

  return (
    <Wrapper modifier="jobs">
      <div className={styled.jobs}>
        {isLoading && <Spinner />}
        {!isLoading && error && <Error error={error} />}
        {!isLoading && !error && jobs && <JobsList jobs={jobs} />}
      </div>
    </Wrapper>
  );
};
