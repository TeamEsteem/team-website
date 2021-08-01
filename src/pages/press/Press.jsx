import {
  Box,
  Card,
  CardHeader,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import {
  black,
  esteemGreen,
  grey,
  lightGreen,
  white,
} from "../../components/colors";
import { primaryFont } from "../../components/fonts";
import "../../App.scss";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
function TopPart() {
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
              Our team on the news
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
              Check out Team ESTEEM's media presence.
              {"Need a better caption :)"}
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
            style={{ fill: white }}
          ></path>
        </svg>
      </div>
    </>
  );
}

function SinglePressCard() {
  return (
    <Card
      elevation={3}
      style={{
        background:
          "url(https://images.unsplash.com/photo-1620739159255-1c4cb978a0f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)",
        // filter: "blur(8px)",
        backdropFilter: "blur(2px)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "30em",
        height: "40em",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      {/* <CardHeader>Heyy, how's it going?</CardHeader> */}

      <div className="pressCard">
        <div
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "20px",
            padding: "5px",
            marginBottom: "10px",
            // justifyContent: "left",
            width: "fit-content",
            backdropFilter: "blur(10px)",
            color: white,
          }}
        >
          <div style={{ display: "flex", position: "relative" }}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Inter, sans-serif",
                zIndex: "2",
                margin: "15px",
                marginLeft: "25px",
              }}
            >
              About some topic
            </Typography>
            <IconButton
              style={{
                color: white,
                marginRight: "20px",
                padding: "5px",
                marginLeft: "auto",
              }}
            >
              <LinkOutlinedIcon />
            </IconButton>
          </div>
          <Typography
            variant="body2"
            style={{
              fontFamily: "Inter, sans-serif",
              zIndex: "2",
              fontWeight: "300",
              color: black,
              textAlign: "left",
              marginBottom: "5px",
            }}
          >
            This is forty-fifth round Google interview type shit right here.
            Let’s finish changing hearts and minds. We’ll make our .blur class
            cover the entire height of the window but only half of the width, so
            that we can see the difference after the filter is applied. If you
            want the blur to have a color, you’ll need to add the background
            property with an rgba value. Make sure that the alpha (opacity) is
            less than 1, so we can see through the color. Then we’ll add the
            magical backdrop-filter CSS property and give it a value of
            blur(8px). Hint, hint…increase/decrease the px to increase/decrease
            the blur.
          </Typography>
        </div>
      </div>
    </Card>
  );
}
class PressPage extends Component {
  render() {
    return (
      <>
        <TopPart />
        <center>
          <SinglePressCard />
        </center>
        {/* <SinglePressCard />
        <SinglePressCard /> */}
        <Box m={3} />
      </>
    );
  }
}

export default PressPage;
