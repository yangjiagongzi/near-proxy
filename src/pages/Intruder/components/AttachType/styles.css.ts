import { style, globalStyle } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";
import { themeVars } from "~/styles/theme.css";

const introduceContainer = style({
  ...fullSizeBox,
  paddingTop: themeVars.spacing.medium,
});

globalStyle(`${introduceContainer} .inputBox`, {
  display: "flex",
});

globalStyle(`${introduceContainer} .inputBox .method-select`, {
  borderRadius: "5px 0 0 5px",
});

globalStyle(`${introduceContainer} .inputBox .url-input`, {
  flex: 1,
  borderRadius: "0 5px 5px 0",
});

globalStyle(`${introduceContainer} .inputBox .curl-parse-btn`, {
  marginLeft: themeVars.spacing.small,
});

globalStyle(`${introduceContainer} .introduce`, {
  borderTop: `1px solid ${themeVars.colors.divider}`,
  marginTop: themeVars.spacing.xlarge,
  paddingTop: themeVars.spacing.medium,
  fontSize: themeVars.fontSizes.small,
  overflowY: "auto",
});

globalStyle(`${introduceContainer} .introduce span`, {
  color: themeVars.colors.activeOpacity,
  fontWeight: 700,
  padding: `0 ${themeVars.spacing.xxsmall}`,
});

globalStyle(`${introduceContainer} .introduce span.normal`, {
  color: themeVars.colors.textDark,
  fontWeight: "normal",
  padding: 0,
});

globalStyle(`${introduceContainer} .introduce .text`, {
  fontSize: themeVars.fontSizes.medium,
  marginBottom: themeVars.spacing.medium,
  whiteSpace: "pre-wrap",
});

globalStyle(
  `${introduceContainer} .introduce .example-payload, ${introduceContainer} .introduce .example-flag`,
  {
    fontSize: themeVars.fontSizes.small,
    lineHeight: `calc(${themeVars.fontSizes.small} * 2)`,
  },
);

globalStyle(`${introduceContainer} .introduce table`, {
  marginTop: themeVars.spacing.small,
  width: themeVars.spacing.xxlWidth,
  borderCollapse: "separate",
  borderSpacing: 0,
  borderBottom: "1px solid rgb(81, 81, 81)",
});

globalStyle(`${introduceContainer} .introduce table tr`, {
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  outline: 0,
});

globalStyle(`${introduceContainer} .introduce table th`, {
  fontWeight: 500,
  borderBottom: "1px solid rgb(81, 81, 81)",
  textAlign: "left",
  lineHeight: `calc(${themeVars.fontSizes.small} * 2)`,
  padding: `0 ${themeVars.spacing.medium}`,
  background: themeVars.colors.secondaryBackground,
});

globalStyle(`${introduceContainer} .introduce table td`, {
  textAlign: "left",
  lineHeight: `calc(${themeVars.fontSizes.small} * 2)`,
  padding: `0 ${themeVars.spacing.medium}`,
});

export default {
  introduceContainer,
};
