import { Box, Typography, Grid, Card } from "@material-ui/core";
import React, { Component } from "react";
import SDMEhouse from "./sdmehouse-architecture 1.glb";
import "@google/model-viewer";
import { darkGreen, darkGrey, esteemGreen, grey, lightGreen, white } from "../../components/colors";
import "./homestyles.css";
import Header from "../nav-barV2";
import { ThemeProvider } from "styled-components";
import { primaryFont, secondaryFont } from "../../components/fonts";
import Footer from "../footer";
class HomeModelV2 extends Component {
  render() {
    return (
      <div style={{ width: "100%" }} onScroll={this.handleScroll}>
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
                variant="body2"
                style={{ textAlign: "center", color: white, margin: "25px 0 100px 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                <p>
                  It has taken nearly 3 years of effort, but we are nearly there! We are currently building the prototype of our future home!
                </p>
                <br />
                <p>
                  We post updates on our <a href="https://www.instagram.com/teamesteem2020/">Instagram</a> and <a href="https://www.linkedin.com/company/team-esteem-2020">LinkedIn</a>  if you're interested in seeing our progress.
                </p>
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
              style={{ fill: "#fff" }}
            ></path>
          </svg>
        </div>

        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: "#202020" }}
          >
            3D Renders
          </Typography>
        </ThemeProvider>
        <Grid container direction="row" style={{ maxWidth: "1250px" }}>
          <Box
            style={{
              // background: white,
              borderRadius: "20px",
              // maxWidth: "75%",
              padding: "20px",
              margin: "auto",
            }}
          >
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em" }}>
                <div className="justify">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem omnis esse maxime? Aliquam, neque? Corrupti, dolorum fugit. Itaque ea obcaecati deleniti accusamus odio quo provident dolore vero, hic expedita et?
                  </p>
                  <br />
                  <Box>
                    <img
                      // className="landing-img"
                      style={{
                        display: "flex",
                        maxWidth: "100%",
                        maxHeight: "600px",
                        borderRadius: "20px",
                      }}
                      src="/images/Jairis Render 1.jpg"
                      alt=""
                    // height="500px"
                    ></img>
                  </Box>
                  <br></br>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia ipsum qui iste id ab! Consectetur soluta nostrum recusandae quo incidunt provident dignissimos deleniti, quibusdam consequuntur eos perferendis enim consequatur.
                  </p>
                  <br />
                  <Box>
                    <img
                      // className="landing-img"
                      style={{
                        display: "flex",
                        maxWidth: "100%",
                        maxHeight: "600px",
                        borderRadius: "20px",
                      }}
                      src="/images/Jairis Render 2.jpg"
                      alt=""
                    // height="500px"
                    ></img>
                  </Box>
                  <br></br>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim dignissimos ratione odit hic rem aliquid atque dolorum excepturi iusto ducimus harum deleniti temporibus, explicabo, vel sit natus minima ex.
                  </p>
                </div>
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>

        <Box m={10}></Box>

        <div style={{ backgroundColor: "#fff", padding: "0 10px" }}>
          <Grid container direction="column" style={{ maxWidth: "1250px" }}>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#202020" }}
              >
                3D Model
          </Typography>
            </ThemeProvider>
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em", textAlign: "center" }}>
                <p>
                  Use your cursor or finger to rotate around the 3D model of our house.
                </p>
              </Typography>
            </ThemeProvider>
            <br />
            <Grid item>
              <ThemeProvider theme={primaryFont}>
                <Box style={{ background: "#fff", height: "auto" }}>
                  <model-viewer
                    src={SDMEhouse}
                    camera-controls
                    shadow-intensity="0"
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
                  </model-viewer>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item>
              <Box className="BackgroundWeb"></Box>
            </Grid>
          </Grid>
        </div>
        <Box m={10}></Box>
        <div class="footer-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1100 120"
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
      </div>
    );
  }
}

export default HomeModelV2;
