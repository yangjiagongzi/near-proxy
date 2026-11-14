import { style, keyframes, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const ripple = keyframes({
  from: {
    width: "0px",
    height: "0px",
    opacity: 1,
  },
  to: {
    width: "100px",
    height: "100px",
    opacity: 0,
  },
});

const tabList = style({
  width: "100%",
  display: "flex",
  borderBottom: `1px solid ${themeVars.colors.divider}`,
  position: "relative",
  overflowX: "auto",
  overflowY: "hidden",
});

const tabItem = style({
  position: "relative",
});

globalStyle(`${tabItem} .text`, {
  color: themeVars.colors.textMedium,
  fontSize: themeVars.fontSizes.small,
  lineHeight: themeVars.fontSizes.small,
  padding: themeVars.spacing.medium,
  cursor: "pointer",
  zIndex: 2,
  position: "relative",
});

globalStyle(`${tabItem} .click-style`, {
  background: themeVars.colors.activeOpacity,
  borderRadius: "50%",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  zIndex: 1,
  visibility: "hidden",
  animationFillMode: "forwards",
});

const smallTabItem = style({});
globalStyle(`${smallTabItem} .text`, {
  fontSize: themeVars.fontSizes.extraSmall,
  lineHeight: themeVars.fontSizes.extraSmall,
});

const activeTabItem = style({});
globalStyle(`${activeTabItem} .text`, {
  color: themeVars.colors.active,
});

const activeClickStyle = style({
  // @ts-expect-error
  visibility: "visible !important",
  animation: `${ripple} 0.5s ease-out`,
});

export const activeBar = style({
  position: "absolute",
  bottom: 0,
  height: themeVars.spacing.xxsmall,
  background: themeVars.colors.active,
  transition: "all 0.3s linear",
});

export default {
  tabList,
  tabItem,
  smallTabItem,
  activeTabItem,
  activeClickStyle,
  activeBar,
};
