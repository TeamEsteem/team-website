import React, { Component } from "react";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../components/colors";
import EsteemLogo from "../assets/images/logos.svg";
import SDMELogo from "../assets/images/SDMELogo.svg";
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import GridBase from "@material-ui/core/Grid";
import { primaryFont, secondaryFont } from "../components/fonts";
import Header from "../pages/nav-bar";
import NavDrawer from "../components/drawer";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Link } from "react-scroll";
import "../App.scss"


function MakeDoubleTeam(props) {
    return (
      <React.Fragment>
        <Grid
            container
            direction="column"
            alignItems="space-evenly"
            justify="center"
            class = "team-block-1"
        >
             <ThemeProvider theme={primaryFont}>
            <Typography
                variant="h4"
                style={{ textAlign: "center", color: lightGreen }}
            >
                {props.team}
            </Typography>
            </ThemeProvider>
            <Grid
                container
                direction="row"
                alignItems="space-evenly"
                justify="center"
            >
                <Grid item class ="team-block-2">
                <img src ="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg" height="200px"></img>
                </Grid>
                <Grid item class ="team-block-2">
                <img src ="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg" height="200px"></img>
                </Grid>
            </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  function MakeSingleTeam(props) {
    return (
      <React.Fragment>
        <ThemeProvider theme={primaryFont}>
        <Typography
            variant="h5"
            style={{ textAlign: "center", color: lightGreen }}
        >
            {props.team}
        </Typography>
        </ThemeProvider> 
        <br></br> 
        <img src ="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg" 
        height="250px"
        textAlign="center"
        
        ></img>

      </React.Fragment>
    );
  }


class Team extends Component {
    render(){
        return(
        <div style={{ margin: "auto" }} className="team">
            <div>
            <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
                <Header />
                <ThemeProvider theme={primaryFont}>
                <Typography
                    variant="h2"
                    style={{ textAlign: "center", color: esteemGreen }}
                >
                    Meet Team Esteem
                </Typography>
               
                </ThemeProvider> 

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                  
                   
                    <Grid class ="team-block">
                    <MakeSingleTeam 
                         team = "Faculty Manager"
                    />
                    </Grid>
                    <Grid>
                        <MakeDoubleTeam
                            team = "Student Team"
                    />
                    </Grid>
                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Architecture"
                        />
                    </Grid>


                    <Grid class ="team-block" >
                        <MakeSingleTeam 
                            team = "Interior Design"
                        />
                    </Grid>
                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Structural"
                        />
                    </Grid>
                    <Grid class ="team-block" >
                        <MakeSingleTeam 
                            team = "Landscaping"
                        />
                    </Grid>
                    
                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Sponsorship "
                        />
                    </Grid>


                    <Grid >
                        <MakeDoubleTeam 
                             team = "Renewables"
                        />
                    </Grid>
                    <Grid class ="team-block" >
                        <MakeSingleTeam 
                            team = "Sensors & Software"
                        />
                    </Grid>
                    <Grid>
                        <MakeDoubleTeam
                            team = "Windcatcher"
                    />
                    </Grid>
                    <Grid class ="team-block">
                    <MakeSingleTeam 
                         team = "Communications"
                    />
                    </Grid>
                    <Grid >
                        <MakeDoubleTeam 
                             team = "Audio/Visual"
                        />
                    </Grid>


                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Health & Safety"
                        />
                    </Grid>
                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Building Services"
                        />
                    </Grid>
                    <Grid class ="team-block" >
                        <MakeSingleTeam 
                            team = "Building Modelling"
                        />
                    </Grid>
                    

                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Recruitment & HR"
                        />
                    </Grid>
                    <Grid class ="team-block">
                        <MakeSingleTeam 
                            team = "Newsletter"
                        />
                    </Grid>
                    <Grid class ="team-block" >
                        <MakeSingleTeam 
                            team = "Construction"
                        />
                    </Grid>


                    <Grid class ="team-block" >
                        <MakeSingleTeam 
                            team = "Quantity Surveying"
                        />
                    </Grid>


                </Grid>
            </Typography>
            </div>
        </div>
        );
    }

}

export default Team;
