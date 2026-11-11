import React, { createContext, useContext, useState } from "react";
import { ThemeMode, themeClassMap } from "~/styles/theme.css";

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  themeClass: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const themeClass = themeClassMap[mode];

  return (
    <ThemeContext.Provider value={{ mode, setMode, themeClass }}>
      <div className={themeClass} style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must inside ThemeProvider");
  return ctx;
};
