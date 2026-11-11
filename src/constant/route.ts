export const RoutePaths = {
  Home: "/",
  Settings: "/settings",
} as const;

export const RouteConfigs = [
  {
    type: "Route",
    title: "主页",
    path: RoutePaths.Home,
    icon: "Home",
  },
  {
    type: "Divider",
  },
  {
    type: "Route",
    title: "设置",
    path: RoutePaths.Settings,
    icon: "Settings",
  },
] as const;
