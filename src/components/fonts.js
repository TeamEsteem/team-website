import Omnes from "../assets/fonts/Omnes Semibold Regular.ttf";
import Inter from "../assets/fonts/Inter-VariableFont_slnt,wght.ttf";
import { createMuiTheme } from "@material-ui/core";

export const primaryFont = createMuiTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Inter],
      },
    },
  },
});

export const secondaryFont = createMuiTheme({
  typography: {
    fontFamily: "Omnes Semibold, sans-serif",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Omnes],
      },
    },
  },
});
