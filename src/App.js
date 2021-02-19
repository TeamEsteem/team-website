import Landing from "./pages/landing";
import "./App.scss";
import { ThemeProvider, Typography } from "@material-ui/core";
import { primaryFont, secondaryFont } from "./components/fonts";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0BA360 0%, #3CBA92 100%)",
        padding: "53px",
        display: "flex",
      }}
    >
      <ThemeProvider theme={primaryFont}>
        <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
          <Landing />
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
