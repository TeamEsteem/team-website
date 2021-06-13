import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import {
  black,
  esteemGreen,
  grey,
  lightGreen,
  white,
} from "../../components/colors";
import Header from "../nav-barV2";
import {
  Box,
  Grid,
  Typography,
  ThemeProvider,
  Divider,
} from "@material-ui/core";
import { primaryFont, secondaryFont } from "../../components/fonts";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
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

function ImpactButtons() {
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
      {images.map((image) => (
        <>
          <ButtonBase
            focusRipple
            key={image.title}
            onClick={handleClickOpen}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              display: "flex",
              margin: "auto",
              // width: "100%",
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
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
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </ThemeProvider>
            </span>
          </ButtonBase>
        </>
      ))}
      {images.map((image) => (
        <Dialog
          // fullScreen={fullScreen}
          open={open}
          key={image.key}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{image.title}</DialogTitle>
          <Divider />

          <DialogContent>
            <DialogContentText>{image.desc}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      ))}

      <div>{/* <Button onClick={handleClickOpen}>Hello</Button> */}</div>
    </div>
  );
}

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
class ImpactV2 extends Component {
  render() {
    return (
      <Box>
        {/* <ImpactButtons /> */}
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
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "150px 0 0 0",
                  fontWeight: "bold",
                  padding: "0 20px",
                }}
              >
                Pillars of ESTEEM
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 25px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                Sustainability, Future, Innovation, Clean Energy, Mobility,
                Smart Solutions &#38; Happiness.
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 25px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                  padding: "0 20px",
                }}
              >
                These are the seven pillars of the SDME competition, highlighted
                by the Dubai Electricity and Water Authority (DEWA) as integral
                to the future of building services across the globe, but what do
                these words mean to Team ESTEEM?
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 100px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                  padding: "0 20px",
                }}
              >
                <b>Click to find out more!</b>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        {/* <ImpactButtons /> */}
        {images.map((image) => (
          <ImpactButtonsV2
            // key={image.key}
            url={image.url}
            title={image.title}
            width={image.width}
            desc={image.desc}
          />
        ))}

        <div style={{ margin: "2px" }}></div>
      </Box>
    );
  }
}

export default ImpactV2;
