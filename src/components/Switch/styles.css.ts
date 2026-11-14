import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const switchWrap = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
});

globalStyle(`${switchWrap} .box`, {
  height: themeVars.spacing.large,
  width: `calc(${themeVars.spacing.large} * 2)`,
  borderRadius: themeVars.spacing.large,
  border: `2px solid ${themeVars.colors.divider}`,
  background: themeVars.colors.primaryBackground,
});

globalStyle(`${switchWrap} .box div`, {
  height: themeVars.spacing.large,
  width: themeVars.spacing.large,
  borderRadius: themeVars.spacing.large,
  background: themeVars.colors.white,
  boxShadow: `0 0 0 2px ${themeVars.colors.divider}`,
  transform: "translateX(0)",
  transition: "all 0.3s linear",
});

const enable = style({});

globalStyle(`${enable} .box`, {
  background: themeVars.colors.active,
});

globalStyle(`${enable} .box div`, {
  transform: `translateX(${themeVars.spacing.large})`,
});

export default {
  switchWrap,
  enable,
};
