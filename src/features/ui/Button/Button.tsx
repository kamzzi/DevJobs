import { ReactNode } from "react";
import styled from "./Button.module.css";

type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  children: ReactNode;
  type?: ButtonType;
  modifier?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  modifier,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styled.button} ${styled[`button--${modifier}`]}`}
      {...rest}
    >
      {children}
    </button>
  );
};
