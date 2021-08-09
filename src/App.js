import Landing from "./pages/landing";
// import Header from "./pages/nav-barV2";
import Header from "./pages/header";
import Timeline from "./pages/timeline/timeline";
import {
  Section1V2,
  Section2,
  Section3,
  Section3V2,
  Section2V2,
  Section4,
} from "./pages/landing-sections";
import Footer from "./pages/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Box, Button, ThemeProvider, Typography } from "@material-ui/core";
import { primaryFont, secondaryFont } from "./components/fonts";
import Sponsors from "./pages/sponsors/sponsors";
import Team from "./pages/team/teamCard";
import HomeModel from "./pages/about-home/home-modelV2";
import TimelinePage from "./pages/timeline/timeline-page.jsx";
import Contact from "./pages/contact/contact";
import Campaign from "./pages/campaigns/campaign";
import Tessellate from "./pages/campaigns/campaign/tessellate.jsx";
import Navbar from "create-react-nav";
import EsteemLogo from "./assets/images/ESTEEM/Esteem Logo Full White.png";
import { esteemGreen, white } from "./components/colors";
import AutoScroll from "./pages/scroll-to-top";
import ScrollToTop from "react-scroll-to-top";
import Three60 from "./pages/three60Images/three60";
import PressPage from "./pages/press/Press";
import PageNotFound from "./pages/PageNotFound";

function TheHomePage() {
  return (
    <>
      <div className="App-header">
        {/* <video
                  id="bgVideo"
                  autoplay
                  loop
                  poster="./assets/images/landing-background.png"
                >
                  <source
                    src="/images/landing_banner_video.mp4"
                    type="video/mp4"
                  />
                </video> */}
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Landing />
          </Typography>
        </ThemeProvider>
      </div>
      <div className="Landing-Section1">
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Section1V2 />
          </Typography>
        </ThemeProvider>
      </div>
      <div class="sections-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="Timeline">
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Timeline />
          </Typography>
        </ThemeProvider>
      </div>
      <div class="timeline-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="Landing-Section2">
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Section2V2 />
          </Typography>
        </ThemeProvider>
      </div>
      <div class="sections-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="Landing-Section3">
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Section3V2 />
          </Typography>
        </ThemeProvider>
      </div>

      <div class="sections-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ background: "#f5f5f5" }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
            style={{ fill: "#ffffff" }}
          ></path>
        </svg>
      </div>
      <div className="Landing-Section2">
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Section4 />
          </Typography>
        </ThemeProvider>
      </div>

      <div class="footer-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ backgroundColor: "#fff" }}
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="Footer">
        <ThemeProvider theme={primaryFont}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Footer />
          </Typography>
        </ThemeProvider>
      </div>
    </>
  );
}
function App() {
  const links = [
    ["/", "Home", TheHomePage],
    ["/sponsors", "Sponsors", Sponsors],
    ["/team", "Team", Team],
    ["/campaign", "Campaign", Campaign],
    ["/contact", "Contact", Contact],
    ["/three60", "360° images", Three60],
    [
      "/home-model",
      <Button style={{ color: esteemGreen, backgroundColor: white }}>
        Our Home
      </Button>,
      HomeModel,
    ],
  ];
  return (
    <>
      <ScrollToTop smooth color="#fafafa" id="buttonScrollToTop" top={400} />
      <Router>
        <AutoScroll />
        {/* <Navbar logoImg={EsteemLogo} yToggle="true" routes={links} /> */}
        <div className="Body">
          <Switch>
            <Route exact path="/">
              <Header />
              <TheHomePage />
            </Route>
            <Route exact path="/sponsors">
              <Header />
              <Sponsors />
            </Route>
            <Route exact path="/team">
              <Header />
              <Team />
            </Route>
            <Route exact path="/campaign">
              <Header />
              <Campaign />
            </Route>
            <Route exact path="/campaign/tessellate">
              <Header />
              <Tessellate />
              <div class="footer-top">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1100 120"
                  preserveAspectRatio="none"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"
                  ></path>
                </svg>
              </div>
              <div className="Footer">
                <ThemeProvider theme={primaryFont}>
                  <Typography
                    style={{ fontSize: "20px", fontWeight: "lighter" }}
                  >
                    <Footer />
                  </Typography>
                </ThemeProvider>
              </div>
            </Route>
            <Route exact path="/home-model">
              <Header />
              <HomeModel />
            </Route>
            <Route exact path="/timeline">
              <Header />
              <TimelinePage />
            </Route>
            <Route exact path="/three60">
              <Three60 />
            </Route>
            <Route exact path="/press">
              <Header />
              <PressPage />
              <div class="footer-top">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1100 120"
                  preserveAspectRatio="none"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"
                  ></path>
                </svg>
              </div>
              <div className="Footer">
                <ThemeProvider theme={primaryFont}>
                  <Typography
                    style={{ fontSize: "20px", fontWeight: "lighter" }}
                  >
                    <Footer />
                  </Typography>
                </ThemeProvider>
              </div>
            </Route>
            <Route exact path="/contact">
              <Header />
              <Contact />
              <Box m={2} />
              <div class="footer-top">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1100 120"
                  preserveAspectRatio="none"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill"
                  ></path>
                </svg>
              </div>
              <div className="Footer">
                <ThemeProvider theme={primaryFont}>
                  <Typography
                    style={{ fontSize: "20px", fontWeight: "lighter" }}
                  >
                    <Footer />
                  </Typography>
                </ThemeProvider>
              </div>
            </Route>
            <Route exact path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
