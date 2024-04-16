import { Button } from "../../ui/Button/Button";
import { Job } from "../Job/Job";
import { JobsSchemaType } from "../Job/JobSchema";
import styled from "./JobsList.module.css";

type JobsListProps = {
  jobs: JobsSchemaType;
};

export const JobsList = ({ jobs }: JobsListProps) => {
  return (
    <>
      <ul className={styled.jobs}>
        {jobs.map((job) => (
          <Job key={job.id} {...job} />
        ))}
      </ul>
      <div className={styled.action}>
        <Button modifier="form">Load more</Button>
      </div>
    </>
  );
};
