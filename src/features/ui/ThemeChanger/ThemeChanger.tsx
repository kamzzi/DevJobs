import { useState } from "react";
import styled from "./ThemeChanger.module.css";

export const ThemeChanger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${styled.changer} ${isActive && styled["changer--active"]}`}
    >
      <img src="./assets/desktop/icon-sun.svg" alt="" aria-hidden="true" />
      <div className={styled.changer__action}>
        <button
          className={styled.changer__button}
          onClick={() => setIsActive((prev) => !prev)}
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
