import { Link } from "react-router-dom";
import { JobSchemaType } from "../../JobSchema";
import styled from "./JobApply.module.css";

type JobApplyProps = {
  job: JobSchemaType;
};

export const JobApply = ({
  job: { position, apply, company },
}: JobApplyProps) => {
  return (
    <footer className={styled.footer}>
      <div className={styled.informations__position}>
        <h2 className={styled.informations__title}>{position}</h2>
        <p className={styled.informations__company}>{company}</p>
      </div>
      <Link to={apply} target="_blank" className={styled.link}>
        Apply Now
      </Link>
    </footer>
  );
};
