import React, { Component } from "react";
import "../../index.css";
import Header from "../nav-barV2";
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../../components/colors";
import { primaryFont, secondaryFont } from "../../components/fonts";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PinDropSharp } from "@material-ui/icons";


class StaggeredList extends React.Component {
    getItems() {
        return ["Sustainability","Future","Innovation"," Clean Energy","Mobility","Smart Solutions","Happiness"]
    }
    
    render() {
        const items = this.getItems();
        
        return (
            <div align="left">
                <ul className="pillar-list">
                    <ReactCSSTransitionGroup transitionName="slide-up" transitionAppear={true}>
                        {items.map((item, i) => {
                            return <ThemeProvider theme={secondaryFont}>
                              <li key={i} className="pillar-item" id={`pillar-${i}`} style={{"transitionDelay": `${ i * .05 }s` }}>{item}</li>
                              </ThemeProvider>
                        })}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}


function FormColumn(props) {

  if(props.tag =="primary"){
    return (
      <React.Fragment>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        wrap="nowrap" 
        spacing={2}
          >
          <Grid>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#009877" }}
              >
                {props.title}
              </Typography>
            </ThemeProvider>
          </Grid>

          <Grid item xs>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h5"
                style={{ color: darkGrey }}
              >
              
                {props.para}
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  else{
    return (
      <React.Fragment>
        <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
        wrap="nowrap" 
        spacing={2}
          >
          <Grid>
            <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: "#e7e3e3" }}
              >
                {props.title}
              </Typography>
            </ThemeProvider>
          </Grid>

          <Grid item xs>
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h5"
                style={{ color: darkGrey }}
              >
              
                {props.para}
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  
}


function MakePillarDetails(props){
  if(props.tag == "primary"){
    return(
      <div style={{ margin: "auto" }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="centre"
        >
        <Grid>
          <img
            src="https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/ramiz-dedakovic-jerh2nj1xwy-unsplash.jpg"
            height="300px"
            align="centre"
          ></img>
        </Grid>
    
        <Grid>
        <FormColumn 
          title = {props.title}
          para = {props.para}
          tag = {props.tag}
        />
        </Grid>
      </Grid>
      </div>
    );
  }
  else{
    return(
      <div style={{ margin: "auto" }}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="centre"
        >
  
        <Grid>
        <FormColumn 
          title = {props.title}
          para = {props.para}
        />
        </Grid>
        <Grid>
          <img
            src="https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2012/ramiz-dedakovic-jerh2nj1xwy-unsplash.jpg"
            height="300px"
            align="centre"
          ></img>
        </Grid>
    
      </Grid>
      </div>
    );
  }
}


function MakeDivider1(){
  return(
    <div class="pillar-divider-1">
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
  );
}

function MakeDivider2(){
  return(
    <div class="pillar-divider-2">
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
  );
}



export default class Impact extends Component {
  render() {
    return (
      <div>
      <div className="impact">
        <div style={{backgroundColor:"#e7e3e3"}}>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Header />
          </Typography>
        </div>
        <div className="impact-head">
        <ThemeProvider theme={secondaryFont}>
              <Typography
                variant="h2"
                style={{ textAlign: "center", color: esteemGreen }}
              >
               THE PILLARS OF ESTEEM
              </Typography>
            </ThemeProvider>
        </div>
            <StaggeredList />
      </div>
      
      <div className="pillar-details-1">        
        <MakePillarDetails
          title="Sustainability"
          para="our house will be built from a broad range of environmentally friendly construction materials. From cross-laminated timber to  woodfibre insulation, every element of the design is designed to minimise energy and water consumption, helping to downsize the carbon footprint of the house occupants. "
          tag="primary"
          image=""
        />
      </div>
       
      <MakeDivider1 />

      <div className="pillar-details-2">        
        <MakePillarDetails
          title="Future"
          para="with building services developing along several exciting technological frontiers, we are eager to incorporate as much futuristic tech into our design as possible. From voice activated appliances to a windcatcher made from 3D printed concrete, Team ESTEEM are not afraid to think outside the box when it comes to embracing the technology of tomorrow."
          tag="secondary"
          image=""
        />
      </div>

      <MakeDivider2 />

      <div className="pillar-details-1">        
        <MakePillarDetails
          title="Innovation"
          para="at the heart of our home lies our steadfast commitment to innovation in architectural design. Through our collaboration with industry and academic partners, we have equipped our building with cutting-edge renewable energy technology such as bifacial solar panels and bespoke water heating systems. "
          tag="primary"
          image=""
        />
      </div>
       
      <MakeDivider1 />

      <div className="pillar-details-2">        
        <MakePillarDetails
          title="Clean Energy"
          para="our dedicated renewables sub-team have worked tirelessly to develop the electrical generation systems that will power our competition build. Photovoltaic panels and solar-thermal devices are expertly woven into the design of the house, ensuring that our submission achieves the critical net zero carbon output. "
          tag="secondary"
          image=""
        />
      </div>
      
      <MakeDivider2 />

      <div className="pillar-details-1">        
        <MakePillarDetails
          title="Mobility"
          para="our home has been designed to facilitate sustainable travel using electric vehicles, an essential feature of any nation’s efforts to achieve decarbonisation. Our house itself is characterised by its mobility, designed for rapid assembly and disassembly with a minimal resultant impact on its structural integrity. "
          tag="primary"
          image=""
        />
      </div>
       
      <MakeDivider1 />

      <div className="pillar-details-2">        
        <MakePillarDetails
          title="Smart Solutions"
          para="fit with an intelligent and intuitive energy management system that allows users to fine-tune essential parameters of the interior environment, our house exemplifies “smart”. Interactive panels and voice-controlled systems provide a high-tech solution to the question of customisability, maximising user comfort in the home. "
          tag="secondary"
          image=""
        />
      </div>
      
      <MakeDivider2 />

      <div className="pillar-details-1">        
        <MakePillarDetails
          title="Happiness"
          para="most importantly, our house is designed to be a home. Our blend of technology and artistic interior design ensures the user experience is at the heart of our build, with each room, feature and space designed for holistic integration with the Team ESTEEM ethos of comfort and homeliness.” "
          tag="primary"
          image=""
        />
      </div>   
     
    </div>
    );
  }
}

// export default Impact;
