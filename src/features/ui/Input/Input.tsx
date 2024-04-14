import { forwardRef } from "react";
import styled from "./Input.module.css";

type InputProps = {
  placeholder: string;
  id: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, id }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={styled.input}
        name={id}
        id={id}
      />
    );
  }
);
