import {
  Button,
  CardActions,
  CardContent,
  IconButton,
  SvgIcon,
} from "@material-ui/core";
import {
  Box,
  TextField,
  Grid,
  Typography,
  ThemeProvider,
  Input,
  Checkbox,
  FormControlLabel,
  Card,
} from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import Footer from "../footer";
import { Textarea } from "@mobiscroll/react-lite";
import React, { Component } from "react";
import { black, esteemGreen, lightGreen, white } from "../../components/colors";
import { primaryFont, secondaryFont } from "../../components/fonts";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const iconScale = 3;
const iconMarginTop = 50
const iconMarginBottom = 30

function TextFields(props) {
  if (props.size === "multiline") {
    return (
      <Grid item>
        <textarea
          style={{
            borderRadius: "20px",
            border: "2px solid" + esteemGreen,
            padding: "10px",
            maxWidth: "30em",
            minWidth: "20em",
            margin: "5px 0px 10px 0px ",
            position: "relative",
          }}
          // defaultValue={props.label}
          margin="dense"
          disableUnderline
          multiline
          placeholder={props.hint}
          rowsMin={3}
          rows={5}
          rowsMax={6}
          type="text"
          required
        ></textarea>
      </Grid>
    );
  } else {
    return (
      <Grid item>
        <input
          style={{
            borderRadius: "20px",
            border: "2px solid" + esteemGreen,
            padding: "10px",
            maxWidth: "30em",
            minWidth: "20em",
            margin: "5px 0px 10px 0px ",
            position: "relative",
          }}
          margin="dense"
          disableUnderline
          placeholder={props.hint}
          rowsMax={2}
          type="text"
          required
        ></input>
      </Grid>
    );
  }
}

function SocialMediaCard(props) {
  return (
    // <Grid item>
    <Card
      style={{
        color: white,
        background: `${props.bgcolor}`,
        width: "15em",
        height: "15em",
        borderRadius: "15px",
        // padding: "10px",
        // margin: "10px",
        marginBottom: "25px",
        // marginLeft: "auto",
      }}
    >
      {props.icon}
      {/* <br />
      <br />
      <br />
      <br /> */}
      <CardContent>
        <Typography
          variant="body1"
          style={{ textAlign: "center", fontFamily: "Inter, sans-serif" }}
        >
          {props.label}
        </Typography>
      </CardContent>
      <Box m={-1} />
      <Typography
        variant="button"
        style={{ textAlign: "center", fontFamily: "Inter, sans-serif" }}
      >
        <CardActions>
          <Button
            size="small"
            href={props.href}
            target="_blank"
            style={{ color: white, marginLeft: "auto", marginRight: "auto" }}
          >
            Learn More
          </Button>
        </CardActions>
      </Typography>
    </Card>
    // </Grid>
  );
}

