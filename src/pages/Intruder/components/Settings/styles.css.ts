import { style, globalStyle } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";
import { themeVars } from "~/styles/theme.css";

const settingParamGroup = style({
  ...fullSizeBox,
  paddingTop: themeVars.spacing.medium,
});

globalStyle(`${settingParamGroup} .title`, {
  fontSize: themeVars.fontSizes.medium,
  padding: `${themeVars.spacing.xsmall} 0`,
});

globalStyle(`${settingParamGroup} .items, ${settingParamGroup} .sub-items`, {
  display: "flex",
  alignItems: "center",
  padding: `${themeVars.spacing.xsmall} 0`,
});

globalStyle(
  `${settingParamGroup} .items .sub-title, ${settingParamGroup} .sub-items .sub-title`,
  {
    width: `calc(${themeVars.spacing.guttersmall} + ${themeVars.spacing.gutter})`,
  },
);

globalStyle(
  `${settingParamGroup} .items .margin-left, ${settingParamGroup} .sub-items .margin-left`,
  {
    marginLeft: themeVars.spacing.small,
  },
);

globalStyle(
  `${settingParamGroup} .items .margin-right, ${settingParamGroup} .sub-items .margin-right`,
  {
    marginRight: themeVars.spacing.small,
  },
);

globalStyle(`${settingParamGroup} .sub-items`, {
  paddingLeft: `calc(${themeVars.spacing.guttersmall} + ${themeVars.spacing.gutter})`,
});

export default {
  settingParamGroup,
};
