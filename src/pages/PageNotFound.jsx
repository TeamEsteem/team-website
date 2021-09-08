import { Box, Typography, Button } from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { esteemGreen, lightGreen } from "../components/colors";
import { secondaryFont } from "../components/fonts";
import NotFound from "./NotFound.svg";

class PageNotFound extends Component {
  render() {
    return (
      <Box
        style={{
          margin: "5px",
          display: "block",
          // position: "relative",
          verticalAlign: "middle",
          padding: "70px 0",
        }}
      >
        <img
          src={NotFound}
          alt={"Page not found"}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            maxWidth: "20em",
            marginTop: "10%",
          }}
        />
        <br />
        <br />
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              color: "#000",
              // fontSize: "20px",
            }}
          >
            Error!
          </Typography>
        </ThemeProvider>
        <Box m={1} />
        <Typography
          variant="h3"
          style={{
            fontFamily: "Inter ,sans-serif",
            textAlign: "center",
            color: "#000",
            fontSize: "20px",
            margin: "0px 5px 0px 5px",
          }}
        >
          We can't find the requested page😢
        </Typography>
        <Button
          style={{
            color: "#faf8ff",
            backgroundColor: lightGreen,
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            display: "flex",
            width: "fit-content",
          }}
          variant="contained"
          href="/"
        >
          Back to Home Page!
        </Button>
      </Box>
    );
  }
}

export default PageNotFound;
