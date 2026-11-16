import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "~/styles/theme.css";

const notificationPop = keyframes({
  from: {
    top: 0,
  },
  to: {
    top: `calc(${themeVars.spacing.gutter} * -1)`,
  },
});

const notification = recipe({
  base: {
    position: "absolute",
    right: `${themeVars.spacing.xlarge}`,
    padding: `${themeVars.spacing.small} ${themeVars.spacing.medium}`,
    borderRadius: 5,
    animation: `${notificationPop} 0.3s ease-out 1`,
    animationFillMode: "forwards",
    zIndex: 100000,
  },
  variants: {
    error: {
      true: {
        background: themeVars.colors.red,
      },
      false: {
        background: themeVars.colors.primary,
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});

export default {
  notification,
};
