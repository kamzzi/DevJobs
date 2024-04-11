import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "Can't using a Theme Context without a Theme Context Provider.."
    );
  }

  return context;
};
