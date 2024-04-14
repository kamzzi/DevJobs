import { ReactNode } from "react";
import styled from "./Main.module.css";
import { Wrapper } from "../../features/ui/Wrapper/Wrapper";

type MainProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <main className={styled.main}>
      <Wrapper>{children}</Wrapper>
    </main>
  );
};
