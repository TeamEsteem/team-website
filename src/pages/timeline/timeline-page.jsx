import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import {
  esteemGreen,
  white,
  grey,
  black,
  lightGreen,
  darkGrey,
} from "../../components/colors";
// import "./styles.css";
// import { members } from "./members";
import Header from "../../pages/nav-barV2";
import { primaryFont, secondaryFont } from "../../components/fonts";
import { ThemeProvider } from "styled-components";
import { TimelineElement } from "../../components/singleTimeline";
import { VerticalTimeline } from "react-vertical-timeline-component";
class TimelinePage extends Component {
  render() {
    return (
      <Box style={{ background: grey }}>
        <div>
          <Typography style={{ fontSize: "20px" }}>
            <Header />
          </Typography>
        </div>
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
          style={{ backgroundColor: esteemGreen }}
        >
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "150px 0 0 0",
                  fontWeight: "bold",
                }}
              >
                Timeline of The Esteem Project
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 100px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                Lorem ipsum text over hereLorem ipsum text over hereLorem ipsum
                text over hereLorem ipsum text over hereLorem ipsum text over
                hereLorem ipsum text over hereLorem ipsum text over hereLorem
                ipsum text over here
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <div class="landing-bottom" style={{ backgroundColor: esteemGreen }}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              style={{ fill: grey }}
            ></path>
          </svg>
        </div>
        {/* all the timeline elements come underneath */}
        <VerticalTimeline>
          <TimelineElement
            title="Building the CLT panels at CSIC"
            subtitle="April 2021"
            desc="Thanks to CSIC, we are building the cross-laminated timber (CLT) panels locally ourselves in Glasgow!"
            tag="secondary"
          ></TimelineElement>
          <TimelineElement
            title="Building the Prototype in Edinburgh"
            subtitle="June 2021"
            desc="The house will be built in Edinburgh first in order to test our prototype, after which it will be disassembled and shipped to Dubai!"
            tag="secondary"
          ></TimelineElement>

          <TimelineElement
            title="Team ESTEEM at the World Expo"
            subtitle="October 2021"
            desc="The final stage of this project! We'll be showcasing everything that we've been working on at the Dubai World Expo."
            tag="secondary"
          ></TimelineElement>
        </VerticalTimeline>
      </Box>
    );
  }
}

export default TimelinePage;
