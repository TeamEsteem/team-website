import Landing from "./pages/landing";
import Header from "./pages/nav-bar";
import Timeline from "./pages/timeline";
import {Section1, Section2} from "./pages/landing-sections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { ThemeProvider, Typography } from "@material-ui/core";
import { primaryFont, secondaryFont } from "./components/fonts";
import Sponsors from "./pages/sponsors/sponsors";
import Team from "./pages/team";

function App() {
  return (
    <div className="Body">
      <Router>
        <Switch>
          <Route exact path="/">
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
            <div className="Landing-Section1">
              <ThemeProvider theme={secondaryFont}>
                <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
                  <Section1 />
                </Typography>
              </ThemeProvider>
            </div>
            <div className="Landing-Section2">
              <ThemeProvider theme={secondaryFont}>
                <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
                  <Section2 />
                </Typography>
              </ThemeProvider>
            </div>
          </Route>
          <Route exact path="/sponsors">
            <Sponsors />
          </Route>
           <Route exact path="/team">
            <Team />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
