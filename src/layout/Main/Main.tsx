import { ReactNode } from "react";
import styled from "./Main.module.css";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return <main className={styled.main}>{children}</main>;
};
