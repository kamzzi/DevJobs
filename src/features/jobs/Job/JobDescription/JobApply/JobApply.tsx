import { JobSchemaType } from "../../JobSchema";
import styled from "./JobApply.module.css";
import { CustomLink } from "../../../../ui/CustomLink/CustomLink";
import { Wrapper } from "../../../../ui/Wrapper/Wrapper";
import { useMediaQuery } from "react-responsive";

type JobApplyProps = {
  job: JobSchemaType;
};

export const JobApply = ({
  job: { position, apply, company },
}: JobApplyProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width:48rem)",
  });

  return (
    <footer className={styled.footer}>
      <Wrapper>
        <div className={styled.footer__content}>
          {!isMobile && (
            <div className={styled.informations__position}>
              <h2 className={styled.informations__title}>{position}</h2>
              <p className={styled.informations__company}>{company}</p>
            </div>
          )}
          <CustomLink to={apply} target="_blank" modifier="apply">
            Apply Now
          </CustomLink>
        </div>
      </Wrapper>
    </footer>
  );
};
