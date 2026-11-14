import { style, globalStyle } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";
import { themeVars } from "~/styles/theme.css";

const payloadContainer = style({
  ...fullSizeBox,
  marginTop: `calc(${themeVars.spacing.medium} * -1)`,
});

const payload = style({
  ...fullSizeBox,
  overflow: "hidden",
  paddingTop: themeVars.spacing.medium,
});

const dictionaryInput = style({
  ...fullSizeBox,
  padding: `${themeVars.spacing.medium} 0`,
  flexDirection: "row",
  overflow: "hidden",
  position: "relative",
});

globalStyle(`${dictionaryInput} textarea`, {
  width: "100%",
  height: "100%",
});

globalStyle(`${dictionaryInput} .totalLength`, {
  position: "absolute",
  bottom: `calc(${themeVars.spacing.medium} + ${themeVars.spacing.small})`,
  right: themeVars.spacing.small,
  padding: `${themeVars.spacing.xxsmall} ${themeVars.spacing.small}`,
  background: themeVars.colors.secondaryBackground,
  borderRadius: 5,
  border: "none",
});

globalStyle(`${dictionaryInput} .buttonContainer`, {
  position: "absolute",
  top: `calc(${themeVars.spacing.medium} + ${themeVars.spacing.small})`,
  right: themeVars.spacing.small,
});

globalStyle(`${dictionaryInput} .buttonContainer button`, {
  margin: `0 ${themeVars.spacing.xxsmall}`,
});

const dictionarySelect = style({
  ...fullSizeBox,
  overflow: "hidden",
});

globalStyle(`${dictionarySelect} ul`, {
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "scroll",
  margin: 0,
  padding: 0,
});

const dictionarySelectItem = style({
  width: "100%",
  boxSizing: "border-box",
  flex: 1,
  padding: themeVars.spacing.xsmall,
  margin: 2,
  background: themeVars.colors.primaryBackground,
  listStyle: "none",
  color: themeVars.colors.textDark,
});

globalStyle(`${dictionarySelectItem}:hover`, {
  background: themeVars.colors.textUltraLight,
});

globalStyle(`${dictionarySelectItem}.active`, {
  background: themeVars.colors.textUltraLight,
});

const dictionaryList = style({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
});

globalStyle(`${dictionaryList} ul`, {
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  overflowY: "scroll",
  margin: 0,
  padding: 0,
});

globalStyle(`${dictionaryList} .totalLength`, {
  position: "absolute",
  bottom: themeVars.spacing.small,
  right: themeVars.spacing.small,
  padding: `${themeVars.spacing.xxsmall} ${themeVars.spacing.small}`,
  background: themeVars.colors.secondaryBackground,
  borderRadius: 5,
  border: "none",
});

globalStyle(`${dictionaryList} .buttonContainer`, {
  position: "absolute",
  top: themeVars.spacing.small,
  right: themeVars.spacing.small,
});

globalStyle(`${dictionaryList} .buttonContainer button`, {
  margin: `0 ${themeVars.spacing.xxsmall}`,
});

const dictionaryListItem = style({
  width: "100%",
  boxSizing: "border-box",
  flex: 1,
  padding: themeVars.spacing.xsmall,
  margin: 2,
  background: themeVars.colors.primaryBackground,
  listStyle: "none",
  color: themeVars.colors.textDark,
});

const payloadContent = style({
  ...fullSizeBox,
  padding: themeVars.spacing.medium,
  flexDirection: "row",
  overflow: "hidden",
});

const resultListContainer = style({
  ...fullSizeBox,
  padding: themeVars.spacing.medium,
  borderRadius: 10,
  background: themeVars.colors.secondaryBackground,
});

const generateBruteForcerOptionContainer = style({
  ...fullSizeBox,
  width: 380,
  marginRight: themeVars.spacing.medium,
});

const generateBruteForcerParamGroup = style({
  display: "flex",
  alignItems: "center",
  padding: `${themeVars.spacing.xsmall} 0`,
});

globalStyle(`${generateBruteForcerParamGroup} .title`, {
  width: 75,
  flex: "0 0 auto",
  color: themeVars.colors.textDark,
});

globalStyle(`${generateBruteForcerParamGroup} .items`, {
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
});

const generateDateOptionContainer = style({
  ...fullSizeBox,
  width: 380,
  marginRight: themeVars.spacing.medium,
});

const generateDateParamGroup = style({
  display: "flex",
  alignItems: "center",
  padding: `${themeVars.spacing.xsmall} 0`,
});

globalStyle(`${generateDateParamGroup} .title`, {
  width: 125,
  flex: "0 0 auto",
  color: themeVars.colors.textDark,
});

globalStyle(`${generateDateParamGroup} .items`, {
  flex: 1,
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

globalStyle(`${generateDateParamGroup} .items .fix-width`, {
  width: themeVars.spacing.gutter,
  margin: `0 ${themeVars.spacing.medium}`,
});

globalStyle(`${generateDateParamGroup} .items .fix-width:first-child`, {
  marginLeft: 0,
});

const generateDateNotices = style({
  padding: `${themeVars.spacing.medium} 0`,
});

globalStyle(`${generateDateNotices} .notice`, {
  color: themeVars.colors.textMedium,
  fontWeight: 700,
  backgroundColor: themeVars.colors.textUltraLight,
  padding: "1px 3px",
  margin: "0 5px",
  borderRadius: 3,
});

globalStyle(`${generateDateNotices} .notice:first-of-type`, {
  marginLeft: 20,
});

const generateDirectoryTraversalOptionContainer = style({
  ...fullSizeBox,
  width: 380,
  overflowY: "auto",
  overflowX: "hidden",
  marginRight: themeVars.spacing.medium,
});

const generateDirectoryTraversalParamGroup = style({
  display: "flex",
  alignItems: "center",
  padding: `${themeVars.spacing.xsmall} 0`,
});

globalStyle(`${generateDirectoryTraversalParamGroup} .title`, {
  width: 140,
  flex: "0 0 auto",
  color: themeVars.colors.textDark,
});

globalStyle(`${generateDirectoryTraversalParamGroup} .items`, {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
});

globalStyle(`${generateDirectoryTraversalParamGroup} .itemGroup`, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: `${themeVars.spacing.xsmall} 0`,
});

const generateNumberOptionContainer = style({
  ...fullSizeBox,
  width: 380,
  overflowY: "auto",
  marginRight: themeVars.spacing.medium,
});

const generateNumberParamGroup = style({
  display: "flex",
  alignItems: "center",
  padding: `${themeVars.spacing.xsmall} 0`,
});

globalStyle(`${generateNumberParamGroup} .title`, {
  width: 125,
  flex: "0 0 auto",
  color: themeVars.colors.textDark,
});

globalStyle(`${generateNumberParamGroup} .items`, {
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
});

globalStyle(`${generateNumberParamGroup} .items input:disabled`, {
  color: themeVars.colors.textUltraLight,
});

export default {
  payloadContainer,
  payload,
  dictionaryInput,
  dictionarySelect,
  dictionarySelectItem,
  dictionaryList,
  dictionaryListItem,
  payloadContent,
  resultListContainer,
  generateBruteForcerOptionContainer,
  generateBruteForcerParamGroup,
  generateDateOptionContainer,
  generateDateParamGroup,
  generateDateNotices,
  generateDirectoryTraversalOptionContainer,
  generateDirectoryTraversalParamGroup,
  generateNumberOptionContainer,
  generateNumberParamGroup,
};
