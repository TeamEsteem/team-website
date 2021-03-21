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
  AppBar,
  Typography,
  ThemeProvider,
  createMuiTheme,
  IconButton,
  Toolbar,
  Button,
  Box,
} from "@material-ui/core";
import { primaryFont } from "../components/fonts";
import styled from "styled-components";
import "../index.css";
import "../App.scss";
import NavDrawer from "../components/drawer";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";

const navButton = styled.button`
  padding: 100px;
  font-size: 40px;
  color: red;
`;
class Header extends Component {
  render() {
    return (
      <Box>
        {/* <Box m={-15} /> */}
        <AppBar
          style={{
            background: "transparent",
            boxShadow: "none",
            textAlign: "centre",
            paddingTop: 30,
            position: "absolute",
            margin: "auto",
            top: "5%",
            // left: "55%",

            // -ms-transform: translate(-50%, -50%);
            // transform: "translate(-50%, -50%)",
            // marginTop: "-10em",
          }}
        >
          <Toolbar
            style={{
              alignContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ThemeProvider theme={primaryFont}>
            <Link to="/">
              <IconButton
                style={{
                  fontWeight: "lighter",
                  justifyContent: "center",
                  color: esteemGreen,
                }}
              >
                <HomeRoundedIcon />
              </IconButton>
              </Link>
              <Link to="/team">
                <IconButton
                  style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: white,
                  }}
                >
                
                  <Typography>About Us</Typography>
                </IconButton>
              </Link>
              <Link to="/sponsors">
                <IconButton
                  style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: white,
                  }}
                >
                  <Typography>Sponsors</Typography>
                </IconButton>
              </Link>

              <IconButton
                style={{
                  fontWeight: "lighter",
                  justifyContent: "center",
                  color: white,
                }}
              >


                <Typography style={{ fontWeight: "lighter" }}>
                  <NavDrawer />
                </Typography>
              </IconButton>
            </ThemeProvider>
          </Toolbar>
        </AppBar>

        {/* <Box m={10} /> */}
      </Box>
    );
  }
}
// Home, ABout us,Sponsors more...
export default Header;
