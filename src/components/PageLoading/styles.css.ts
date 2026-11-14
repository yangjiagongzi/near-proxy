import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "~/styles/theme.css";

const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const box = style({
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
});

const label = recipe({
  base: {
    fontSize: themeVars.fontSizes.extraExtraSmall,
    lineHeight: themeVars.fontSizes.medium,
    textAlign: "center",
    border: "none",
    background: "none",
    transition: "transform 1s",
    position: "absolute",
  },
  variants: {
    active: {
      true: {
        color: themeVars.colors.active,
        fontWeight: 700,
        borderBottom: `1px solid ${themeVars.colors.active}`,
      },
      false: {
        color: themeVars.colors.textMedium,
        borderBottom: "none",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export default {
  container,
  box,
  label,
};
