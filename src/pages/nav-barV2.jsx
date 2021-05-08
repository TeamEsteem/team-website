import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { white, esteemGreen, black } from "../components/colors";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { primaryFont } from "../components/fonts";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginLeft: "0px",
    // justifyContent: "space-evenly"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: white,
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appBarTransparent: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
  appBarSolid: {
    backgroundColor: black,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 400;
      if (show) {
        setNavBackground("appBarSolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Sponsors
          </Typography>
          <Button color="black">Login</Button> */}
          <ThemeProvider theme={primaryFont}>
            <Link to="/">
              <IconButton
                style={{
                  fontWeight: "lighter",
                  justifyContent: "center",
                  color: white,
                  size: "medium",
                }}
              >
                <Typography component={"span"} variant={"body2"}>
                  Home
                </Typography>
              </IconButton>
            </Link>
            <Link to="/team">
              <IconButton
                style={{
                  fontWeight: "lighter",
                  justifyContent: "center",
                  color: white,
                  size: "medium",
                }}
              >
                <Typography component={"span"} variant={"body2"}>
                  About
                </Typography>
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
                <Typography component={"span"} variant={"body2"}>
                  Sponsors
                </Typography>
              </IconButton>
            </Link>
            <Link to="/impact">
              <IconButton
                style={{
                  fontWeight: "lighter",
                  justifyContent: "center",
                  color: white,
                }}
              >
                <Typography component={"span"} variant={"body2"}>
                  Impact
                </Typography>
              </IconButton>
            </Link>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
}
