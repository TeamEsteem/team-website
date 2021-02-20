import Landing from "./pages/landing";
import "./App.scss";
import { ThemeProvider, Typography } from "@material-ui/core";
import { primaryFont, secondaryFont } from "./components/fonts";
function App() {
  return (
    <div
      style={{
        // background: "linear-gradient(90deg, #0BA360 0%, #3CBA92 100%)",
        position: "relative",
      }}
    >
      <div className="App-header">
        <ThemeProvider theme={secondaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Landing />
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
