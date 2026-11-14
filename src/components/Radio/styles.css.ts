import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const radio = style({
  display: "flex",
  alignItems: "center",
  color: themeVars.colors.textDark,
  lineHeight: themeVars.spacing.large,
  fontSize: themeVars.fontSizes.extraSmall,
  padding: `0 ${themeVars.spacing.xsmall}`,
});

globalStyle(`${radio} div`, {
  height: themeVars.spacing.large,
  width: themeVars.spacing.large,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: `calc(${themeVars.spacing.large} / 2)`,
});

globalStyle(`${radio} div:hover`, {
  backgroundColor: "rgba(29, 233, 182, 0.3)",
});

globalStyle(`${radio} span`, {
  display: "block",
  height: themeVars.spacing.xsmall,
  width: themeVars.spacing.xsmall,
  borderRadius: `calc(${themeVars.spacing.xsmall} / 2)`,
  background: "none",
  boxShadow: `0 0 0 2px ${themeVars.colors.primaryBackground}, 0 0 0 4px ${themeVars.colors.textLight}`,
});

const active = style({});

globalStyle(`${active} span`, {
  backgroundColor: themeVars.colors.active,
  boxShadow: `0 0 0 2px ${themeVars.colors.primaryBackground}, 0 0 0 4px ${themeVars.colors.active}`,
});

export default {
  radio,
  active,
};
