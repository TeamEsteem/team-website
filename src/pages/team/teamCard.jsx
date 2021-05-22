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
} from "../../components/colors";
// import "./styles.css";
import { members } from "./members";
import Header from "../../pages/nav-barV2";
import { primaryFont, secondaryFont } from "../../components/fonts";
import { ThemeProvider } from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const teams = [
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
          background: white,
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
            boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          }}
          src={props.image}
        />
        <Box m={-5} />
        <Typography
          variant="h2"
          style={{
            color: "#202020",
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
            color: "#505050",
          }}
        >
          {`${props.role}`.toUpperCase()}
          {/* WEBSITE DEVELOPER */}
        </Typography>
        <Box m={2} />
        <Typography
          variant="body1"
          style={{
            color: "#202020",
            // textAlign: "ce",
            paddingRight: "10px",
            fontWeight: "300",
          }}
        >
        </Typography>
        <Box m={2} />
        {/* <Typography variant="body2" style={{ fontWeight: "500", color: "#505050" }}>
          Find me on {"  "} */}
        <IconButton
          style={{ color: "202020", padding: "0px 0px 3px 0px" }}
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
      style={{
        // paddingTop: "5px",
        // display: "flex",
        // background: "linear-gradient(49deg, rgba(34,173,135,1) 21%, rgba(0,130,100,1) 100%)",
      }}
    >
      <ThemeProvider theme={primaryFont}>
        <Box
          style={{
            marginTop: "100px",
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
              color: white,
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
      <Grid container direction="row">
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
    </Box>
  );
}
class TeamMembers extends Component {
  render() {
    return (
      <ThemeProvider theme={primaryFont}>
        <Box
          style={{
            padding: "50px",
            background: esteemGreen,
            justifyContent: "center",
          }}
        >
          <Header />
          <Box m={3} />
          <Typography
            variant="h3"
            style={{
              color: white,
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            About Us
          </Typography>
          <Box m={3} />
          <Typography
            style={{ color: white }}
          >
            <div className="section-block">
              <div className="section-block-text">
                <p>
                  Diverse student involvement across the whole university has been essential to the successful creation of a team of student engineers (architectural, structural, mechanical and electrical), computer scientists, energy specialists and business undergraduates. This diversity has been instrumental in the first phase of design.
                </p>
                <br></br>
                <p>
                  If you would like to be a part of the team then get in touch with us!
                </p>
              </div>
            </div>
          </Typography>
          <Box m={3} />
          <div className="teamcard-wrapper" style={{ maxWidth: "1250px" }}>
            {teams.map((team) => (
              <BackgroundTeamCard team={team} />
            ))}
            {/* <TeamCardMain team="marketing" /> */}
          </div>
        </Box>
      </ThemeProvider>
    );
  }
}

export default TeamMembers;
