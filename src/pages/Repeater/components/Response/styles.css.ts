import { style, globalStyle } from "@vanilla-extract/css";
import { fullSizeBox } from "~/styles/common.css";

const response = style({
  ...fullSizeBox,
});

globalStyle(`${response} textarea`, {
  width: "100%",
  height: "100%",
});

export default {
  response,
};
