import { JobSchemaType } from "../../JobSchema";
import styled from "./JobDescriptionHeader.module.css";
import { JobLogo } from "../../JobLogo/JobLogo";
import { CustomLink } from "../../../../ui/CustomLink/CustomLink";

type JobDescriptionHeaderProps = {
  job: JobSchemaType;
};

export const JobDescriptionHeader = ({
  job: { logo, company, logoBackground, website },
}: JobDescriptionHeaderProps) => {
  return (
    <header className={styled.header}>
      <JobLogo
        company={company}
        logo={logo}
        logoBackground={logoBackground}
        className={styled.header__logo}
      />
      <div className={styled.header__rest}>
        <div className={styled.header__informations}>
          <p className={styled.header__company}>{company}</p>
          <p>{website}</p>
        </div>
        <CustomLink to={website} modifier="company" target="_blank">
          Company Site
        </CustomLink>
      </div>
    </header>
  );
};
