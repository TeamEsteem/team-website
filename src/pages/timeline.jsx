import { Typography, Box } from "@material-ui/core";
import React, { Component } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimelineElement } from "../components/singleTimeline";
import PopUp from "../components/singlePopUp"; 


class Timeline extends Component {
  state = {
    seen: false
    };

   togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };
  
  
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Timeline;
