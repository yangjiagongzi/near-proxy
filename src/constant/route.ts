export const RoutePaths = {
  Proxy: "/",
  Repeater: "/repeater",
  Intruder: "/intruder",
  Settings: "/settings",
} as const;

export const RouteConfigs = [
  {
    type: "Route",
    title: "代理",
    path: RoutePaths.Proxy,
    icon: "Proxy",
  },
  {
    type: "Route",
    title: "重放",
    path: RoutePaths.Repeater,
    icon: "Repeater",
  },
  {
    type: "Route",
    title: "爆破",
    path: RoutePaths.Intruder,
    icon: "Intruder",
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
