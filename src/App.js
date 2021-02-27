import Landing from "./pages/landing";
import Header from "./pages/nav-bar";
import Timeline from "./pages/timeline";
import "./App.scss";
import { ThemeProvider, Typography } from "@material-ui/core";
import { primaryFont, secondaryFont } from "./components/fonts";
function App() {
  return (
    <div

      className="Body"
    >
      <div className="Nav-bar">
      <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
        <Header />
        </Typography>
      </div>
      <div className="App-header">
        <ThemeProvider theme={secondaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Landing />  
          </Typography>
        </ThemeProvider>
      </div>
       <div className="Timeline">
        <ThemeProvider theme={secondaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Timeline />
          </Typography>
        </ThemeProvider>
      </div>
    </div> 
  );
}

export default App;
