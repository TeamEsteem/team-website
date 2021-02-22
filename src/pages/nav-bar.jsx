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
    IconButton,
    Toolbar,
    Button,
  } from "@material-ui/core";
  import { primaryFont } from "../components/fonts";
  import "../index.css";

class Header extends Component{ 
    render() {
        return (
        <AppBar style={{ background: 'transparent', boxShadow: 'none', textAlign: 'centre', paddingTop: 30}} >
          <Toolbar
            style={{
              alignContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
            }}
          >

              <ThemeProvider theme={primaryFont} >
                <Button color="inherit" style ={{paddingRight:50, fontSize:20}} >Home</Button>
                <Button color="inherit" style ={{paddingRight:50, fontSize:20}}>About Us</Button>
                <Button color="inherit" style ={{paddingRight:50, fontSize:20}}>Sponsors</Button>
                <Button color="inherit" style ={{paddingRight:50, fontSize:20}}>More</Button>
              </ThemeProvider>

          </Toolbar>
        </AppBar>
        )
    }
}

export default Header;