import { Typography, Box } from "@material-ui/core";
import React, { Component } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimelineElement } from "../components/singleTimeline";
import PopUp from "../components/singlePopUp";
import "../App.scss";

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
            color: "#fafafa",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h1">Timeline</Typography>
          <Box m={-1}></Box>
          <Typography variant="subtitle1" style={{ marginBottom: "10px" }}>
            Some funky subtitle
          </Typography>
        </Box>
        <VerticalTimeline>
          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
            iconOnClick={() => alert(1)}
          ></TimelineElement>
          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
            tag="secondary"
          ></TimelineElement>

          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
          ></TimelineElement>
          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
            tag="secondary"
          ></TimelineElement>

          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
          ></TimelineElement>
          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
            tag="secondary"
          ></TimelineElement>

          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
          ></TimelineElement>
          <TimelineElement
            title="Creative Director"
            subtitle="Miami, FL"
            desc="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
            date="2011-present"
            tag="secondary"
          ></TimelineElement>
        </VerticalTimeline>
        <div class="timeline-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
      </div>
    );
  }
}

export default Timeline;
