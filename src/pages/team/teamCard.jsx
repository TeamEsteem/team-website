import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { esteemGreen, white, grey, black } from "../../components/colors";
import "../../App.scss";
import { members } from "./members";
import Header from "../../pages/nav-barV2";
import { primaryFont } from "../../components/fonts";
import { ThemeProvider } from "styled-components";
import LinkedinImage from "../../assets/images/linkedin.png";
function TeamCard(props) {
  return (
    <Box>
      <Grid
        item
        container="row"
        className="team-card"
        style={{ margin: "auto", position: "relative" }}
      >
        <Card
          // className="team-card"
          style={{
            borderRadius: "20px 0px 0px 20px",
            width: 250,
            height: 400,
            background: "#1b1b1b",
            margin: "25px",
          }}
        >
          <Grid
            container
            direction="column"
            xs={12}
            style={{
              justifyContent: "left",
              padding: "10px",
              margin: "20px",
            }}
          >
            <Grid item>
              <Typography
                variant="h3"
                style={{
                  fontSize: "20px",
                  color: white,
                  textAlign: "left",
                  fontWeight: "100",
                }}
              >
                {props.role}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                style={{
                  fontSize: "50px",
                  color: white,
                  textAlign: "left",
                  fontWeight: "600",
                }}
              >
                {props.name}
                {/* Mohit */}
              </Typography>
            </Grid>
            {/* <Box m={1} /> */}
            <Card
              style={{
                background: esteemGreen,
                color: white,
                borderRadius: "50px",
                padding: "2px 10px 2px 10px",
                width: "fit-content",
              }}
            >
              {props.team}
            </Card>
            <Box m={2} />
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: white,
                  textAlign: "left",
                  paddingRight: "30px",
                  fontWeight: "300",
                }}
              >
                Something about the person! let’s not keep an opening animation
                and let’s just keep plain text!
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: white,
                  textAlign: "left",
                  // paddingRight: "200px",
                  fontWeight: "500",
                }}
              >
                Find me on
                <IconButton
                  src="linkedin.png"
                  onClick={`${props.linkedin}`}
                  target="_blank"
                ></IconButton>
              </Typography>
            </Grid>
            <Box m={3} />
          </Grid>
        </Card>
        {/* <Grid container direction="row">
          <Grid item> */}
        <Card
          style={{
            borderRadius: "0px 20px 20px 0px",
            width: 200,
            height: 400,
            background: esteemGreen,
            marginTop: "30px",
            marginLeft: "-30px",
          }}
        >
          <img
            src={props.image}
            alt={props.name}
            width={200}
            height={400}
            className="team-image"
            // id="team-image"
          ></img>
        </Card>
        {/* </Grid>
        </Grid> */}
      </Grid>
    </Box>
  );
}

function TeamCardSmall(props) {
  return (
    <Box
      style={{
        borderRadius: "50px",
        width: 280,
        height: "auto", //or 320
        background: black,
        padding: "20px",
        margin: "45px 15px 15px 15px",
        textAlign: "center",
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
          style={{ background: white }}
          onClick={props.linkedin}
          target="_blank"
        ></IconButton>
      </Typography>
      <Box m={2} />
      <Card
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
      </Card>
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
              color: esteemGreen,
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            ABOUT US
          </Typography>
          <Grid container>
            {/* <TeamCardSmall /> */}
            {members.map((members) => {
              return (
                <TeamCardSmall
                  // id={members.id}
                  name={members.name}
                  role={members.role}
                  team={members.team[0]}
                  image={members.image}
                  linkedin={members.linkedin}
                />
              );
            })}
          </Grid>
        </Box>
      </ThemeProvider>
    );
  }
}

export default TeamMembers;
