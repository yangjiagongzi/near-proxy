import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon, { IconName } from "~/components/Icon";
import { RouteConfigs, RoutePaths } from "~/constant/route";
import { navBar, navBarItem, note } from "./router.css";
import { themeVars } from "~/styles/theme.css";

type NavBarItemProps = {
  routePath: Values<typeof RoutePaths>;
  icon: IconName;
  title: string;
};

const NavBarItem: React.FC<NavBarItemProps> = ({
  routePath,
  icon,
  title,
}: NavBarItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active =
    routePath === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(routePath.replace(/\*$/g, ""));

  const iconColor = active
    ? themeVars.colors.background.toString()
    : themeVars.colors.textDark.toString();

  return (
    <div className={navBarItem({ active })} onClick={() => navigate(routePath)}>
      <Icon name={icon} size={"md"} color={iconColor} />
      <div className={note}>{title}</div>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className={navBar}>
      {RouteConfigs.map((r, idx) => {
        if (r.type === "Divider") {
          return (
            <div
              key={`divider-${idx}`}
              style={{ width: "100%", height: "100%", flex: 1 }}
            ></div>
          );
        }
        return (
          <NavBarItem
            key={`route-${idx}`}
            routePath={r.path}
            icon={r.icon}
            title={r.title}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
