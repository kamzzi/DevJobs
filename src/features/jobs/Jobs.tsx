import { useFiltersQuery } from "../filters/useFiltersQuery";
import { Button } from "../ui/Button/Button";
import { Error } from "../ui/Error/Error";
import { Spinner } from "../ui/Spinner/Spinner";
import { Wrapper } from "../ui/Wrapper/Wrapper";
import styled from "./Jobs.module.css";
import { JobsList } from "./JobsList/JobsList";
import { filtering } from "./helpers/filtering";
import { useGetJobs } from "./useGetJobs";

export const Jobs = () => {
  const [params] = useFiltersQuery();
  const { jobs, error, isLoading, loadMore, isFull } = useGetJobs();

  const filteredJobs = filtering(jobs, params);

  return (
    <Wrapper modifier="jobs">
      <div className={styled.jobs}>
        {isLoading && <Spinner />}
        {!isLoading && error && <Error error={error} />}
        {!isLoading && !error && jobs && (
          <>
            <JobsList jobs={filteredJobs} />
            {filteredJobs.length > 0 && (
              <div className={styled.action}>
                <Button modifier="form" onClick={loadMore}>
                  {isLoading
                    ? "Loading..."
                    : isFull
                    ? "No more data"
                    : "Load more"}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
};
