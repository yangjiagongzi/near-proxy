import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const fadeLoop = keyframes({
  "0%": { opacity: 0 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

globalStyle(`${container} img`, {
  width: themeVars.spacing.xsWidth,
  height: themeVars.spacing.xsWidth,
  animation: `${fadeLoop} 1s ease-in-out infinite`,
});

export default {
  container,
};
