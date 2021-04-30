import { Box, Card, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { esteemGreen, white } from "../../components/colors";
import "../../App.scss";
// import { members } from "./members";

function TeamCard(props) {
  return (
    <Grid item>
      <Card
        className="team-card"
        style={{
          borderRadius: "20px",
          width: 400,
          height: 400,
          background: "#1b1b1b",
          margin: "20px",
        }}
      >
        <Grid
          container
          direction="column"
          xs={12}
          style={{ justifyContent: "left", padding: "20px", margin: "20px" }}
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
              variant="h1"
              style={{
                fontSize: "60px",
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
          <Box m={5} />
          <Grid item>
            <Typography
              variant="body1"
              style={{
                color: white,
                textAlign: "left",
                paddingRight: "90px",
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
                paddingRight: "200px",
                fontWeight: "500",
              }}
            >
              Find me on LinkedIn.
            </Typography>
          </Grid>
          <Box m={3} />
        </Grid>
      </Card>
    </Grid>
  );
}
class TeamMembers extends Component {
  render() {
    return (
      <Box style={{ padding: "50px" }}>
        <Grid container direction="row">
          <TeamCard name={"Mohit"} role={"Web Dev"} team={"Website"} />
          <TeamCard name={"Pranav"} role={"Web Dev"} team={"Website"} />
        </Grid>
      </Box>
    );
  }
}

export default TeamMembers;
