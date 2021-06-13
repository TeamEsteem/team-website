import {} from "@material-ui/core";
import {
  Box,
  TextField,
  Grid,
  Typography,
  ThemeProvider,
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
        <TextField
          label={props.label}
          variant="outlined"
          required
          multiline
          rows={5}
          cols={30}
          style={{ margin: "10px", marginLeft: "auto" }}
        ></TextField>
      </Grid>
    );
  } else {
    return (
      <Grid item>
        <TextField
          label={props.label}
          variant="filled"
          required
          style={{ margin: "10px", marginLeft: "auto", position: "relative" }}
        ></TextField>
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
                Feel free to get in touch with us if you have any questions about our project.
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
                We are especially interested in talking with companies looking to support our mission and students from Heriot-Watt wanting to take part.
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
        <Box
          style={{
            background: grey,
            borderRadius: "20px",
            margin: "20px",
            display: "flow",
            padding: "20px 30px 20px 30px",
            // position: "relative",
            border: "3px solid" + lightGreen,
          }}
        >
          {/* <Grid container direction="column"> */}
          <TextFields label="name" />
          <TextFields label="Email ID" />
          <TextFields label="Description" size="multiline" />
          {/* </Grid> */}
        </Box>
      </Box>
    );
  }
}

export default ContactUs;
