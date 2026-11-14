import { style, globalStyle } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";
import { themeVars } from "~/styles/theme.css";

const responseContainer = style({
  ...fullSizeBox,
  marginTop: `calc(${themeVars.spacing.medium} * -1)`,
  paddingTop: themeVars.spacing.medium,
  flexDirection: "row",
});

globalStyle(`${responseContainer} .responseList`, {
  ...fullSizeBox,
  padding: themeVars.spacing.medium,
  borderRadius: 10,
  background: themeVars.colors.secondaryBackground,
  position: "relative",
});

globalStyle(`${responseContainer} .responseList .inputBox`, {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  marginBottom: themeVars.spacing.medium,
});

globalStyle(`${responseContainer} .responseList .inputBox .method-select`, {
  borderRadius: "5px 0 0 5px",
});

globalStyle(
  `${responseContainer} .responseList .inputBox .method-select .title`,
  {
    background: themeVars.colors.secondaryBackground,
  },
);

globalStyle(`${responseContainer} .responseList .inputBox .filterSearch`, {
  flex: 1,
});

globalStyle(`${responseContainer} .responseList ul`, {
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "scroll",
  margin: 0,
  padding: 0,
});

globalStyle(`${responseContainer} .responseList .resultItem`, {
  width: "100%",
  boxSizing: "border-box",
  flex: 1,
  padding: themeVars.spacing.xsmall,
  margin: 2,
  background: themeVars.colors.primaryBackground,
  listStyle: "none",
  color: themeVars.colors.textDark,
});

globalStyle(`${responseContainer} .responseList .resultItem:hover`, {
  background: themeVars.colors.secondaryBackground,
});

globalStyle(`${responseContainer} .responseList .resultItem.active`, {
  background: themeVars.colors.textUltraLight,
});

globalStyle(`${responseContainer} .responseList .resultItem span`, {
  color: "transparent !important",
  fontWeight: 600,
  margin: `0 ${themeVars.spacing.xxsmall}`,
  position: "relative",
});

globalStyle(`${responseContainer} .responseList .resultItem span b`, {
  color: `${themeVars.colors.textDark} !important`,
  position: "absolute",
  top: 0,
  left: 0,
});

globalStyle(`${responseContainer} .responseList .resultItem.error`, {
  color: themeVars.colors.red,
});

globalStyle(`${responseContainer} .responseList .resultItem.match`, {
  background: themeVars.colors.yellow,
});

globalStyle(`${responseContainer} .responseList .totalLength`, {
  position: "absolute",
  bottom: themeVars.spacing.small,
  right: themeVars.spacing.small,
  padding: `${themeVars.spacing.xxsmall} ${themeVars.spacing.small}`,
  background: themeVars.colors.secondaryBackground,
  borderRadius: 5,
  border: "none",
});

globalStyle(`${responseContainer} .responseDetail`, {
  width: "70%",
  height: "100%",
  display: "flex",
  flex: "0 0 auto",
});

globalStyle(`${responseContainer} .responseDetail textarea`, {
  marginLeft: themeVars.spacing.medium,
});

export default {
  responseContainer,
};
