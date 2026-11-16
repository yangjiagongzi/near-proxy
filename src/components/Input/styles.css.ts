import { style, keyframes, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const inputShake = keyframes({
  "0%": { transform: "translateX(0px)" },
  "25%": { transform: "translateX(5px)" },
  "50%": { transform: "translateX(-5px)" },
  "75%": { transform: "translateX(5px)" },
  "100%": { transform: "translateX(0px)" },
});

const input = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: themeVars.spacing.medium,
  borderRadius: "5px",
  outline: "none",
  position: "relative",
  boxSizing: "border-box",
  border: `1px solid ${themeVars.colors.divider}`,
});

globalStyle(`${input} input`, {
  lineHeight: themeVars.fontSizes.small,
  fontSize: themeVars.fontSizes.small,
  color: themeVars.colors.textDark,
  background: "none",
  outline: "none",
  border: "none",
  width: "100%",
  flex: 1,
});

globalStyle(`${input} .title`, {
  lineHeight: themeVars.fontSizes.extraExtraSmall,
  fontSize: themeVars.fontSizes.extraExtraSmall,
  padding: `0 ${themeVars.spacing.xxsmall}`,
  position: "absolute",
  top: `calc(${themeVars.fontSizes.extraExtraSmall} / 2 * -1)`,
  left: themeVars.spacing.medium,
  background: themeVars.colors.primaryBackground,
});

globalStyle(`${input} .layout-placeholder`, {
  height: 0,
  overflow: "hidden",
});

const error = style({
  border: `1px solid ${themeVars.colors.red}`,
  animation: `${inputShake} 0.3s ease-out 1`,
});
globalStyle(`${error} .title`, {
  color: themeVars.colors.red,
});

const active = style({
  border: `1px solid ${themeVars.colors.active}`,
});
globalStyle(`${active} .title`, {
  color: themeVars.colors.active,
});

export default {
  input,
  error,
  active,
};
