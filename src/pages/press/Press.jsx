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
    img: "https://images.unsplash.com/photo-1600727087945-904f186eeb80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80",
    link: "https://www.google.com",
    title: "What I learned from my visit to The Upside Down",
    author: "Nancy Wheeler",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    img: "https://images.unsplash.com/photo-1628189847457-b4607de7d222?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80",
    link: "https://www.google.com",
    title: "Just some title",
    author: "Nancy Wheeler",
    content:
      "Australia's Victoria state reported a steady rise in locally acquired Covid-19 cases on Monday as the state's near seven million population goes through a snap one-week lockdown, its sixth since the pandemic began.",
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
              Our team on the news
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
              Check out Team ESTEEM's media presence.
              {"Need a better caption :)"}
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
        <img src={props.img} alt={props.title} />
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
            <Grid container direction={"container"}>
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
