import { style } from "@vanilla-extract/css";

const globalTop = style({
  width: "100%",
  height: 0,
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 10000,
});

const globalBottom = style({
  width: "100%",
  height: 0,
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 10000,
});

export default {
  globalTop,
  globalBottom,
};
