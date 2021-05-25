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
      <>
        <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
          <Header />
        </Typography>
        <div style={{ backgroundColor: grey, paddingTop: "80px" }}>
          <Grid container direction="column">
            <Grid item>
              <ThemeProvider theme={primaryFont}>
                <Typography
                  variant="h3"
                  style={{
                    color: esteemGreen,
                    margin: "15px",
                    textAlign: "center",
                    fontStyle: "normal",
                    fontWeight: "bolder",
                  }}
                >
                  Our Home
                </Typography>
                <Box m={-2} />
                <Typography
                  variant="body1"
                  style={{
                    color: esteemGreen,
                    margin: "15px",
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
      </>
    );
  }
}

export default HomeModelV2;
