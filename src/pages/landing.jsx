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
import EsteemLogo from "../assets/images/logos.svg";
import SDMELogo from "../assets/images/SDMELogo.svg";
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import { primaryFont, secondaryFont } from "../components/fonts";
import Header from "../pages/nav-bar";

class Landing extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <Box m={-15}></Box>
        <div>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Header />
          </Typography>
        </div>
        <Box m={10}></Box>
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
          spacing={1}
        >
          <Grid item>
            <img
              src={EsteemLogo}
              alt="logos"
              width="130em"
              style={{
                alignContent: "center",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
              }}
            ></img>
          </Grid>
          <Grid item>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h1"
                style={{ textAlign: "center", color: esteemGreen }}
              >
                The Landing<br></br> <Box m={-2}></Box>page.
              </Typography>
            </ThemeProvider>
          </Grid>
          <Box m={2}></Box>
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="body1"
                style={{
                  paddingLeft: "100px",
                  paddingRight: "100px",
                  color: "white",
                  fontWeight: "lighter",
                  fontSize: "20px",
                  textAlign: "center",
                  margin: "auto",
                  width: "50%",
                }}
              >
                This is where we add the subtitle, a small description of the
                team, or maybe something about the project.
              </Typography>
            </ThemeProvider>
          </Grid>
          <Box m={3} />
          <Button
            variant="outlined"
            size="large"
            style={{
              width: "20%",
              color: white,
              margin: "auto",
              border: "3px solid" + esteemGreen,
            }}
          >
            Call to action
          </Button>
        </Grid>
        {/* <Box m={-1} /> */}
      </div>
    );
  }
}

export default Landing;
