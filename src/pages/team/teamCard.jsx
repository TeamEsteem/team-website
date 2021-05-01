import { Box, Card, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { esteemGreen, white } from "../../components/colors";
import "../../App.scss";
// import { members } from "./members";
import Header from "../../pages/nav-barV2";

function TeamCard(props) {
  return (
    <Box>
      <Grid item container="row" className="team-card">
        <Card
          // className="team-card"
          style={{
            borderRadius: "20px 0px 0px 20px",
            width: 250,
            height: 400,
            background: "#1b1b1b",
            margin: "20px",
          }}
        >
          <Grid
            container
            direction="column"
            xs={12}
            style={{
              justifyContent: "left",
              padding: "20px",
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
                Find me on LinkedIn.
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
            background: "#f56920",
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
class TeamMembers extends Component {
  render() {
    return (
      <Box style={{ padding: "50px" }}>
        <Header />
        <Box m={3} />
        <Grid container>
          <TeamCard
            name={"Alakbar"}
            role={"Web Dev"}
            team={"Website"}
            image={
              "https://images.unsplash.com/photo-1612492175848-3af2f7e8dd57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            }
          />
          <TeamCard
            name={"Mohit"}
            role={"Web Dev"}
            team={"Website"}
            image={
              "https://images.unsplash.com/photo-1612492175848-3af2f7e8dd57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            }
          />
          <TeamCard
            name={"Pranav"}
            role={"Web Dev"}
            team={"Website"}
            image={
              "https://images.unsplash.com/photo-1612492175848-3af2f7e8dd57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            }
          />
        </Grid>
      </Box>
    );
  }
}

export default TeamMembers;
