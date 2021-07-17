import React, { Component } from "react";
import "../../index.css";
import Header from "../nav-barV2";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../../components/colors";
import { primaryFont, secondaryFont } from "../../components/fonts";
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import Footer from "../footer";
import FullWidthGrid from "./campGrid";
import "../../App.scss";

export default class Campaign extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
          style={{ backgroundColor: "#009877" }}
        >
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: white, margin: "150px 0 0 0", fontWeight: "bold" }}
              >
                Our Campaigns
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: white, margin: "25px 0 100px 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
               [Text Here] <br></br>
               [Click on cards]
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
              style={{ fill: white }}
            ></path>
          </svg>
        </div>

        <FullWidthGrid />
        <br></br>
        <br></br>
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
            <Typography
              style={{ fontSize: "20px", fontWeight: "lighter" }}
            >
              <Footer />
            </Typography>
          </ThemeProvider>
        </div>
      </div>

    );
  }
}

// export default Sponsors;
