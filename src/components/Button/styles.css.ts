import { style } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const button = style({
  color: themeVars.colors.background,
  fontSize: themeVars.fontSizes.extraSmall,
  lineHeight: themeVars.fontSizes.small,
  padding: `${themeVars.spacing.small} ${themeVars.spacing.medium}`,
  cursor: "pointer",
  background: themeVars.colors.active,
  borderRadius: "5px",
  border: "none",

  selectors: {
    [`&:hover`]: {
      opacity: 0.7,
    },
    [`&:active`]: {
      opacity: 0.7,
    },
  },
});

export default {
  button,
};
