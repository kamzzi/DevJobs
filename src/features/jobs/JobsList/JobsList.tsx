import { Error } from "../../ui/Error/Error";
import { Job } from "../Job/Job";
import { JobsSchemaType } from "../Job/JobSchema";
import styled from "./JobsList.module.css";

type JobsListProps = {
  jobs: JobsSchemaType;
};

export const JobsList = ({ jobs }: JobsListProps) => {
  if (!jobs.length) {
    return <Error error="No jobs found, change a filtering." />;
  }

  return (
    <ul className={styled.jobs}>
      {jobs.map((job) => (
        <Job key={job.id} {...job} />
      ))}
    </ul>
  );
};
