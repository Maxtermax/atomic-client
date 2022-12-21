import { useContext } from 'react';
import ThemeContext from "@contexts/Theme";

export const useLayout = () => {
  const { colors } = useContext(ThemeContext);
  return colors;
};
