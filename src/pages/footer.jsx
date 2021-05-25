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
import { Grid, Typography, ThemeProvider, IconButton } from "@material-ui/core";
import MailOutline from "@material-ui/icons/MailOutline";
// import Business from "@material-ui/icons/Business";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { primaryFont, secondaryFont } from "../components/fonts";
import "../App.scss";
import EsteemLogo from "../assets/images/ESTEEM/Esteem Logo Full.png";
import SDMELogo from "../assets/images/SDME/SDME2021_logo_En_Hor_W.png";
import HWLogo from "../assets/images/HW Logo.png";

function FormRow2() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: grey, paddingBottom: "50px" }}
          >
            Get in touch
          </Typography>
        </ThemeProvider>
        <br></br>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
          <IconButton
            style={{
              fontWeight: "lighter",
              justifyContent: "center",
              color: esteemGreen,
            }}
          >
            <MailOutline />
          </IconButton>
          {/* <IconButton
            style={{
              fontWeight: "lighter",
              justifyContent: "center",
              color: esteemGreen,
            }}
          >
            <Business />
          </IconButton> */}
          <IconButton
            style={{
              fontWeight: "lighter",
              justifyContent: "center",
              color: esteemGreen,
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            style={{
              fontWeight: "lighter",
              justifyContent: "center",
              color: esteemGreen,
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            style={{
              fontWeight: "lighter",
              justifyContent: "center",
              color: esteemGreen,
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            style={{
              fontWeight: "lighter",
              justifyContent: "center",
              color: esteemGreen,
            }}
          >
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <br></br>
      </Grid>
    </React.Fragment>
  );
}

function FormRow1() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <img
            className="footer-logos"
            id="hw-logo"
            src={HWLogo}
            alt="logos"
            style={{
              filter: "brightness(0) invert(1) contrast(50%)",
            }}
          ></img>
        </Grid>
        <Grid item>
          <img
            className="footer-logos"
            id="sdme-logo"
            src={SDMELogo}
            alt="logos"
            style={{
              filter: "contrast(50%)",
            }}
          ></img>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

class Footer extends Component {
  render() {
    return (
      <div style={{ margin: "auto" }}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid>
            <FormRow2 />
          </Grid>
          <div style={{ margin: "10px" }}></div>
          <Grid>
            <FormRow1 />
          </Grid>
          <div style={{ margin: "10px" }}></div>
        </Grid>
      </div>
    );
  }
}

export default Footer;
