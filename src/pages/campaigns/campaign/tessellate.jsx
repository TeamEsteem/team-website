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

export default class Tessellate extends Component {
  render() {
    return (
      <div>
        <div style={{
          // I can't figure out how to point the URL to the local images directory?!
          backgroundImage: "url('https://alak.bar/img/pics/heaven_sent.jpg')",
          height: "100vh"
        }}>
          <Grid container
            alignContent="center"
            direction="column"
            justify="center">
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: white, margin: "250px 0 0 0", fontWeight: "bold" }}
              >
                Tessellate
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: white, margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                See your art in our home at the Dubai 2020 World Expo!
              </Typography>
              <Button
                variant="outlined"
                size="large"
                style={{
                  padding: "5px 25px",
                  color: white,
                  margin: "auto",
                  marginTop: "40px",
                  border: "2px solid" + white,
                  borderRadius: "20px",
                }}
                startIcon={<ExpandMoreRoundedIcon />}
              >
                <a
                  href="#landingBottom"
                  style={{
                    position: "relative",
                    textDecoration: "none",
                    color: white,
                  }}
                >
                  See more
                </a>
              </Button>
            </ThemeProvider>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}
