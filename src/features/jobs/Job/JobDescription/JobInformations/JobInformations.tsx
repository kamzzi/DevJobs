import { Link } from "react-router-dom";
import { JobSchemaType } from "../../JobSchema";
import styled from "./JobInformations.module.css";

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
    company,
    requirements: { content, items },
  },
}: JobInformations) => {
  return (
    <div className={styled.informations}>
      <div className={styled.apply}>
        <div className={styled.informations__position}>
          <div className={styled.informations__general}>
            <p>{postedAt}</p>
            <span className={styled.circle}></span>
            <p>{contract}</p>
          </div>
          <h1 className={styled.informations__title}>{position}</h1>
          <p className={styled.informations__location}>{location}</p>
        </div>
        <Link to={apply} target="_blank" className={styled.link}>
          Apply Now
        </Link>
      </div>
      <p className={styled.description}>{description}</p>

      <h2 className={styled.subtitle}>Requirements</h2>
      <p className={styled.content}>{content}</p>
      <ul className={styled.list}>
        {items.map((item) => (
          <li key={item} className={styled.list__item}>
            <span className={styled.list__circle}></span>
            <span className={styled.list__content}>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className={styled.subtitle}>What you will do</h2>
      <p className={styled.content}>{content}</p>
      <ul className={styled.list}>
        {items.map((item, idx) => (
          <li key={item} className={styled.list__item}>
            <span className={styled.list__index}>{idx + 1}</span>
            <span className={styled.list__content}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
