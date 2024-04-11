import { ReactNode, createContext, useEffect, useState } from "react";
import { Theme } from "./types";

type ThemeContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextData | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

const userPreferences = () => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const isValidTheme = (theme: string): theme is Theme => {
  return theme === Theme.LIGHT || theme === Theme.DARK;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storagedTheme = localStorage.getItem("theme");
    const prefersUserDarkTheme = userPreferences();

    if (!storagedTheme) {
      return prefersUserDarkTheme ? Theme.DARK : Theme.LIGHT;
    }

    if (isValidTheme(storagedTheme)) {
      return storagedTheme;
    }

    return Theme.LIGHT;
  });

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
