import { style, globalStyle } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";
import { themeVars } from "~/styles/theme.css";

const requestContainer = style({
  ...fullSizeBox,
});

globalStyle(`${requestContainer} .buttonGroup`, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingBottom: themeVars.spacing.small,
});

globalStyle(`${requestContainer} .buttonGroup button`, {
  marginLeft: themeVars.spacing.small,
});

globalStyle(`${requestContainer} #requestContent`, {
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  color: themeVars.colors.textDark,
  lineHeight: themeVars.fontSizes.large,
  position: "relative",
});

globalStyle(`${requestContainer} #requestContent textarea`, {
  width: "100%",
  height: "100%",
});

globalStyle(`${requestContainer} #requestContent span`, {
  color: themeVars.colors.active,
  background: themeVars.colors.textUltraLight,
  borderRadius: themeVars.spacing.xxsmall,
});

export default {
  requestContainer,
};
