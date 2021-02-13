import Landing from "./pages/landing";
import "./App.scss";
import { createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import Omnes from "./assets/fonts/Omnes Semibold Regular.ttf";

const primaryFont = createMuiTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

const secondaryFont = createMuiTheme({
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

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0BA360 0%, #3CBA92 100%)",
        padding: "53px",
        display: "flex",
      }}
    >
      <ThemeProvider theme={secondaryFont}>
        <Typography style={{ fontSize: "20px", fontWeight: "500" }}>
          <Landing />
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
