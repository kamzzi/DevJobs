import styled from "./JobContract.module.css";

type JobContractProps = {
  postedAt: string;
  contract: string;
};

export const JobContract = ({ postedAt, contract }: JobContractProps) => {
  return (
    <div className={styled.job__general}>
      <p>{postedAt}</p>
      <span className={styled.circle}></span>
      <p>{contract}</p>
    </div>
  );
};
