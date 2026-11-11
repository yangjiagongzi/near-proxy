import { style } from "@vanilla-extract/css";

export const globalTop = style({
  width: "100%",
  height: 0,
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 100,
});

export const globalBottom = style({
  width: "100%",
  height: 0,
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 100,
});
