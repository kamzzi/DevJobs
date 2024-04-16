import { Link } from "react-router-dom";
import { JobSchemaType } from "../../JobSchema";
import styled from "./JobDescriptionHeader.module.css";

type JobDescriptionHeaderProps = {
  job: JobSchemaType;
};

export const JobDescriptionHeader = ({
  job: { logo, company, logoBackground, website },
}: JobDescriptionHeaderProps) => {
  return (
    <header className={styled.header}>
      <div
        className={styled.header__logo}
        style={{ backgroundColor: logoBackground }}
      >
        <img src={logo} alt={company} />
      </div>
      <div className={styled.header__rest}>
        <div className={styled.header__informations}>
          <p className={styled.header__company}>{company}</p>
          <p>{website}</p>
        </div>
        <Link to={website} className={styled.header__link}>
          Company Site
        </Link>
      </div>
    </header>
  );
};
