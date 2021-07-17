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
import { Grid, Typography, ThemeProvider, Box, Card } from "@material-ui/core";
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
  
            <Box onClick={this.handleClick}>
                <img
                // className="landing-img"
                style={{
                display: "flex",
                width: "500px",
                height: "600px",
                borderRadius: "40px",
                marginRight: "40px",
                borderColor: darkGrey,
                borderStyle: "solid",
                marginLeft: "40px"
                }}
                src="https://bloximages.chicago2.vip.townnews.com/napavalleyregister.com/content/tncms/assets/v3/editorial/f/3d/f3d48270-229d-5ddd-b143-7311d5728379/609e0e65c66b3.image.jpg?resize=500%2C612"
                alt=""
                // height="500px"
                ></img>
            </Box>

            <Box onClick={this.handleClick}  >
              <p style={{
                display: "flex",
                width: "500px",
                height: "600px",
                borderRadius: "40px",
                padding: "30px",
                borderColor: darkGrey,
                alignItems: "center",
                borderStyle: "solid",
                marginRight: "40px",
                marginLeft: "40px"
            }}>
               <ThemeProvider theme={secondaryFont}>
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", color: "#202020" }}
                >
                  mew mew mew mew mew mew mew mew mew mew
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
    <div className="campBody" style = {{flexGrow:1}}>
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
            <FlipCamp />
                {/* <div className="campGrid" ></div> */}
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className="campGridBuffer" style = {{height:'150px'}}></div>
            </Grid>
            <Grid item xs={12}>
            <FlipCamp />
                {/* <div className="campGrid"></div> */}
            </Grid>
        </Grid>
        <Grid 
        item
        direction="column"
        justify="center"
        alignItems="center">
            <Grid item >
                <div className="campGridBuffer" style = {{height:'150px'}}></div>
            </Grid>
            <Grid item>
            <FlipCamp />
                {/* <div className="campGrid"></div> */}
            </Grid>
            <Grid item>
                <div className="campGridBuffer" style = {{height:'150px'}}></div>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
 