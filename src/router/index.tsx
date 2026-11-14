import React from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Global from "~/components/Global";
import { RoutePaths } from "~/constant/route";
import { ThemeProvider } from "~/context/ThemeContext";
import Intruder from "~/pages/Intruder";
import Proxy from "~/pages/Proxy";
import Repeater from "~/pages/Repeater";
import Settings from "~/pages/Settings";
import NavBar from "./NavBar";
import styles from "./router.css";

const Layout = () => {
  return (
    <div className={styles.router}>
      <NavBar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Global />
    </div>
  );
};

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: RoutePaths.Proxy, element: <Proxy /> },
      { path: RoutePaths.Repeater, element: <Repeater /> },
      { path: RoutePaths.Intruder, element: <Intruder /> },
      Settings,
    ],
  },
]);

const Root: React.FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default Root;
