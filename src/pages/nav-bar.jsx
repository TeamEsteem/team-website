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
  import styled from 'styled-components';
  import "../index.css";
  import "../App.scss";

  const navButton = styled.button`
  padding: 100px;
  font-size: 40px;
  color: red;
  `;

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


            <Button color="inherit"style ={{paddingRight:50, fontSize:20}}>HOME</Button>
            <Button color="inherit" style ={{paddingRight:50, fontSize:20}}>ABOUT US</Button>
            <Button color="inherit" style ={{paddingRight:50, fontSize:20}}>Sponsors</Button>
            <Button color="inherit" style ={{paddingRight:50, fontSize:20}}>More</Button>
   

          </Toolbar>
        </AppBar>
        )
    }
}

export default Header;