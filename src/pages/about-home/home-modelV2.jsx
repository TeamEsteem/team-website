import { Box, Typography, Grid, Card, Divider } from "@material-ui/core";
import React, { Component } from "react";
import SDMEhouse from "./sdmehouse-architecture 1.glb";
import "@google/model-viewer";
import { darkGreen, darkGrey, esteemGreen, grey, lightGreen, white, black } from "../../components/colors";
import "./homestyles.css";
import Header from "../nav-barV2";
import { ThemeProvider } from "styled-components";
import { primaryFont, secondaryFont } from "../../components/fonts";
import Footer from "../footer";
import "../../App.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import LaunchIcon from '@material-ui/icons/Launch';


const theme = createMuiTheme({
  shape: {
    borderRadius: 20,
    backgroundColor: grey,
  },
});

const images = [
  {
    key: 1,
    url: "https://images.unsplash.com/photo-1521708266372-b3547456cc2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1924&q=80",
    title: "Sustainability",
    width: "14.285714285714285714285714285714%",
    desc: "Our house will be built from a broad range of environmentally friendly construction materials. From cross-laminated timber to  woodfibre insulation, every element of the design is designed to minimise energy and water consumption, helping to downsize the carbon footprint of the house occupants.",
  },
  {
    key: 2,
    url: "https://images.pexels.com/photos/1152707/pexels-photo-1152707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Future",
    width: "14.285714285714285714285714285714%",
    desc: "With building services developing along several exciting technological frontiers, we are eager to incorporate as much futuristic tech into our design as possible. From voice activated appliances to a windcatcher made from 3D printed concrete, Team ESTEEM are not afraid to think outside the box when it comes to embracing the technology of tomorrow.",
  },
  {
    key: 3,
    url: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Innovation",
    width: "14.285714285714285714285714285714%",
    desc: "At the heart of our home lies our steadfast commitment to innovation in architectural design. Through our collaboration with industry and academic partners, we have equipped our building with cutting-edge renewable energy technology such as bifacial solar panels and bespoke water heating systems. ",
  },
  {
    key: 4,
    url: "https://images.pexels.com/photos/3976320/pexels-photo-3976320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Clean Energy",
    width: "14.285714285714285714285714285714%",
    desc: "Our dedicated renewables sub-team have worked tirelessly to develop the electrical generation systems that will power our competition build. Photovoltaic panels and solar-thermal devices are expertly woven into the design of the house, ensuring that our submission achieves the critical net zero carbon output. ",
  },
  {
    key: 5,
    url: "https://images.unsplash.com/photo-1598958574774-a38471f4f216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    title: "Mobility",
    width: "14.285714285714285714285714285714%",
    desc: "Our home has been designed to facilitate sustainable travel using electric vehicles, an essential feature of any nation’s efforts to achieve decarbonisation. Our house itself is characterised by its mobility, designed for rapid assembly and disassembly with a minimal resultant impact on its structural integrity. ",
  },
  {
    key: 6,
    url: "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    title: "Smart Solutions",
    width: "14.285714285714285714285714285714%",
    desc: "Fit with an intelligent and intuitive energy management system that allows users to fine-tune essential parameters of the interior environment, our house exemplifies “smart”. Interactive panels and voice-controlled systems provide a high-tech solution to the question of customisability, maximising user comfort in the home.",
  },
  {
    key: 7,
    url: "https://images.pexels.com/photos/2861525/pexels-photo-2861525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Happiness",
    width: "14.285714285714285714285714285714%",
    desc: "Most importantly, our house is designed to be a home. Our blend of technology and artistic interior design ensures the user experience is at the heart of our build, with each room, feature and space designed for holistic integration with the Team ESTEEM ethos of comfort and homeliness.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
        filter: "grayscale(20%)",
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "relative",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    filter: "grayscale(70%)",
    // -webkit-filter: grayscale(100%), /* Safari 6.0 - 9.0 */
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6
      }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));



function ImpactButtonsV2(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // handleClickOpen();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <>
        <ButtonBase
          focusRipple
          key={props.title}
          onClick={handleClickOpen}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "100%",
            // width: "100%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${props.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <ThemeProvider theme={primaryFont}>
              <Typography
                component="span"
                variant="body1"
                // style={{ fontSize: "20px" }}
                color="inherit"
                className={classes.imageTitle}
              >
                {props.title}
                <span className={classes.imageMarked} />
              </Typography>
            </ThemeProvider>
          </span>
        </ButtonBase>
      </>
      <ThemeProvider theme={theme}>
        <Dialog
          // fullScreen={fullScreen}
          open={open}
          key={props.key}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h4"
                style={{ fontWeight: "bolder", color: lightGreen }}
              >
                {props.title}
              </Typography>
            </ThemeProvider>
          </DialogTitle>
          <Divider light variant="middle" />

          <DialogContent>
            <DialogContentText>
              <ThemeProvider theme={primaryFont}>
                <Typography variant="body1" style={{ fontWeight: "normal" }}>
                  {props.desc}
                </Typography>
              </ThemeProvider>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
      <div>{/* <Button onClick={handleClickOpen}>Hello</Button> */}</div>
    </div>
  );
}


