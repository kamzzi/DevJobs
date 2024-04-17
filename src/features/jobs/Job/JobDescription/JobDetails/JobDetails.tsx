import styled from "./JobDetails.module.css";
import { JobDetailsList } from "./JobDetailsList/JobDetailsList";

type JobDetailsProps = {
  title: string;
  data: {
    content: string;
    items: string[];
  };
  style: string;
};

export const JobDetails = ({
  title,
  data: { content, items },
  style,
}: JobDetailsProps) => {
  return (
    <div>
      <h2 className={styled.subtitle}>{title}</h2>
      <p className={styled.content}>{content}</p>
      <JobDetailsList items={items} style={style} />
    </div>
  );
};
