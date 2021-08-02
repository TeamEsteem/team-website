import { Box, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { esteemGreen, white } from "../../components/colors";
import { primaryFont } from "../../components/fonts";
import { Pannellum } from "pannellum-react"
import image from "../../assets/images/three60panoramas/p2-scaled.jpg"

class Three60 extends Component {
  render() {
    return (
      <>
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
                360° images
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 100px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                any description you wanna give would come here!
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        {/* <div class="landing-bottom" style={{ backgroundColor: esteemGreen }}>
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
        </div> */}
        <Box>
          <Pannellum
              width="100%"
              height="70vh"
              image={ image }
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              onLoad={() => {
                  console.log("panorama loaded");
              }}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
            />
            <Pannellum.Hotspot
              type="info"
              pitch={31}
              yaw={-107}
              text="Info Hotspot Text 4"
            />
          </Pannellum>
        </Box>
      </>
    );
  }
}

export default Three60;
