import React, { Component } from "react";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../components/colors";
import { Grid, Typography, ThemeProvider } from "@material-ui/core";
import { primaryFont, secondaryFont } from "../components/fonts";
import "../App.scss";

function FormColumn() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid class="mission-block">
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="h3"
              style={{ textAlign: "center", color: lightGreen }}
            >
              OUR IMPACT
            </Typography>
          </ThemeProvider>
          <br></br>
          <ThemeProvider theme={secondaryFont}>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: white }}
            >
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit, sed do eiusmod tempor <br></br>
              incididunt ut labore et dolore magna aliqua. <br></br>
            </Typography>
          </ThemeProvider>
          <br></br>
        </Grid>
        <br></br>
        <br></br>
        <Grid class="mission-block">
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="h3"
              style={{ textAlign: "center", color: lightGreen }}
            >
              OUR RESEARCH
            </Typography>
          </ThemeProvider>
          <br></br>
          <ThemeProvider theme={secondaryFont}>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: white }}
            >
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit, sed do eiusmod tempor <br></br>
              incididunt ut labore et dolore magna aliqua. <br></br>
            </Typography>
          </ThemeProvider>
          <br></br>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

class Section1 extends Component {
  render() {
    return (
      <div id="xyz">
        <div style={{ margin: "auto" }} id="section1">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item class="wwd-block" id="landing-bottom">
              <ThemeProvider theme={secondaryFont}>
                <Typography
                  variant="h3"
                  style={{ textAlign: "center", color: "#202020" }}
                >
                  Who are <span style={{ color: "#009877" }}>ESTEEM</span>?
                </Typography>
              </ThemeProvider>
              <br></br>
              <ThemeProvider theme={primaryFont}>
                <Typography
                  variant="body1"
                  style={{ fontSize: "1em" }}
                >
                  <div className="section-block">
                    <div className="section-block-text">
                      <p>
                        We are Team ESTEEM from Heriot Watt University. 130
                        students, 5 academic schools, 3 campuses and 1 cohesive
                        vision driving us to build a better world.
                      </p>
                      <br></br>
                      <p>
                        Our members stem from a broad range of academic
                        disciplines – Architectural, Structural, Electrical,
                        Mechanical, Civil, Chemical Engineering; Computer
                        Science, Data Science, Marketing and Business
                        Management; Urban Planning, Construction Project
                        Management.
                      </p>
                      <br></br>
                      <p>
                        We are as diverse as we are creative, and it is drawing
                        from this international pool of passion and talent that
                        drives our success.
                      </p>
                    </div>
                    <img
                      className="landing-img"
                      style={{}}
                      src="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg"
                      height="500px"
                    ></img>
                  </div>
                </Typography>
              </ThemeProvider>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

class Section2 extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item class="wwd-block">
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#202020" }}
              >
                What do <span style={{ color: "#009877" }}>ESTEEM</span> do?
              </Typography>
            </ThemeProvider>
            <br></br>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="body1"
                style={{ color: darkGrey, fontSize: "1em" }}
              >
                <div className="section-block">
                  <img
                    className="landing-img"
                    style={{}}
                    src="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg"
                    height="500px"
                  ></img>
                  <div className="section-block-text">
                    <p>
                      We are Heriot Watt University’s official entrant to the
                      Solar Decathlon Middle East 2020 competition, a collegiate
                      contest integrated with the 2020 World Expo in Dubai which
                      is expected to attract an estimated 25 million people.
                    </p>
                    <br></br>
                    <p>
                      Our goal is to design and build a multifunctional solar
                      powered house in collaboration with industry and academia.
                      Our design ethos emphasises sustainability, and our
                      construction will feature wall-to-wall innovation in our
                      efforts to achieve the most eco-friendly build that can
                      withstand the high temperature, high humidity and dusty
                      conditions present in the Middle East.
                    </p>
                    <br></br>
                    <p>
                      Headquartered in Edinburgh, we are proud to represent the
                      Scottish Construction and Building Services sectors on the
                      international stage with our incorporation of materials
                      and designs from several local sponsors.
                    </p>
                  </div>
                </div>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>
    );
  }
}

class Section3 extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }} id="section3">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item class="wwd-block" id="landing-bottom">
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#202020" }}
              >
                <span style={{ color: "#009877" }}>Our</span> Mission

                </Typography>
            </ThemeProvider>
            <br></br>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="body1"
                style={{ fontSize: "1em" }}
              >
                <div className="section-block">
                  <div className="section-block-text">
                    <p>
                      At Team ESTEEM we draw from a range of academic backgrounds and our members aspire to apply their years of classroom learning to an interdisciplinary project that will change the world. We are the generation that will live to see the consequences of climate change. Motivated, eager and ready to act, each of us is committed to bringing together science, technology, architecture and innovative thinking to develop ourselves as professionals and bring about positive ecological change.
                </p>
                    <br></br>
                    <p>
                      With the SDME, we are ready to take on the biggest challenge of all – becoming thought leaders in the green recovery and building the better, greener world of tomorrow.
                </p>
                  </div>
                  <img
                    className="landing-img"
                    style={{}}
                    src="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg"
                    height="500px"
                  ></img>
                </div>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export { Section1, Section2, Section3 };
