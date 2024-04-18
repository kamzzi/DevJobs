import { FiltersSchemaType } from "../../filters/FiltersSchema";
import { JobsSchemaType } from "../Job/JobSchema";

export const filtering = (
  jobs: JobsSchemaType,
  { title, location, fullTime }: FiltersSchemaType
) => {
  let filteredJobs = jobs;

  console.log(fullTime);

  if (title) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.company.toLowerCase().includes(title.toLowerCase()) ||
        job.position.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (fullTime) {
    filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");
  }

  return filteredJobs;
};
