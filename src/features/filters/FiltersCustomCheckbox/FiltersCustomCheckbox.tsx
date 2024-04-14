import { forwardRef } from "react";
import Checkbox from "react-custom-checkbox";

type FiltersCustomCheckboxProps = {
  checked: boolean;
};

export const FiltersCustomCheckbox = forwardRef<
  any,
  FiltersCustomCheckboxProps
>(({ checked }, ref) => {
  return (
    <Checkbox
      icon={<img src="./assets/desktop/icon-check.svg" alt="" />}
      containerStyle={{
        gap: ".5rem",
      }}
      style={{
        backgroundColor: `${
          checked ? "var(--color-primary)" : "var(--color-checkbox)"
        }`,
      }}
      size={24}
      borderRadius={4}
      borderColor="transparent"
      label="Full Time"
      labelStyle={{
        fontSize: "1rem",
        color: "var(--color-input-text)",
        fontWeight: 500,
      }}
      ref={ref}
    />
  );
});
