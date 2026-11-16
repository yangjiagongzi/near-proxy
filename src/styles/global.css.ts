import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("html,body", {
  margin: 0,
  padding: 0,
  height: "100%",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  color: themeVars.colors.white,
  fontSize: themeVars.fontSizes.extraSmall,
});

globalStyle("#root", {
  height: "100%",
  width: "100%",
  margin: 0,
  background: "#171717",
  whiteSpace: "nowrap",
  WebkitUserSelect: "none",
});

globalStyle("::-webkit-scrollbar", {
  width: "5px",
});

globalStyle("::-webkit-scrollbar-track", {
  width: "5px",
});

globalStyle("::-webkit-scrollbar-thumb", {
  width: "5px",
  borderRadius: "2px",
  backgroundColor: "#555",
});
