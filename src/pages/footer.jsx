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
  Grid,
  Typography,
  ThemeProvider,
  IconButton,
} from "@material-ui/core";
import MailOutline from "@material-ui/icons/MailOutline";
import Business from "@material-ui/icons/Business";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import { primaryFont, secondaryFont } from "../components/fonts";
import "../App.scss";
import EsteemLogo from "../assets/images/logos.svg";
import SDMELogo from "../assets/images/SDMELogo.svg";

function FormRow2() {
    return (
      <React.Fragment>
          <Grid
           container
           direction="column"
           justify="space-evenly"
           alignItems="center"
          >
          
            <ThemeProvider theme={primaryFont}>
            <Typography
            variant="h3"
            style={{ textAlign: "center", color: lightGreen }}
            >
                Get in touch
            </Typography>
            </ThemeProvider>
            <br></br>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
                spacing={4}
                >
                    <IconButton
                    style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: esteemGreen,
                    }}
                    >
                    <MailOutline />
                </IconButton>
                <IconButton
                    style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: esteemGreen,
                    }}
                >
                    <Business />
                </IconButton>
                <IconButton
                    style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: esteemGreen,
                    }}
                >
            
                    <Twitter />
                </IconButton>
                <IconButton
                    style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: esteemGreen,
                    }}
                    >
                    <Facebook />
                </IconButton>
                <IconButton
                    style={{
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: esteemGreen,
                    }}
                >
                    <Instagram />
                </IconButton>
            </Grid>
            <br></br>
        </Grid>
      </React.Fragment>
    );
  }

  
function FormRow1() {
    return (
      <React.Fragment>
          <Grid
           container
           direction="column"
           justify="space-evenly"
           alignItems="center"
          >
            <Grid item>
                <img
                src={EsteemLogo}
                alt="logos"
                width="300em"
                style={{
                    alignContent: "center",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                }}
                ></img>
            <br></br>
            </Grid>
            <br></br><br></br>
            <Grid item>
                <img
                src={SDMELogo}
                alt="logos"
                width="300em"
                style={{
                    alignContent: "center",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                }}
                ></img>
            <br></br>
            </Grid>
            <br></br><br></br>
  
        </Grid>
      </React.Fragment>
    );
  }

class Footer extends Component{

    render(){
        return(
            <div style={{ margin: "auto"}}  >
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
                spacing={4}
                >
                    <Grid >
                        <FormRow1 />
                    </Grid>
                    <br></br><br></br>
                    <Grid >
                        <FormRow2 />
                    </Grid>
                </Grid>
               

            </div>
        );
    }
}


export default Footer;
