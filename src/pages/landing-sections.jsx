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

function FormRow() {
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
                style={{ textAlign: "center", color: "#009877" }}
              >
                WHAT <span style={{ color: darkGrey }}>WE DO</span>
              </Typography>
            </ThemeProvider>
            <br></br>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h5"
                style={{ color: "#34af92" }}
              >
                <div className="section-block">
                  <div>
                    We are Heriot Watt University’s official entrant to the Solar Decathlon Middle East 2020 competition, a collegiate contest integrated with the 2020 World Expo in Dubai which is expected to attract an estimated 25 million people.
                    Our goal is to design and build a multifunctional solar powered house in collaboration with industry and academia. Our design ethos emphasises sustainability, and our construction will feature wall-to-wall innovation in our efforts to achieve the most eco-friendly build that can withstand the high temperature, high humidity and dusty conditions present in the middle east.
                    Headquartered in Edinburgh, we are proud to represent the Scottish Construction and Building Services sectors on the international stage with our incorporation of materials and designs from several local sponsors.
                  </div>
                  
                </div>
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item>
            <img className="landing-img" style={{}}
              src="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg"
              height="500px"
            ></img>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
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
          alignItems="baseline"
          spacing={4}
        >
          <Grid class="mission-block">
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: lightGreen }}
              >
                OUR MISSION
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
            <img
              src="https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/ramiz-dedakovic-jerh2nj1xwy-unsplash.jpg"
              height="300px"
              align="centre"
            ></img>
          </Grid>
          <br></br>
          <br></br>
          <Grid>
            <FormRow />
          </Grid>
        </Grid>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export { Section1, Section2 };
