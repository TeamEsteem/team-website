import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import {
  esteemGreen,
  white,
  grey,
  black,
  lightGreen,
  darkGrey,
} from "../../components/colors";
// import "./styles.css";
// import { members } from "./members";
import Header from "../../pages/nav-barV2";
import { primaryFont, secondaryFont } from "../../components/fonts";
import { ThemeProvider } from "styled-components";
import { TimelineElement } from "../../components/singleTimeline";
import { VerticalTimeline } from "react-vertical-timeline-component";
import Footer from "../footer";

class TimelinePage extends Component {
  render() {
    return (
      <Box style={{ background: white }}>
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
          style={{ backgroundColor: esteemGreen }}
        >
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "150px 0 0 0",
                  fontWeight: "bold",
                }}
              >
                Our Timeline
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 100px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                Check out what we've been up to since 2018!
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <div class="landing-bottom" style={{ backgroundColor: esteemGreen }}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              style={{ fill: white }}
            ></path>
          </svg>
        </div>
        {/* all the timeline elements come underneath */}
        <VerticalTimeline>
          <TimelineElement
            title="The Beginning of ESTEEM"
            subtitle="August 2018"
            desc="With SDME 2018 just around the corner, the Edinburgh campus decides to start planning its entry for the 2020 competition.​"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="Our First Hackathon!"
            subtitle="February 2019"
            desc="Our first Hackathon took place in the university’s new GRID building. We worked on basic principles of the house and what we wanted to integrate within the design.​"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="Expanding ESTEEM"
            subtitle="March 2019"
            desc="We started to recruit and create Team ESTEEM branding scheme, name, subteams and organize collaboration with potential sponsors."
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="Joining Forces with CSIC"
            subtitle="June 2019"
            desc="Working with CSIC, we held another two hackathons at their premises during the summer. Here, aspects of the house started to take shape.​"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="SDME Opening Ceremony"
            subtitle="October 2019"
            desc="Several students travelled to Dubai for the SDME opening ceremony. While there, they were able to visit the Solar Hai, where construction of our house will take place!​"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="Handing in Deliverable 2"
            subtitle="December 2019"
            desc="We completed Deliverable 2, a big milestone in project, as the Christmas holidays started. We now have a design, engineering concepts, and a media strategy."
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="New Year, New ESTEEM!"
            subtitle="January 2021"
            desc="We gave ESTEEM a new look with improved colours and a design guideline to make sure that we stand out from the rest of the competition!"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="3D Printed Concrete"
            subtitle="January 2020"
            desc="Back from the festive break, we start with an informative and constructive workshop with Thornton Thomasetti and Concreative in concrete 3D printing!​"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="Building the CLT panels at CSIC"
            subtitle="April 2021"
            desc="Thanks to CSIC, we are building the cross-laminated timber (CLT) panels locally ourselves in Glasgow!"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
          <TimelineElement
            title="Building the Prototype in Edinburgh"
            subtitle="June 2021"
            desc="The house will be built in Edinburgh first in order to test our prototype, after which it will be disassembled and shipped to Dubai!"
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>

          <TimelineElement
            title="Team ESTEEM at the World Expo"
            subtitle="October 2021"
            desc="The final stage of this project! We'll be showcasing everything that we've been working on at the Dubai World Expo."
            tag="secondary"
            image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=30"
          ></TimelineElement>
        </VerticalTimeline>
        <Box m={10}></Box>
        <div class="footer-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ background: white }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="Footer">
          <ThemeProvider theme={primaryFont}>
            <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
              <Footer />
            </Typography>
          </ThemeProvider>
        </div>
      </Box>
    );
  }
}

export default TimelinePage;
