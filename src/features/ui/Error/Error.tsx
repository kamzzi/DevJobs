import styled from "./Error.module.css";

type ErrorProps = {
  error: string;
};

export const Error = ({ error }: ErrorProps) => {
  return (
    <div className={styled.error}>
      <p>{error}</p>
    </div>
  );
};
