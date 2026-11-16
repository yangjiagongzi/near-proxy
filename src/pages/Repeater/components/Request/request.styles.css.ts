import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";
import { fullSizeBox } from "~/styles/common.css";

const content = style({
  ...fullSizeBox,
});

const inputBox = style({
  display: "flex",
});

globalStyle(`${inputBox} .method-select`, {
  borderRadius: "5px 0 0 5px",
});

globalStyle(`${inputBox} .url-input`, {
  flex: 1,
  borderRadius: "0 5px 5px 0",
});

globalStyle(`${inputBox} .curl-parse-btn`, {
  marginLeft: themeVars.spacing.small,
});

const requestContent = style({
  ...fullSizeBox,
  paddingTop: themeVars.spacing.medium,
  overflow: "hidden",
});

globalStyle(`${requestContent} .requestOptions`, {
  ...fullSizeBox,
  overflow: "hidden",
});

const paramsTable = style({
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flex: 1,
  overflow: "hidden",
});

globalStyle(`${paramsTable} table`, {
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  borderCollapse: "separate",
  borderSpacing: 0,
  border: "none",
  display: "flex",
  flexDirection: "column",
});

globalStyle(`${paramsTable} table tbody`, {
  display: "block",
  width: "100%",
  height: "100%",
  overflowY: "auto",
  flex: 1,
});

globalStyle(`${paramsTable} table tbody tr:hover`, {
  background: themeVars.colors.secondaryBackground,
});

globalStyle(`${paramsTable} table tr`, {
  boxSizing: "border-box",
  tableLayout: "fixed",
  display: "table",
  width: "100%",
  borderBottom: `1px solid ${themeVars.colors.divider}`,
});

globalStyle(`${paramsTable} table th`, {
  boxSizing: "border-box",
  fontWeight: 500,
  textAlign: "left",
  fontSize: themeVars.fontSizes.small,
  lineHeight: `calc(${themeVars.fontSizes.medium} * 2)`,
  padding: `0 ${themeVars.spacing.medium}`,
});

globalStyle(`${paramsTable} table td`, {
  boxSizing: "border-box",
  textAlign: "left",
  padding: `0 ${themeVars.spacing.medium}`,
});

globalStyle(
  `${paramsTable} table th:first-child, ${paramsTable} table td:first-child`,
  {
    width: "30%",
  },
);

globalStyle(
  `${paramsTable} table th:last-child, ${paramsTable} table td:last-child`,
  {
    width: "100px",
    boxSizing: "content-box",
    paddingRight: `calc(${themeVars.spacing.medium} * 3)`,
    position: "relative",
  },
);

globalStyle(`${paramsTable} table .del`, {
  position: "absolute",
  top: `calc(${themeVars.fontSizes.small} - ${themeVars.spacing.large} / 2)`,
  right: themeVars.spacing.small,
  height: themeVars.spacing.large,
  width: themeVars.spacing.large,
  borderRadius: `calc(${themeVars.spacing.large} / 2)`,
  visibility: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(`${paramsTable} table .del:hover`, {
  background: themeVars.colors.textUltraLight,
});

globalStyle(`${paramsTable} table tr:hover .del`, {
  visibility: "visible",
});

globalStyle(`${paramsTable} table input`, {
  padding: 0,
  margin: 0,
  background: "none",
  outline: "none",
  border: "none",
  color: themeVars.colors.textDark,
  fontSize: themeVars.fontSizes.extraSmall,
  lineHeight: `calc(${themeVars.fontSizes.small} * 2)`,
  width: "100%",
  flex: 1,
});

const requestBody = style({
  ...fullSizeBox,
  padding: themeVars.spacing.medium,
});

globalStyle(`${requestBody} textarea`, {
  width: "100%",
  height: "100%",
});

const requestParse = style({
  ...fullSizeBox,
});

globalStyle(`${requestParse} .header`, {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingBottom: themeVars.spacing.medium,
});

globalStyle(`${requestParse} .content`, {
  height: "100%",
  flex: 1,
});

globalStyle(`${requestParse} .content textarea`, {
  width: "100%",
  height: "100%",
});

export default {
  content,
  inputBox,
  requestContent,
  paramsTable,
  requestBody,
  requestParse,
};
