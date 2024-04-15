import { useFiltersQuery } from "../filters/useFiltersQuery";
import { Error } from "../ui/Error/Error";
import { Spinner } from "../ui/Spinner/Spinner";
import { Wrapper } from "../ui/Wrapper/Wrapper";
import styled from "./Jobs.module.css";
import { JobsList } from "./JobsList/JobsList";
import { filtering } from "./helpers/filtering";
import { useGetJobs } from "./useGetJobs";

export const Jobs = () => {
  const [params] = useFiltersQuery();
  const { jobs, error, isLoading } = useGetJobs();

  const filteredJobs = filtering(jobs, params);

  return (
    <Wrapper modifier="jobs">
      <div className={styled.jobs}>
        {isLoading && <Spinner />}
        {!isLoading && error && <Error error={error} />}
        {!isLoading && !error && jobs && <JobsList jobs={filteredJobs} />}
      </div>
    </Wrapper>
  );
};
