import { Box, Typography, Grid, Card } from "@material-ui/core";
import React, { Component } from "react";
import SDMEhouse from "./sdmehouse-architecture 1.glb";
import "@google/model-viewer";
import { esteemGreen, grey, lightGreen, white } from "../../components/colors";
import "./homestyles.css";
import Header from "../nav-barV2";
import { ThemeProvider } from "styled-components";
import { primaryFont, secondaryFont } from "../../components/fonts";
class HomeModelV2 extends Component {
  render() {
    return (


      <div style={{ width: "100%" }} onScroll={this.handleScroll}>
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
          style={{ backgroundColor: "#009877" }}
        >
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: white, margin: "150px 0 0 0", fontWeight: "bold" }}
              >
                Our Home
          </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: "center", color: white, margin: "25px 0 100px 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                We are proud to have the support of so many inspirational partners in our journey to World Expo 2021. Below you will see some of the cutting-edge companies and organisations that have worked with us so far.
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
        <div style={{ backgroundColor: white }}>
          <Grid container direction="column">
            <Grid item>
              <ThemeProvider theme={primaryFont}>
                <Typography
                  variant="body1"
                  style={{
                    color: esteemGreen,
                    marginBottom: "15px",
                    textAlign: "center",
                  }}
                >
                  Play with our 3D house!{"{Better text over here!}"}
                </Typography>
                {/* <Box style={{ background: lightGreen, height: "auto" }}> */}
                <model-viewer
                  src={SDMEhouse}
                  camera-controls
                  shadow-intensity="2"
                  // auto-rotate
                  // camera-orbit="180deg 0deg -50m"
                  camera-orbit="0rad 2.748893571891069rad auto"
                  // min-camera-orbit="0rad 1.74 auto"
                  // max-camera-orbit="0rad 3.74 auto"
                  field-of-view="180"
                >
                  <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                  </div>
                  <Card
                    style={{
                      width: "20%",
                      padding: "10px",
                      margin: "10px",
                      background: grey,
                      borderRadius: "20px",
                    }}
                  >
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Card>
                </model-viewer>
                {/* </Box> */}
              </ThemeProvider>
            </Grid>
            <Grid item>
              <Box className="BackgroundWeb"></Box>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HomeModelV2;
