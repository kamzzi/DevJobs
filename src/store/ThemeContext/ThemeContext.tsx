import { ReactNode, createContext, useState } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextData = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextData | null>(null);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
