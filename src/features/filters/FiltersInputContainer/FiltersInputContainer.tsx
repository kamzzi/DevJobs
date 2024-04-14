import { ReactNode } from "react";
import styled from "./FiltersInput.module.css";

type FilterInputIds = "location" | "title";

type FiltersInputContainerProps = {
  id: FilterInputIds;
  icon: string;
  modifier?: string;
  children: ReactNode;
};

export const FiltersInputContainer = ({
  id,
  icon,
  modifier,
  children,
}: FiltersInputContainerProps) => {
  return (
    <div
      className={`${styled.filters__item} ${
        styled[`filters__item--${modifier}`]
      }`}
    >
      <label htmlFor={id} className={styled["filters__label-container"]}>
        <img src={`./assets/desktop/icon-${icon}.svg`} alt="" />
      </label>
      {children}
    </div>
  );
};
