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
import "../../App.scss";
import { members } from "./members";
import Header from "../../pages/nav-barV2";
import { primaryFont, secondaryFont } from "../../components/fonts";
import { ThemeProvider } from "styled-components";
import LinkedinImage from "../../assets/images/linkedin.png";
import { Rotate90DegreesCcw } from "@material-ui/icons";

const teams = [
  "marketing",
  "architecture",
  "renewables",
  "website",
  "sensors",
  "building_services",
  "sponsorship",
  "landscaping",
  "quantity",
  "structural",
  "health",
  "building_modelling",
  "construction",
  "windcatcher",
];

function TeamCardSmall(props) {
  return (
    <Grid item>
      <Box
        style={{
          borderRadius: "50px",
          width: 280,
          height: "auto", //or 320
          background: black,
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
            border: "4px solid" + esteemGreen,
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
        <Typography
          variant="body1"
          style={{
            color: white,
            // textAlign: "ce",
            paddingRight: "10px",
            fontWeight: "300",
          }}
        >
          Something about the person! let’s not keep an opening animation and
          let’s just keep plain text!
        </Typography>
        <Box m={6} />
        <Typography variant="body2" style={{ fontWeight: "500", color: white }}>
          Find me on {"   "}
          <IconButton
            src={LinkedinImage}
            style={{ background: esteemGreen }}
            onClick={props.linkedin}
            target="_blank"
          ></IconButton>
        </Typography>
        <Box m={2} />
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

function TeamCardMain(props) {
  return (
    <Box
      style={{
        borderRadius: "0px 50px 50px 50px",
        // padding: "5px",
        marginTop: "15px",
        border: "5px solid " + white,
        // background: esteemGreen,
        background:
          "linear-gradient(49deg, rgba(34,173,135,1) 21%, rgba(0,130,100,1) 100%)",
      }}
    >
      <ThemeProvider theme={primaryFont}>
        <Box
          style={{
            borderRadius: "0px 20px 20px 20px",
            background: lightGreen,
            marginTop: "-5px",
            marginLeft: "-5px",
            textAlign: "center",
            padding: "5px 20px 5px 20px",
            width: "fit-content",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontSize: "30px",
              fontWeight: "lighter",
              color: white,
            }}
          >
            <span style={{ fontWeight: "500" }}>
              {props.team.toUpperCase()}
              {"  "}
            </span>
            TEAM
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
            background: grey,
            justifyContent: "center",
          }}
        >
          <Header />
          <Box m={3} />
          <Typography
            variant="h3"
            style={{
              color: lightGreen,
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            ABOUT US
          </Typography>
          {teams.map((team) => (
            <TeamCardMain team={team} />
          ))}
          {/* <TeamCardMain team="marketing" /> */}
        </Box>
      </ThemeProvider>
    );
  }
}

export default TeamMembers;
