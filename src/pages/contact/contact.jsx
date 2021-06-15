import { Button } from "@material-ui/core";
import {
  Box,
  TextField,
  Grid,
  Typography,
  ThemeProvider,
  Input,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Textarea } from "@mobiscroll/react-lite";
import React, { Component } from "react";
import { esteemGreen, lightGreen, white } from "../../components/colors";
import { primaryFont } from "../../components/fonts";

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
class ContactUs extends Component {
  render() {
    return (
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
        <Box m={-1} />
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
        >
          <Box
            style={{
              background: grey,
              borderRadius: "20px",
              margin: "20px",
              maxWidth: "20em",
              // minWidth: "20em",
              padding: "20px 30px 20px 20px",
              // position: "relative",
              border: "3px solid" + lightGreen,
            }}
          >
            <form name="contact" method="post" onSubmit="submit" netlify>
              <input
                type="text"
                name="first-name"
                placeholder="First name"
                disableUnderline
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                disableUnderline
              />
              <textarea
                name="Comments"
                placeholder="Comments"
                disableUnderline
                multiline
                rowsMin={3}
                rows={5}
                rowsMax={6}
                cols={30}
                required
              />
              <Button
                style={{
                  color: white,
                  background: esteemGreen,
                  padding: "5px 10px 5px 10px",
                  borderRadius: "20px",
                }}
                type="submit"
              >
                Submit
              </Button>
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </Box>
        </Grid>
      </Box>
    );
  }
}

export default ContactUs;
