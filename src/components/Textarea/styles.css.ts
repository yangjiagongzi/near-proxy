import { style } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const textarea = style({
  width: "100%",
  boxSizing: "border-box",
  padding: themeVars.spacing.medium,
  borderRadius: "10px",
  background: themeVars.colors.secondaryBackground,
  resize: "none",
  color: themeVars.colors.textDark,
  lineHeight: themeVars.fontSizes.large,
  outline: "none",
});

export default {
  textarea,
};
