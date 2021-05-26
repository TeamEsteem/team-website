import { Typography, Box, Button } from "@material-ui/core";
import React, { Component } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimelineElement } from "../../components/singleTimeline";
import PopUp from "../../components/singlePopUp";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import "../../App.scss";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../../components/colors";
import { Link } from "react-router-dom";
import HouseIcon from "@material-ui/icons/House";

class Timeline extends Component {
  state = {
    seen: false,
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <div id="timeline">
        <Box
          style={{
            textAlign: "center",
            color: white,
            marginBottom: "20px",
          }}
        >
          {/* <Box m={-3} /> */}
          {/* <div class="custom-shape-divider-top-1618082119">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
          <Typography
            variant="h3"
            style={{ color: "#202020", marginTop: "-60px" }}
          >
            <span style={{ color: "#009877" }}>Our</span> Timeline
          </Typography>
          <Box m={-1}></Box>
        </Box>
        <VerticalTimeline>
          <TimelineElement
            title="Building the CLT panels at CSIC"
            subtitle="April 2021"
            desc="Thanks to CSIC, we are building the cross-laminated timber (CLT) panels locally ourselves in Glasgow!"
            tag="secondary"
          ></TimelineElement>
          <TimelineElement
            title="Building the Prototype in Edinburgh"
            subtitle="June 2021"
            desc="The house will be built in Edinburgh first in order to test our prototype, after which it will be disassembled and shipped to Dubai!"
            tag="secondary"
          ></TimelineElement>

          <TimelineElement
            title="Team ESTEEM at the World Expo"
            subtitle="October 2021"
            desc="The final stage of this project! We'll be showcasing everything that we've been working on at the Dubai World Expo."
            tag="secondary"
          ></TimelineElement>
        </VerticalTimeline>

        <Link to="/timeline" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            size="large"
            style={{
              padding: "5px 30px 5px 30px",
              color: esteemGreen,
              margin: "auto",
              display: "flex",
              marginTop: "50px",
              marginBottom: "-70px",
              border: "2px solid" + esteemGreen,
              borderRadius: "20px",
            }}
            startIcon={<HouseIcon />}
          >
            <Typography component={"span"} variant={"body1"}>
              View the ESTEEM journey
            </Typography>
          </Button>
        </Link>
      </div>
    );
  }
}

export default Timeline;
