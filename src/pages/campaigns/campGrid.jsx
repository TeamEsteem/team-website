import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../../components/colors";
import { Grid, Typography, ThemeProvider, Box, Card, Button } from "@material-ui/core";
import { primaryFont, secondaryFont } from "../../components/fonts";
import "../../App.scss";
import { transform } from "framer-motion";
import ReactCardFlip from 'react-card-flip';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     backgroundColor: 'black',
//     height:'600px',
//     width:'700px',
//     '&:hover': {
//         webkiFilter: blur('4px'), /* Chrome, Safari, Opera */
//         filter: blur('4px'),
//     }
//   },

//   paper1: {
//     height:'150px',
//     width:'150px',
//     backgroundColor: 'pink',
//   },
// }));

class FlipCamp extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

        <Box
          style={{
            width: "500px",
            height: "600px",
            borderRadius: "20px",
            // borderColor: darkGrey,
            // borderStyle: "solid",
            marginRight: "40px",
            marginLeft: "40px",
            backgroundImage: this.props.image,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: "50%",
          }}>
          <Box
            style={{
              // backgroundColor: "rgba(0, 152, 119, 0.4)",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ThemeProvider>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: white, fontWeight: "bold", textShadow: "0 0 25px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.5)" }}
              >
                {this.props.title}
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "left", color: white, margin: "10px 0 0 0", maxWidth: "1000px", fontSize: "1.5em", textShadow: "0 0 15px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1)" }}
              >
                <center>
                  {this.props.date}
                  <br />
                  <p style={{
                    fontSize: "0.75em"
                  }}>
                    {this.props.ongoing}
                  </p>
                  <a onClick={this.handleClick}
                    style={{
                      position: "relative",
                      textDecoration: "none",
                      color: white,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      style={{
                        padding: "5px 25px",
                        color: white,
                        border: "2px solid" + white,
                        borderRadius: "20px",
                        marginTop: "20px",
                        textShadow: "0 0 15px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1)",
                      }}
                    >
                      Quick Look
                    </Button>
                  </a>
                  <br />
                  <a
                    href={this.props.url}
                    style={{
                      position: "relative",
                      textDecoration: "none",
                      color: white,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      style={{
                        padding: "5px 25px",
                        color: white,
                        border: "2px solid" + white,
                        borderRadius: "20px",
                        marginTop: "10px",
                        textShadow: "0 0 15px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1)",
                      }}
                    >
                      See more
                    </Button>
                  </a>
                </center>
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>

        <Box onClick={this.handleClick}  >
          <p style={{
            display: "flex",
            width: "500px",
            height: "600px",
            borderRadius: "20px",
            padding: "30px",
            alignItems: "center",
            marginRight: "40px",
            marginLeft: "40px",
            backgroundColor: esteemGreen,
          }}>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h5"
                style={{ textAlign: "center", color: white }}
              >
                {this.props.description}
                <br /><br />
                {this.props.description2}
              </Typography>
            </ThemeProvider>

          </p>
        </Box>
      </ReactCardFlip>
    )
  }
}

export default function FullWidthGrid() {

  return (
    <div className="campBody" style={{ flexGrow: 1 }}>
      <Grid container
        spacing={12}
        direction="row"
        justify="center"
        alignItems="center">
        <Grid
          item
          spacing={12}
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item xs={12}>
            <FlipCamp
              image="url('/campaigns/tessellate/tessellate.jpg')"
              url="/campaign/tessellate"
              title="Tessellate"
              date="26 July 2021"
              ongoing="Active"
              description="Envisioned and evaluated with the support of Thornton Tomasetti, Tessellate is a global art competition created to fill our house with unique art pieces."
              description2="We invite artists of all ages and backgrounds to use this platform to show their talents to the world and to help us create not just a house, but a home."
            />
            <div className="campGrid" ></div>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <div className="campGridBuffer" style={{ height: '150px' }}></div>
          </Grid>
          <Grid item xs={12}>
            <FlipCamp
              image="url('/images/solariskit - kelvin points.jpg')"
              title="Placeholder"
              date="10 June 2021"
              description="Test"
            />
            <div className="campGrid"></div>
          </Grid>
        </Grid>
        <Grid
          item
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item >
            <div className="campGridBuffer" style={{ height: '150px' }}></div>
          </Grid>
          <Grid item>
            <FlipCamp
              image="url('/images/Jairis Render 1.jpg')"
              title="Placeholder"
              date="10 June 2021"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisi in justo faucibus eleifend malesuada id velit. Cras consectetur neque id neque maximus pellentesque. Nulla facilisi. Vestibulum ornare gravida urna non malesuada."
              text="Img 3"
            />
            <div className="campGrid"></div>
          </Grid>
          <Grid item>
            <div className="campGridBuffer" style={{ height: '150px' }}></div>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}