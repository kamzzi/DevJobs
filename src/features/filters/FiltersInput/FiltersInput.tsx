import styled from "./FiltersInput.module.css";

type FilterInputIds = "location" | "title";

type FiltersInputProps = {
  id: FilterInputIds;
  placeholder: string;
  icon: string;
  modifier?: string;
};

export const FiltersInput = ({
  id,
  placeholder,
  icon,
  modifier,
}: FiltersInputProps) => {
  return (
    <div
      className={`${styled.filters__item} ${
        styled[`filters__item--${modifier}`]
      }`}
    >
      <label htmlFor={id} className={styled["filters__label-container"]}>
        <img src={`./assets/desktop/icon-${icon}.svg`} alt="" />
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={styled.filters__input}
        id={id}
      />
    </div>
  );
};
