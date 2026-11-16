import { setTheme } from "@tauri-apps/api/app";
import { getCurrentWindow } from "@tauri-apps/api/window";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLazyLoadQuery } from "react-relay";
import { ThemeContextQuery as TThemeContextQuery } from "~/__generated__/ThemeContextQuery.graphql";
import { Theme } from "~/constant/app";
import { themeClassMap } from "~/styles/theme.css";
import { ThemeContextQuery } from "./ThemeContextQuery";

interface ThemeContextType {
  mode: Values<typeof Theme>;
  themeClass: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { appConfig } = useLazyLoadQuery<TThemeContextQuery>(
    ThemeContextQuery,
    {},
    { fetchPolicy: "store-and-network" },
  );
  const [systemTheme, setSystemTheme] = useState<Values<typeof Theme> | null>(
    null,
  );

  const mode = useMemo(() => {
    if (appConfig.themeMode === "light" || appConfig.themeMode === "dark") {
      return appConfig.themeMode;
    }
    if (systemTheme) {
      return systemTheme;
    }
    return Theme.DARK;
  }, [appConfig.themeMode, systemTheme]);

  useEffect(() => {
    let unlisten: (() => void) | undefined;
    const win = getCurrentWindow();

    const refresh = async () => {
      const t = await win.theme();
      setSystemTheme(t);
    };

    refresh();

    win
      .onThemeChanged(({ payload }) => {
        setTheme(payload ?? "light");
      })
      .then((u) => {
        unlisten = u;
      });

    return () => {
      unlisten?.();
    };
  }, []);

  const themeClass = themeClassMap[mode];

  return (
    <ThemeContext.Provider value={{ mode, themeClass }}>
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
