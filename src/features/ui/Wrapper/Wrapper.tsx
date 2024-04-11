import { ReactNode } from "react";
import styled from "./Wrapper.module.css";

type WrapperProps = {
  children: ReactNode;
  modifier?: string;
};

export const Wrapper = ({ children, modifier }: WrapperProps) => {
  return (
    <div className={`${styled.wrapper} ${styled[`wrapper--${modifier}`]}`}>
      {children}
    </div>
  );
};
