import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Global from "~/components/Global";
import { RoutePaths } from "~/constant/route";
import { ThemeProvider } from "~/context/ThemeContext";
import HomePage from "~/pages/HomePage";
import Settings from "~/pages/Settings";
import NavBar from "./NavBar";
import { content, router } from "./router.css";

const Root: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className={router}>
          <NavBar />
          <div className={content}>
            <Routes>
              <Route path={RoutePaths.Home} element={<HomePage />} />
              <Route path={RoutePaths.Settings} element={<Settings />} />
            </Routes>
          </div>
          <Global />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Root;
