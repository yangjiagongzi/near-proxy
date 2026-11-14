import { globalStyle, style } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";
import { themeVars } from "~/styles/theme.css";

const container = style({
  ...fullSizeBox,
  padding: themeVars.spacing.medium,
  position: "relative",
  color: themeVars.colors.textDark,
  userSelect: "none",
});

const startBtn = style({
  position: "absolute",
  top: `calc(${themeVars.spacing.medium} * 2 - ${themeVars.spacing.small})`,
  right: themeVars.spacing.medium,
  zIndex: 10,
});

globalStyle(`${startBtn} button`, {
  marginLeft: themeVars.spacing.medium,
});

const content = style({
  ...fullSizeBox,
  padding: themeVars.spacing.medium,
  overflow: "hidden",
});

export default {
  container,
  startBtn,
  content,
};
