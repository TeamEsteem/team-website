import { Typography } from "@material-ui/core";
import React, { Component } from "react";
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

export function TimelineElement(props) {
  if (props.tag === "secondary") {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={<Typography style={{ color: grey }}>{props.date}</Typography>}
        contentArrowStyle={{ borderRight: "7px solid" + esteemGreen }}
        iconStyle={{ background: white, color: lightGreen }}
        contentStyle={{
          background: white,
          color: darkGreen,
          paddingTop: 20,
        }}
        // icon={<WorkIcon />}
      >
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
      >
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
