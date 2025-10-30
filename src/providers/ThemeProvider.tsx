import { useColorScheme } from "react-native";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { theme } from "../interface/theme";
import { darkColors } from "../styles/darkColors";
import { lightColors } from "../styles/lightColors";

export interface ThemeProvider {
  theme: theme;
  isDark: boolean;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeProvider | undefined>(undefined);

const ThemeProvider: FC<Props> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === "dark");

  useEffect(() => {
    setIsDark(systemColorScheme === "dark");
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  const theme = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
