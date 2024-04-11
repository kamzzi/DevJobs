import { Logo } from "../../features/ui/Logo/Logo";
import { ThemeChanger } from "../../features/ui/ThemeChanger/ThemeChanger";
import { Wrapper } from "../../features/ui/Wrapper/Wrapper";
import styled from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styled.header}>
      <Wrapper>
        <div className={styled.header__content}>
          <Logo />
          <ThemeChanger />
        </div>
      </Wrapper>
    </header>
  );
};
