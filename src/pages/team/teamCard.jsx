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
import { members } from "./members";
import Header from "../../pages/nav-barV2";
import { primaryFont, secondaryFont } from "../../components/fonts";
import { ThemeProvider } from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Footer from "../footer";

const teams = [
  "management",
  "marketing",
  "architecture",
  "website",
  "renewables",
  "sensors",
  "building Services",
  "sponsorship",
  "landscaping",
  "quantity",
  "structural",
  "health",
  "building Modelling",
  "construction",
  "windcatcher",
];

function TeamCardSmall(props) {
  return (
    <Grid item>
      <Box
        style={{
          borderRadius: "25px",
          width: 280,
          height: "auto", //or 320
          background: esteemGreen,
          boxShadow: "0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.15)",
          padding: "20px",
          margin: "45px 15px 15px 15px",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <Avatar
          style={{
            margin: "auto",
            position: "relative",
            top: -50,
            height: 100,
            width: 100,
            // boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          src={props.image}
        />
        <Box m={-5} />
        <Typography
          variant="h2"
          style={{
            color: white,
            textAlign: "center",
            fontWeight: "600",
            fontSize: "30px",
            padding: "0px 10px 0px 10px",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="caption"
          style={{
            color: grey,
          }}
        >
          {`${props.role}`.toUpperCase()}
          {/* WEBSITE DEVELOPER */}
        </Typography>
        <Box m={2} />
        {/* <Typography
          variant="body1"
          style={{
            color: grey,
            paddingRight: "10px",
            fontWeight: "300",
          }}
        ></Typography> */}
        <Box m={2} />
        {/* <Typography variant="body2" style={{ fontWeight: "500", color: "#505050" }}>
          Find me on {"  "} */}
        <IconButton
          style={{ color: grey, padding: "0px 0px 3px 0px" }}
          href={props.linkedin}
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        {/* </Typography> */}
        {/* <LinkedInIcon style={{ fontSize: 50 }} /> */}

        {/* <Box m={2} /> */}
        {/* <Card
          style={{
            background: esteemGreen,
            color: white,
            borderRadius: "50px",
            padding: "2px 10px 2px 10px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          {`${props.team}`.toUpperCase()}
        </Card> */}
      </Box>
    </Grid>
  );
}

function BackgroundTeamCard(props) {
  return (
    <Box
      style={
        {
          // paddingTop: "5px",
          // display: "flex",
          // background: "linear-gradient(49deg, rgba(34,173,135,1) 21%, rgba(0,130,100,1) 100%)",
        }
      }
    >
      <ThemeProvider theme={primaryFont}>
        <Box
          style={{
            // marginTop: "100px",
            marginLeft: "-5px",
            textAlign: "center",
            padding: "5px 20px 5px 20px",
            width: "fit-content",
            display: "flex",
            justifyContent: "center",
          }}
          // className="card-background-title"
        >
          <Typography
            variant="h4"
            style={{
              fontSize: "30px",
              color: darkGrey,
            }}
          >
            <span style={{ fontWeight: "700" }}>
              {props.team.charAt(0).toUpperCase() + props.team.slice(1)}
              {"  "}
              Team
            </span>
          </Typography>
        </Box>
      </ThemeProvider>
      <Grid container direction="row" justify="space-evenly">
        {members.map((members) => {
          if (members.team[0] === props.team) {
            return (
              <TeamCardSmall
                // id={members.id}
                name={members.name}
                role={members.role}
                team={(members.team[0] = props.team)}
                image={members.image}
                linkedin={members.linkedin}
              />
            );
          }
        })}
      </Grid>
      <Box m={15} />
    </Box>
  );
}
class TeamMembers extends Component {
  render() {
    return (
      <div style={{}} onScroll={this.handleScroll}>
        <div>
          <Typography style={{ fontSize: "20px" }}>
            <Header />
          </Typography>
        </div>
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
                Our Team
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
                Diverse student involvement across the whole university has been
                essential to the successful creation of a team of student
                engineers, computer scientists, energy specialists, and business
                undergraduates.
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

        <ThemeProvider theme={primaryFont}>
          <div className="teamcard-wrapper" style={{ maxWidth: "1250px" }}>
            {teams.map((team) => (
              <BackgroundTeamCard team={team} />
            ))}
            {/* <TeamCardMain team="marketing" /> */}
          </div>
        </ThemeProvider>
        <div class="footer-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ backgroundColor: "#fff" }}
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
      </div>
    );
  }
}

export default TeamMembers;
