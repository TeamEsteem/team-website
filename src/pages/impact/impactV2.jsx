import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { black, esteemGreen, white } from "../../components/colors";
import Header from "../nav-barV2";
import { Box, Grid, Typography, ThemeProvider } from "@material-ui/core";
import { primaryFont, secondaryFont } from "../../components/fonts";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function ImpactButtonClick() {
  console.log("heylo");
}
function ImpactDialogueBox() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const images = [
  {
    url: "https://images.unsplash.com/photo-1521708266372-b3547456cc2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1924&q=80",
    title: "Sustainability",
    width: "14.285714285714285714285714285714%",
  },
  {
    url: "https://images.pexels.com/photos/1152707/pexels-photo-1152707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Future",
    width: "14.285714285714285714285714285714%",
  },
  {
    url: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Innovation",
    width: "14.285714285714285714285714285714%",
  },
  {
    url: "https://images.pexels.com/photos/3976320/pexels-photo-3976320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Clean Energy",
    width: "14.285714285714285714285714285714%",
  },
  {
    url: "https://images.unsplash.com/photo-1598958574774-a38471f4f216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    title: "Mobility",
    width: "14.285714285714285714285714285714%",
  },
  {
    url: "https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    title: "Smart Solutions",
    width: "14.285714285714285714285714285714%",
  },
  {
    url: "https://images.pexels.com/photos/2861525/pexels-photo-2861525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Happiness",
    width: "14.285714285714285714285714285714%",
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
    height: 500,
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

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          onClick={ImpactDialogueBox.handleClickOpen}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
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
      ))}
    </div>
  );
}

class ImpactV2 extends Component {
  render() {
    return (
      <Box>
        {/* <ImpactButtons /> */}
        <div>
          <Typography style={{ fontSize: "20px" }}>
            <Header />
          </Typography>
        </div>
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
                }}
              >
                Pillars of ESTEEM
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 25px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                Sustainability, Future, Innovation, Clean Energy, Mobility,
                Smart Solutions, and Happiness.
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 25px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                These are the seven pillars of the SDME competition, highlighted
                by the Dubai Electricity and Water Authority (DEWA) as integral
                to the future of building services across the globe, but what do
                these words mean to Team ESTEEM?
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  color: white,
                  margin: "25px 0 100px 0",
                  maxWidth: "1000px",
                  fontSize: "1.5em",
                }}
              >
                (Click to find out more!)
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        {/* <div class="landing-bottom" style={{ backgroundColor: esteemGreen }}>
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
        </div> */}
        <ImpactButtons />
        <div style={{ margin: "2px" }}></div>
      </Box>
    );
  }
}

export default ImpactV2;
