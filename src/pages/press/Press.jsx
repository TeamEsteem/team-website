import {
  Box,
  CardHeader,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import {
  black,
  esteemGreen,
  grey,
  lightGreen,
  white,
} from "../../components/colors";
import { primaryFont } from "../../components/fonts";
import "../../App.scss";
import "./press.scss";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import { Link } from "@material-ui/icons";

const PressData = [
  {
    img: "/press/engineerlive.jpg",
    link: "https://www.google.com",
    title: "Profiling Team ESTEEM",
    author: "Engineer Live · 30 Jul 2021",
    content:
      "All you need to know about the student team that's aiming to shake up the solar sector.",
  },
  {
    img: "/press/urban realm.jpg",
    link: "https://www.urbanrealm.com/features/728/Team_Esteem%3A_Homegrown.html",
    title: "Team Esteem: Homegrown",
    author: "Urban Realm · 26 Jul 2021",
    content:
      "Urban Realm speaks to the Heriot Watt team behind the prototype build to see at first hand how a marriage of architecture and engineering is breaking new ground in residential design at the Construction Scotland Innovation Centre.",
  },
  {
    img: "/press/edinburghlive.jpg",
    link: "https://www.urbanrealm.com/features/728/Team_Esteem%3A_Homegrown.html",
    title: "Edinburgh students' eco house set to represent UK at global design competition",
    author: "Edinburgh Live · Jacob Farr · 14 Jul 2021",
    content:
      "Team ESTEEM from Edinburgh’s Heriot Watt University have spoken of their excitement now that the construction of their eco-friendly prototype house has begun on campus.",
  },
];

function TopPart() {
  return (
    <>
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
              ESTEEM in the News
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
              Read articles and magazines where we've been featured for a deeper look into what we're doing and how we're going to get there
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
    </>
  );
}

function Card(props) {
  return (
    <Grid item>
      <div className="card">
        <img src={props.img} alt={props.title}/>
        <div className="card-body">
          <h2>
            {props.title}
            {
              <IconButton href={props.link} target="_blank">
                <Link fontSize="small" />
              </IconButton>
            }
          </h2>
          <p>{props.content}</p>
          <h5>{props.author}</h5>
        </div>
      </div>
    </Grid>
  );
}

class PressPage extends Component {
  render() {
    return (
      <>
        <TopPart />
        <div className="cards">
          <center>
            <Grid container direction={"container"} style={{justifyContent: "center"}}>
              {PressData.map((PressData) => {
                return (
                  <Card
                    img={PressData.img}
                    title={PressData.title}
                    author={PressData.author}
                    content={PressData.content}
                    link={PressData.link}
                  />
                );
              })}
            </Grid>
          </center>
        </div>
        <Box m={3} />
      </>
    );
  }
}

export default PressPage;
