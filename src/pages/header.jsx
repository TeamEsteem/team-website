import EsteemLogo from "../assets/images/ESTEEM/Esteem Logo Full White.png";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink, Router } from "react-router-dom";
import { esteemGreen, white, lightGreen } from "../components/colors";

const headersData = [
  // {
  //   label: "Home",
  //   href: "/",
  // },
  {
    label: "Team",
    href: "/team",
    color: white,
    bgColor: "#111111",
  },
  {
    label: "Impact",
    href: "/impact",
    color: white,
    bgColor: "#111111",
  },
  {
    label: "Sponsors",
    href: "/sponsors",
    color: white,
    bgColor: "#111111",
  },
  {
    label: "Contact",
    href: "/contact",
    color: white,
    bgColor: "#111111",
  },
  {
    label: "Our Home",
    href: "/home-model",
    color: lightGreen,
    bgColor: "#fff",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#111111",
    // backgroundColor: "#000",
    boxShadow: "none",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px",
  },
}));

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <a href="/">
          <img src={EsteemLogo} alt="" />
        </a>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>
          <a href="/">
            <img src={EsteemLogo} id="esteem-logo" alt="" />
          </a>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href, color, bgColor }) => {
      return (
        <Button
          {...{
            key: label,
            // color: "#f56920",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
          style={{ color: color, background: bgColor }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
