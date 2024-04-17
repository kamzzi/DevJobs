import { JobSchemaType } from "../../JobSchema";
import styled from "./JobApply.module.css";
import { CustomLink } from "../../../../ui/CustomLink/CustomLink";
import { Wrapper } from "../../../../ui/Wrapper/Wrapper";

type JobApplyProps = {
  job: JobSchemaType;
};

export const JobApply = ({
  job: { position, apply, company },
}: JobApplyProps) => {
  return (
    <footer className={styled.footer}>
      <Wrapper>
        <div className={styled.footer__content}>
          <div className={styled.informations__position}>
            <h2 className={styled.informations__title}>{position}</h2>
            <p className={styled.informations__company}>{company}</p>
          </div>
          <CustomLink to={apply} target="_blank" modifier="apply">
            Apply Now
          </CustomLink>
        </div>
      </Wrapper>
    </footer>
  );
};