function TheForm() {
  return (
    <form name="contact" method="post" action="/contact">
      <p>We'll try and get back to you as quickly as possible, but it can take up to 3 days to get a response.</p>
      <br />
      <input
        type="text"
        name="first-name"
        placeholder="First name"
        disableUnderline
        required
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        disableUnderline
        required
      />
      <textarea
        name="Comments"
        placeholder="Message"
        disableUnderline
        multiline
        // rowsMin={3}
        // rows={10}
        // rowsMax={6}
        // cols={15}
        required
      />
      <Box m={2} />
      {/* <FormControlLabel
        control={<Checkbox name="" required style={{ color: esteemGreen }} />}
        label="I understand that it can take a day or two for a response."
      /> */}
      <Box m={2} />
      <button
        style={{
          color: white,
          background: esteemGreen,
          padding: "5px 10px 5px 10px",
          borderRadius: "20px",
          outline: "none",
          border: "2px solid" + esteemGreen,
          cursor: "pointer",
          boxShadow: "0 9px #999",
        }}
        type="submit"
      >
        Submit
      </button>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  );
}
class ContactUs extends Component {
  render() {
    return (
      <>
        <Box>
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
                  style={{
                    textAlign: "center",
                    color: white,
                    margin: "150px 0 0 0",
                    fontWeight: "bold",
                  }}
                >
                  Contact Us!
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "center",
                    color: white,
                    margin: "25px 0 25px 0",
                    maxWidth: "1000px",
                    fontSize: "1.5em",
                  }}
                >
                  Feel free to get in touch with us if you have any questions
                  about our project.
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "center",
                    color: white,
                    margin: "25px 0 100px 0",
                    maxWidth: "1000px",
                    fontSize: "1.5em",
                    padding: "0 20px",
                  }}
                >
                  We are especially interested in talking with companies looking
                  to support our mission and students from Heriot-Watt wanting to
                  take part.
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
          <Box m={-3} />
          <Grid
            container
            alignContent="center"
            direction="column"
            justify="center"
            style={{
              maxWidth: "500px"
            }}
          >
            <Box
              style={{
                background: grey,
                borderRadius: "20px",
                margin: "20px",
                // minWidth: "20em",
                padding: "20px 30px 20px 20px",
                position: "relative",
                // border: "3px solid" + lightGreen,
              }}
            >
              <TheForm />
            </Box>
          </Grid>
          <center>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h5"
                style={{
                  margin: "20px 20px 20px 30px",
                  // fontFamily: "Omnes Semibold, sans-serif",
                }}
              >
                You can also find us on...
              </Typography>
            </ThemeProvider>
          </center>
          <br />
          <Grid
            container
            direction="row"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              position: "relative",
              maxWidth: "1200px",
            }}
          >
            <SocialMediaCard
              label="See our updates and events that we hold!"
              icon={
                <LinkedInIcon
                  style={{
                    backgroundColor: grey,
                    marginLeft: "auto",
                    marginTop: iconMarginTop + "px",
                    marginRight: "auto",
                    marginBottom: iconMarginBottom + "px",
                    display: "flex",
                    transform: "scale(" + iconScale + ")",
                  }}
                />
              }
              bgcolor="#0e76a8"
              href="https://www.linkedin.com/company/team-esteem-2020"
            />
            <SocialMediaCard
              label="Watch videos about the construction process!"
              icon={
                <YouTubeIcon
                  style={{
                    backgroundColor: grey,
                    marginLeft: "auto",
                    marginTop: iconMarginTop + "px",
                    marginRight: "auto",
                    marginBottom: iconMarginBottom + "px",
                    display: "flex",
                    transform: "scale(" + iconScale + ")",
                  }}
                />
              }
              bgcolor={"#FF0000"}
              href="https://www.youtube.com/channel/UC55Q10-DHmFwC7NWNMXcpfg"
            />
            <SocialMediaCard
              label="See pictures of our construction progess!"
              icon={
                <InstagramIcon
                  style={{
                    color: white,
                    marginLeft: "auto",
                    marginTop: iconMarginTop + "px",
                    marginRight: "auto",
                    marginBottom: iconMarginBottom + "px",
                    display: "flex",
                    transform: "scale(" + iconScale + ")",
                  }}
                />
              }
              bgcolor={"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}
              href="https://www.instagram.com/teamesteem2020/"
            />
            <SocialMediaCard
              label="Listen to our podcast, Vision on Spotify"
              icon={
                <SvgIcon
                  style={{
                    color: white,
                    marginLeft: "auto",
                    marginTop: iconMarginTop + "px",
                    marginRight: "auto",
                    marginBottom: iconMarginBottom + "px",
                    display: "flex",
                    transform: "scale(" + iconScale + ")",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                  </svg>
                </SvgIcon>
              }
              bgcolor={"#1DB954"}
              href="https://open.spotify.com/show/572g2QVpSZRh1QEXVdZ6rq"
            />
          </Grid>
          <br />
        </Box>
      </>
    );
  }
}

export default ContactUs;
