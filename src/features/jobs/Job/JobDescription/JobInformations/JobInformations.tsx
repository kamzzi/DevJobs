import { JobSchemaType } from "../../JobSchema";
import styled from "./JobInformations.module.css";
import { CustomLink } from "../../../../ui/CustomLink/CustomLink";
import { JobContract } from "../../JobContract/JobContract";
import { JobDetails } from "../JobDetails/JobDetails";

type JobInformations = {
  job: JobSchemaType;
};

export const JobInformations = ({
  job: {
    postedAt,
    contract,
    position,
    location,
    apply,
    description,
    requirements,
    role,
  },
}: JobInformations) => {
  return (
    <div className={styled.informations}>
      <div className={styled.informations__apply}>
        <div className={styled.informations__position}>
          <JobContract contract={contract} postedAt={postedAt} />
          <h1 className={styled.informations__title}>{position}</h1>
          <p className={styled.informations__location}>{location}</p>
        </div>
        <CustomLink to={apply} target="_blank" modifier="apply">
          Apply Now
        </CustomLink>
      </div>
      <p className={styled.description}>{description}</p>

      <div className={styled.informations__details}>
        <JobDetails title="Requirements" data={requirements} style="circle" />
        <JobDetails title="What you will do" data={role} style="numbers" />
      </div>
    </div>
  );
};
