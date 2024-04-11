import styled from "./ThemeChanger.module.css";
import { useTheme } from "../../../store/ThemeContext/useTheme";
import { Theme } from "../../../store/ThemeContext/types";

export const ThemeChanger = () => {
  const { theme, toggleTheme } = useTheme();

  const isActive = theme === Theme.DARK;

  return (
    <div
      className={`${styled.changer} ${isActive && styled["changer--active"]}`}
    >
      <img src="./assets/desktop/icon-sun.svg" alt="" aria-hidden="true" />
      <div className={styled.changer__action}>
        <button
          onClick={toggleTheme}
          className={styled.changer__button}
          title="Toggle light & dark theme"
          aria-label="auto"
          aria-live="polite"
        >
          <span className={styled.changer__circle}></span>
        </button>
      </div>
      <img src="./assets/desktop/icon-moon.svg" alt="" aria-hidden="true" />
    </div>
  );
};
