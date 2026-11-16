import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const selectBox = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  lineHeight: themeVars.fontSizes.small,
  fontSize: themeVars.fontSizes.small,
  padding: themeVars.spacing.medium,
  color: themeVars.colors.textDark,
  borderRadius: "5px",
  border: `1px solid ${themeVars.colors.divider}`,
  outline: "none",
  position: "relative",
  boxSizing: "border-box",
});

globalStyle(`${selectBox} .title`, {
  color: themeVars.colors.textLight,
  lineHeight: themeVars.fontSizes.extraExtraSmall,
  fontSize: themeVars.fontSizes.extraExtraSmall,
  padding: `0 ${themeVars.spacing.xxsmall}`,
  position: "absolute",
  top: `calc(${themeVars.fontSizes.extraExtraSmall} / 2 * -1)`,
  left: themeVars.spacing.medium,
  background: themeVars.colors.primaryBackground,
});

globalStyle(`${selectBox} .layout-placeholder`, {
  height: 0,
  overflow: "hidden",
});

const activeSelectBox = style({
  border: `1px solid ${themeVars.colors.active}`,
});
globalStyle(`${activeSelectBox} .title`, {
  color: themeVars.colors.active,
});

const icon = style({
  marginLeft: themeVars.spacing.medium,
  transition: "all 0.3s linear",
  transform: "rotate(0deg)",
});

const activeIcon = style({
  transform: "rotate(180deg)",
});

const selectList = style({
  width: "100%",
  boxSizing: "border-box",
  position: "absolute",
  left: 0,
  zIndex: 10,
  background: themeVars.colors.secondaryBackground,
  padding: `${themeVars.spacing.xsmall} 0`,
  borderRadius: "5px",
  boxShadow: themeVars.shadow,
});

globalStyle(`${selectList} .selectItem`, {
  padding: `${themeVars.spacing.small} ${themeVars.spacing.medium}`,
});

globalStyle(`${selectList} .selectItem:hover`, {
  background: themeVars.colors.textUltraLight,
});

globalStyle(`${selectList} .selectItem.active`, {
  background: themeVars.colors.activeOpacity,
});

export default {
  selectBox,
  activeSelectBox,
  icon,
  activeIcon,
  selectList,
};