class HomeModelV2 extends Component {
  render() {
    return (
      <div style={{ width: "100%" }} onScroll={this.handleScroll}>
        <Grid
          container
          alignContent="center"
          direction="column"
          justify="center"
          style={{ backgroundColor: "#009877" }}
        >
          <Grid item>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: white, margin: "150px 0 0 0", fontWeight: "bold" }}
              >
                Our Home
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: white, margin: "25px 0 25px 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                <p>
                  It has taken nearly 3 years of effort, but we are nearly there; the prototype construction is underway!
                </p>
                <br />
                <p>
                  We post updates on our <a href="https://www.instagram.com/teamesteem2020/">Instagram</a> and <a href="https://www.linkedin.com/company/team-esteem-2020">LinkedIn</a> if you're interested in seeing our progress.
                </p>
              </Typography>
              <center>
                <a
                  href="/360"
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
                      margin: "auto",
                      border: "2px solid" + white,
                      borderRadius: "20px",
                    }}
                    startIcon={<LaunchIcon />}
                  >
                    Explore in 360°
                  </Button>
                </a>
              </center>
              <br /><br />
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
              style={{ fill: "#fff" }}
            ></path>
          </svg>
        </div>

        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: "#202020" }}
          >
            3D Renders
          </Typography>
        </ThemeProvider>
        <Grid container direction="row" style={{ maxWidth: "1250px" }}>
          <Box
            style={{
              // background: white,
              borderRadius: "20px",
              // maxWidth: "75%",
              padding: "20px",
              margin: "auto",
            }}
          >
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em" }}>
                <div className="justify">
                  <p>
                    Throughout the project, we've been using building modelling software to produce renders of the home. This enables our team to refine design strategies and future decisions.
                  </p>
                  <br />
                  <Box>
                    <img
                      // className="landing-img"
                      style={{
                        display: "flex",
                        maxWidth: "100%",
                        maxHeight: "600px",
                        borderRadius: "20px",
                      }}
                      src="/images/Jairis Render 1.jpg"
                      alt=""
                    // height="500px"
                    ></img>
                  </Box>
                  <br></br>
                  <p>
                    Each design iteration has been a clear indicator of our progress. Our partnership with Alpha Arquitectos has facilitated the production of these realistic renders, bringing our collective vision to life.
                  </p>
                  <br />
                  <Box>
                    <img
                      // className="landing-img"
                      style={{
                        display: "flex",
                        maxWidth: "100%",
                        maxHeight: "600px",
                        borderRadius: "20px",
                      }}
                      src="/images/Jairis Render 2.jpg"
                      alt=""
                    // height="500px"
                    ></img>
                  </Box>
                </div>
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>

        <Box m={10}></Box>

        <div style={{ backgroundColor: "#fff", padding: "0 10px" }}>
          <Grid container direction="column" style={{ maxWidth: "1250px" }}>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#202020" }}
              >
                3D Model
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em", textAlign: "center", marginTop: "20px" }}>
                <p>
                  Use your cursor or finger to rotate around the 3D model of our house.
                </p>
                <br />
              </Typography>
            </ThemeProvider>
            <br />
            <Grid item>
              <ThemeProvider theme={primaryFont}>
                <Box style={{ background: "#fff", height: "auto" }}>
                  <model-viewer
                    src={SDMEhouse}
                    camera-controls
                    shadow-intensity="0.5"
                    auto-rotate
                    camera-orbit="130deg"
                  >
                    <div class="progress-bar hide" slot="progress-bar">
                      <div class="update-bar"></div>
                    </div>
                  </model-viewer>
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item>
              <Box className="BackgroundWeb"></Box>
            </Grid>
          </Grid>
        </div>
        <Box m={10}></Box>
        <div class="sections-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div style={{ backgroundColor: "#f5f5f5", padding: "0 10px" }}>
          <Grid container direction="column" style={{ maxWidth: "1250px" }}>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#202020" }}
              >
                Pillars of <span style={{ color: "#009877" }}>ESTEEM</span>
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em", textAlign: "center", marginTop: "20px" }}>
                <p>
                  Sustainability, Future, Innovation, Clean Energy, Mobility,
                  Smart Solutions &#38; Happiness.
                </p>
                <br />
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em", textAlign: "center", marginTop: "20px" }}>
                <p>
                  These are the seven pillars of the SDME competition, highlighted
                  by the Dubai Electricity and Water Authority (DEWA) as integral
                  to the future of building services across the globe, but what do
                  these words mean to Team ESTEEM?
                </p>
                <br>
                </br>
                <p>
                  Click to find out more!
                </p>
                <br />
              </Typography>
            </ThemeProvider>
            <br />

          </Grid>
        </div>
        {images.map((image) => (
          <ImpactButtonsV2
            // key={image.key}
            url={image.url}
            title={image.title}
            width={image.width}
            desc={image.desc}
          />
        ))}
        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>
        {/* <div class="footer-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1100 120"
            preserveAspectRatio="none"
            style={{ backgroundColor: "#fff" }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
        <div className="Footer" style={{ paddingTop: "50px" }}>
          <ThemeProvider theme={primaryFont}>
            <Typography variant="body1" style={{ fontSize: "1em" }}>
              <Footer />
            </Typography>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default HomeModelV2;
