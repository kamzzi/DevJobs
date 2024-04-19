import { JobSchemaType } from "./JobSchema";
import styled from "./Job.module.css";
import { JobLogo } from "./JobLogo/JobLogo";
import { JobContract } from "./JobContract/JobContract";
import { CustomLink } from "../../ui/CustomLink/CustomLink";

export const Job = ({
  id,
  company,
  logo,
  logoBackground,
  postedAt,
  contract,
  position,
  location,
}: JobSchemaType) => {
  return (
    <li className={styled.job}>
      <CustomLink to={`${id}`} modifier="job">
        <JobLogo
          company={company}
          logo={logo}
          logoBackground={logoBackground}
          className={styled.job__logo}
        />
        <JobContract contract={contract} postedAt={postedAt} />
        <h2 className={styled.job__title}>{position}</h2>
        <p className={styled.job__company}>{company}</p>
        <p className={styled.job__location}>{location}</p>
      </CustomLink>
    </li>
  );
};
