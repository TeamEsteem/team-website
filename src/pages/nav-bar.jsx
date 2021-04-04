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
import {  makeStyles } from "@material-ui/core/styles";


const navButton = styled.button`
  padding: 100px;
  font-size: 40px;
  color: red;
`;

const useStyles = makeStyles(theme => ({
  navbar: {
    boxShadow: "none",
    padding:30,
    position: "fixed",
    margin: "auto",
    backgroundColor:  "transparent",
  },

  
  scrolledBar: {  
    boxShadow: "none",
    padding:30,
    position: "fixed",
    margin: "auto",
    backgroundColor:  "red",
  } 

}));

const Nav = React.forwardRef((props, ref) =>{
  const classes = useStyles();


  return(
      <AppBar
      ref = {ref}
      className={classes.scrolledBar}
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
  )
})



class Header extends Component {

  
  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }
  

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener,true );
  }

  handleScroll = () => {
    console.log(this.nav.current.className);
    if (window.scrollY > 400) {
      this.nav.current.style.backgroundColor = "black";
      this.nav.current.style.transition = "background-color 0.5s ease";
    }
    else{
      this.nav.current.style.backgroundColor = "transparent";
    }
  }



  render() {
    
    return (
      <Box>
        <Nav ref={this.nav} />
      </Box>
    );
  }
}
// Home, ABout us,Sponsors more...
export default Header;
