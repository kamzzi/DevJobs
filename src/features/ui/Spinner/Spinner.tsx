import styled from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styled.container}>
      <span className={styled.loader}></span>
    </div>
  );
};
