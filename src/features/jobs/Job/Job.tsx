import { JobSchemaType } from "./JobSchema";
import styled from "./Job.module.css";
import { Link } from "react-router-dom";

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
    <Link to={`${id}`} className={styled.job__link}>
      <li className={styled.job}>
        <div
          className={styled.job__logo}
          style={{ backgroundColor: logoBackground }}
        >
          <img src={logo} alt={company} />
        </div>
        <div className={styled.job__general}>
          <p>{postedAt}</p>
          <span className={styled.circle}></span>
          <p>{contract}</p>
        </div>
        <h2 className={styled.job__title}>{position}</h2>
        <p className={styled.job__company}>{company}</p>
        <p className={styled.job__location}>{location}</p>
      </li>
    </Link>
  );
};
