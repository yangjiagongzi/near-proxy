import { style } from "@vanilla-extract/css";
import { themeVars } from "~/styles/theme.css";

const modal = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: themeVars.colors.transparentBlack,
  zIndex: 10000,
});

const modalContainer = style({
  width: "80%",
  height: "80%",
  display: "flex",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  padding: themeVars.spacing.medium,
  background: themeVars.colors.secondaryBackground,
  borderRadius: "10px",
});

export default {
  modal,
  modalContainer,
};
