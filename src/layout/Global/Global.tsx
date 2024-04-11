import { ReactNode } from "react";
import styled from "./Global.module.css";

type GlobalProps = {
  children: ReactNode;
};

export const Global = ({ children }: GlobalProps) => {
  return <div className={styled.global}>{children}</div>;
};
