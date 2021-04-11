import Landing from "./pages/landing";
import Header from "./pages/nav-bar";
import Timeline from "./pages/timeline";
import { Section1, Section2 } from "./pages/landing-sections";
import Footer from "./pages/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { ThemeProvider, Typography } from "@material-ui/core";
import { primaryFont, secondaryFont } from "./components/fonts";
import Sponsors from "./pages/sponsors/sponsors";
import Team from "./pages/team/team";

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

            {/* 
<div class="custom-shape-divider-top-1617567759" style={{ backgroundColor: "black"}}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
    </svg>
</div> */}
            <div className="Footer">
              <ThemeProvider theme={secondaryFont}>
                <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
                  <Footer />
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
