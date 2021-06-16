import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ThemeProvider } from "styled-components";

import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../components/colors";
import { primaryFont, secondaryFont } from "./fonts";
import "../index.css";
import { Button, Box } from "@material-ui/core";
const Popup = (props) => {
  if (props.tag === "secondary") {
    return (
      <div className="popup-box">
        <div className="box2">
          <span className="close-icon2" onClick={props.handleClose}>
            x
          </span>
          {props.content}
        </div>
      </div>
    );
  } else {
    return (
      <div className="popup-box">
        <div className="box1">
          <span className="close-icon1" onClick={props.handleClose}>
            x
          </span>
          {props.content}
        </div>
      </div>
    );
  }
};

export function TimelineElement(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  if (props.tag === "secondary") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={
          <Typography style={{ color: darkGreen }}>{props.date}</Typography>
        }
        contentArrowStyle={{ borderRight: "7px solid" + esteemGreen }}
        iconStyle={{ background: grey, color: lightGreen }}
        iconOnClick={togglePopup}
        contentStyle={{
          background: grey,
          color: darkGreen,
          paddingTop: 15,
          borderRadius: "1em",
        }}
        // icon={<WorkIcon />}
      >
        <Box
          margin="10px 0px 20px 0px"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "10px",
            // filter: "grayscale(80%)",
          }}
        >
          <img
            src={props.image}
            alt={props.title}
            width={"250em"}
            height={"300em"}
            style={{
              flexShrink: "0",
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <ThemeProvider theme={secondaryFont}>
          <Typography variant="h3" style={{fontWeight:"bold"}} className="vertical-timeline-element-title">
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            {props.subtitle}
          </Typography>
        </ThemeProvider>

        {/* <ThemeProvider theme={primaryFont}> */}
        <Typography variant="body1" style={{ fontWeight: "300", color: grey }}>
          {props.desc}
        </Typography>
        {/* </ThemeProvider> */}
      </VerticalTimelineElement>
    );
  } else {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: esteemGreen,
          color: black,
          paddingTop: 15,
          borderRadius: "1em",
        }}
        contentArrowStyle={{ borderRight: "7px solid" + black }}
        date={<Typography style={{ color: white }}>{props.date}</Typography>}
        iconStyle={{ background: darkGreen, color: esteemGreen }}
        iconOnClick={togglePopup}
      >
        {/* {isOpen && (
          <Popup
            tag={props.tag}
            content={
              <div>
                <b>Popup 1</b>
                <ThemeProvider theme={primaryFont}>
                  <Typography style={{ color: white }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </ThemeProvider>
                <button>Test button</button>
              </div>
            }
            handleClose={togglePopup}
          />
        )} */}

        <ThemeProvider theme={secondaryFont}>
          <Typography variant="h3" className="vertical-timeline-element-title">
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            {props.subtitle}
          </Typography>
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="body1"
              style={{ fontWeight: "100", color: white }}
            >
              {props.desc}
            </Typography>
          </ThemeProvider>
        </ThemeProvider>
      </VerticalTimelineElement>
    );
  }
}
