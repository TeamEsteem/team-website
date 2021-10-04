import React, { Component } from "react";
import "../../../index.css";
import Header from "../../nav-barV2";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../../../components/colors";
import { primaryFont, secondaryFont } from "../../../components/fonts";
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import LaunchIcon from '@material-ui/icons/Launch';
export default class DestinationDubai extends Component {
  render() {
    return (
      <div>
        <div style={{
          backgroundImage: "url(/campaigns/destinationdubai/world.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50%",
        }}>
          <Grid container
            alignContent="center"
            direction="column"
            justify="center">
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: black, margin: "250px 0 0 0", fontWeight: "bold" }}
              >
                Destination Dubai
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: black, margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                <p>
                  Join us in staying fit during the pandemic by running, walking, or cycling!
                </p>
                <br />
                <p>
                  Become a member of our Strava club to count your miles towards the journey. The more you exercise, the faster we can get to Dubai (virtually)!
                </p>
              </Typography>
              <a
                href="#next"
                style={{
                  position: "relative",
                  textDecoration: "none",
                  color: black,
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  style={{
                    padding: "5px 25px",
                    color: black,
                    margin: "auto",
                    marginTop: "40px",
                    border: "2px solid" + black,
                    borderRadius: "20px",
                  }}
                  startIcon={<ExpandMoreRoundedIcon />}
                >
                  See more
                </Button>
              </a>
            </ThemeProvider>
          </Grid>
        </div>
        <Grid container
          alignContent="center"
          direction="column"
          justify="center"
          id="next"
        >
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="h4"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              Destination Dubai
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              One of our main goals as a team is to raise awareness about sustainability. Exercising can be a great way of reducing your carbon footprint, especially if you commute to work by walking or bike. We took these ideas and combined them into a campaign called Destination Dubai. By joining our Strava club you can log your miles as you exercise - be it walking, jogging, running, or cycling - and contribute to a virtual journey from Edinburgh to Dubai.
              <br />
              <a
                href="https://www.strava.com/clubs/748607"
                target="_blank"
                style={{
                  position: "relative",
                  textDecoration: "none",
                  color: white,
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  style={{
                    padding: "5px 25px",
                    color: esteemGreen,
                    margin: "auto",
                    marginTop: "40px",
                    border: "2px solid" + esteemGreen,
                    borderRadius: "20px",
                  }}
                  startIcon={<LaunchIcon />}
                >
                  Join Strava Club
                </Button>
              </a>
              <br /><br />
              <center>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OZasyWHgUsQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <br /><br />
                <img src="/campaigns/destinationdubai/ddposter.jpg" style={{ maxWidth: "100%", maxHeight: "50vh" }} alt="" />
              </center>
            </Typography>
          </ThemeProvider>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div >
    )
  }
}
