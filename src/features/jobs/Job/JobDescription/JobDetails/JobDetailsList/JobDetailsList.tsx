import styled from "./JobDetailsList.module.css";

type JobDetailsListProps = {
  items: string[];
  style: string;
};

export const JobDetailsList = ({ items, style }: JobDetailsListProps) => {
  return (
    <ul className={styled.list}>
      {items.map((item, idx) => (
        <li key={item} className={styled.list__item}>
          <span
            className={
              style === "circle" ? styled.list__circle : styled.list__index
            }
          >
            {style === "circle" ? null : idx + 1}
          </span>
          <span className={styled.list__content}>{item}</span>
        </li>
      ))}
    </ul>
  );
};
