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
import "../index.css"



const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export function TimelineElement(props) {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
   setIsOpen(!isOpen);
  }
  if (props.tag === "secondary") {


    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={<Typography style={{ color: grey }}>{props.date}</Typography>}
        contentArrowStyle={{ borderRight: "7px solid" + esteemGreen }}
        iconStyle={{ background: white, color: lightGreen }}
        iconOnClick={togglePopup}
        contentStyle={{
          background: white,
          color: darkGreen,
          paddingTop: 20,
        }}
        // icon={<WorkIcon />}
      >
         {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
    
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
        </ThemeProvider>
        {/* <ThemeProvider theme={primaryFont}> */}
        <Typography variant="body1" style={{ fontWeight: "lighter" }}>
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
          color: white,
          paddingTop: 20,
        }}
        contentArrowStyle={{ borderRight: "7px solid" + white }}
        date={<Typography style={{ color: grey }}>{props.date}</Typography>}
        iconStyle={{ background: darkGreen, color: esteemGreen }}
        iconOnClick={togglePopup}
      >
                 {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
        
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
        </ThemeProvider>
        {/* <ThemeProvider theme={primaryFont}> */}
        <Typography variant="body1" style={{ fontWeight: "300" }}>
          {props.desc}
        </Typography>
        {/* </ThemeProvider> */}
      </VerticalTimelineElement>
    );
  }
}
