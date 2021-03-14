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
import NavDrawer from "../components/drawer";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Link } from "react-scroll";

class Landing extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <div>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Header />
          </Typography>
        </div>
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
              width="300em"
              style={{
                alignContent: "center",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
              }}
            ></img>
            <br></br>
          </Grid>
          <Grid item>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h2"
                style={{ textAlign: "center", color: esteemGreen }}
              >
                PRIDE IN <span style={{ color: grey }}>WHERE</span> <br></br>{" "}
                <Box m={-2}></Box> AND <span style={{ color: grey }}>HOW</span>{" "}
                WE LIVE
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
              padding: "5px 30px 5px 30px",
              color: white,
              margin: "auto",
              border: "3px solid" + esteemGreen,
              borderRadius: "20px",
            }}
            startIcon={<ExpandMoreRoundedIcon />}
          >
            <Link
              activeClass="active"
              to="timeline"
              spy={true}
              smooth={true}
              duration={1000}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
              }}
            >
              Learn More!
            </Link>
          </Button>
        </Grid>
        {/* <Box m={-1} /> */}
      </div>
    );
  }
}

export default Landing;
