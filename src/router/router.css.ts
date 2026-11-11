import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "~/styles/theme.css";

export const router = style({
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
});

export const navBar = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: themeVars.colors.secondaryBackground,
});

export const content = style({
  width: "100%",
  height: "100%",
  flex: "1",
  background: themeVars.colors.primaryBackground,
});

export const navBarItem = recipe({
  base: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  variants: {
    active: {
      true: {
        background: themeVars.colors.active,
      },
      false: {
        background: "none",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const note = style({
  display: "none",
  position: "absolute",
  left: 50,
  whiteSpace: "nowrap",
  fontSize: themeVars.fontSizes.extraExtraSmall,
  padding: 4,
  border: `1px solid ${themeVars.colors.textDark}`,
  zIndex: 100,
  color: themeVars.colors.textDark,
  background: themeVars.colors.primaryBackground,
  selectors: {
    [`${navBarItem.classNames.base}:hover &`]: {
      display: "block",
    },
  },
});
