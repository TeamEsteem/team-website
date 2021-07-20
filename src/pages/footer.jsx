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
import {
  Grid,
  Typography,
  ThemeProvider,
  IconButton,
  Box,
} from "@material-ui/core";
import MailOutline from "@material-ui/icons/MailOutline";
// import Business from "@material-ui/icons/Business";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { primaryFont, secondaryFont } from "../components/fonts";
import "../App.scss";
import EsteemLogo from "../assets/images/ESTEEM/Esteem Logo Full.png";
import SDMELogo from "../assets/images/SDME/SDME2021_logo_En_Hor_W.png";
import HWLogo from "../assets/images/HW Logo.png";

function FormRow2() {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        {/* <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: grey, paddingBottom: "50px" }}
            id="footer"
          >
            Get in <span style={{ color: lightGreen }}>Touch</span>
          </Typography>
        </ThemeProvider>
        <br></br> */}
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="body1"
            style={{ textAlign: "center", color: "#aaaaaa", paddingBottom: "50px" }}
            id="footer"
          >
            Feel free to check out what we do on our social media channels
          </Typography>
        </ThemeProvider>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
          <IconButton>
            <a
              href="mailto:sdme2020@hw.ac.uk"
              style={{
                textDecoration: "none",
                color: "#aaaaaa"
              }}
            >
              <MailOutline />
            </a>
          </IconButton>
          <IconButton>
            <a href="https://www.linkedin.com/company/team-esteem-2020"
            style={{
              textDecoration: "none",
              color: "#aaaaaa"
            }}>
              <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://twitter.com/teamesteem2020"
              style={{
                textDecoration: "none",
                color: "#aaaaaa",
              }}
            >
              <Twitter />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.facebook.com/teamesteem2020"
              style={{
                textDecoration: "none",
                color: "#aaaaaa",
              }}
            >
              <Facebook />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.instagram.com/teamesteem2020/"
              style={{
                textDecoration: "none",
                color: "#aaaaaa",
              }}
            >
              <Instagram />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.youtube.com/channel/UC55Q10-DHmFwC7NWNMXcpfg"
              style={{
                textDecoration: "none",
                color: "#aaaaaa",
              }}
            >
              <YouTubeIcon />
            </a>
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

function FormRow1() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ margin: "auto", display: "flex" }}
      >
        <Grid item>
          <img
            className="footer-logos"
            id="hw-logo"
            src={HWLogo}
            alt="logos"
            style={{
              filter: "brightness(0) invert(1) contrast(50%)",
              width: "90%", marginTop: "15px"
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
              width: "90%",
            }}
          ></img>
        </Grid>
      </Grid>
    </>
  );
}
class FormRow1V2 extends Component {
  render() {
    return (
      <>
        <Grid container direction="row" style={{ justifyContent: "center" }}>
          <Grid item>
            <div>
              <img
                className="footer-logos"
                id="hw-logo"
                src={HWLogo}
                alt="logos"
                style={{
                  filter: "brightness(0) invert(1) contrast(50%)", marginTop: "20px"
                }}
              ></img>
            </div>
          </Grid>
          <Grid item>
            <div>
              <img
                className="footer-logos"
                id="sdme-logo"
                src={SDMELogo}
                alt="logos"
                style={{
                  filter: "contrast(50%)",
                  // width: "90%",
                }}
              ></img>
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}
class Footer extends Component {
  render() {
    return (
      <Box style={{ margin: "auto" }}>
        <Grid
          container
          direction="column"
          // justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <FormRow2 />
          </Grid>
          <div style={{ margin: "10px" }}></div>
          <Grid item>
            <FormRow1V2 />
          </Grid>
          <div style={{ margin: "10px" }}></div>
        </Grid>
        <script data-goatcounter="https://esteem.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
      </Box>
    );
  }
}

export default Footer;
