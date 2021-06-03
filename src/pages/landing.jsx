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
  Card,
  Divider,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { primaryFont, secondaryFont } from "../components/fonts";
import Header from "../pages/nav-barV2";
import NavDrawer from "../components/drawer";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import "./landing-sections";

function SubtitleInteractive(props) {
  return (
    <>
      {/* <DividerSpecial color={white} /> */}
      <Grid
        item
        style={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          style={{
            padding: "20px",
            textAlign: "center",
            color: grey,
            fontWeight: "600",
          }}
        >
          <CountUp start={0} end={props.number} duration={5} />
          <br></br>
          <ThemeProvider theme={secondaryFont}>
            <Typography variant="h6" style={{ color: "#f5f5f5" }}>
              {props.subtitle}
            </Typography>
          </ThemeProvider>
        </Typography>
      </Grid>
    </>
  );
}

function DividerSpecial(props) {
  return (
    <Grid item>
      <Divider
        orientation="vertical"
        variant="middle"
        style={{
          background: `${props.color}`,
          borderRadius: "20px",
          padding: "2px",
          height: "100px",
        }}
      ></Divider>
    </Grid>
  );
}
class Landing extends Component {
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
        >
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h2"
                style={{
                  textAlign: "center",
                  color: white,
                  marginTop: "200px",
                }}
              >
                Pride in{" "}
                <span style={{ color: white, fontWeight: 500 }}> where</span>{" "}
                <br></br> <Box m={-2}></Box> and{" "}
                <span style={{ color: white, fontWeight: 500 }}>how</span> we
                live
              </Typography>
            </ThemeProvider>
          </Grid>
          <Box m={2}></Box>
          <Grid item>
            <Grid container direction="row">
              <SubtitleInteractive number="130" subtitle="students" />
              {/* <DividerSpecial color={grey} /> */}
              <SubtitleInteractive number="5" subtitle="academic schools" />
              {/* <DividerSpecial color={grey} /> */}
              <SubtitleInteractive number="3" subtitle="campuses" />
              {/* <DividerSpecial color={grey} /> */}
              <SubtitleInteractive number="1" subtitle="cohesive vision" />
            </Grid>
          </Grid>
          <Box m={3} />

          <Button
            variant="outlined"
            size="large"
            style={{
              padding: "5px 30px 5px 30px",
              color: white,
              margin: "auto",
              marginBottom: "90px",
              border: "2px solid" + white,
              borderRadius: "20px",
            }}
            startIcon={<ExpandMoreRoundedIcon />}
          >
            <a
              // activeClass="active"
              // to="section1"
              // spy={true}
              // smooth={true}
              // duration={1000}
              href="#landingBottom"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                textDecoration: "none",
                color: white,
              }}
            >
              See more
            </a>
          </Button>
        </Grid>
        {/* <Box m={-1} /> */}
        <div class="landing-bottom" id="landingBottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1100 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default Landing;
