import styled from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styled.container} data-testid="spinner">
      <span className={styled.loader}></span>
    </div>
  );
};
