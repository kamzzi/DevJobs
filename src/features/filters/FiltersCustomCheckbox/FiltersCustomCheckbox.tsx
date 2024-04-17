import { forwardRef } from "react";
import styled from "./FiltersCustomCheckbox.module.css";

type FiltersCustomCheckboxProps = {
  checked: boolean;
};

export const FiltersCustomCheckbox = forwardRef<
  HTMLInputElement,
  FiltersCustomCheckboxProps
>(({ checked, ...rest }, ref) => {
  return (
    <>
      <input
        type="checkbox"
        id="time"
        className={styled.hidden}
        ref={ref}
        {...rest}
      />
      <label htmlFor="time" className={styled.label}>
        <span
          className={`${styled.custom} ${checked && styled["custom--checked"]}`}
        >
          {checked ? (
            <img src="./assets/desktop/icon-check.svg" alt="" />
          ) : null}
        </span>
        <span>Full Time</span>
      </label>
    </>
  );
});
