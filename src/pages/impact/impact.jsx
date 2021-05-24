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
                              <li key={i} className="pillar-item" id={`pillar-${i}`} style={{"transitionDelay": `${ i * .05 }s` }}  onClick={() => {this.props.renderDetails(i)}}>
                                {item}
                              </li>
                              </ThemeProvider>
                        })}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}




export default class Impact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Sustainability",
      para: "our house will be built from a broad range of environmentally friendly construction materials. From cross-laminated timber to  woodfibre insulation, every element of the design is designed to minimise energy and water consumption, helping to downsize the carbon footprint of the house occupants. "
    }
  }

  renderDetails = (id) => {
    if(id==0){
      this.setState({ 
        title: "Sustainability",
        para: "our house will be built from a broad range of environmentally friendly construction materials. From cross-laminated timber to  woodfibre insulation, every element of the design is designed to minimise energy and water consumption, helping to downsize the carbon footprint of the house occupants. "
      });
     }

    else if(id==1){
      this.setState({ 
        title: "Future",
        para:"with building services developing along several exciting technological frontiers, we are eager to incorporate as much futuristic tech into our design as possible. From voice activated appliances to a windcatcher made from 3D printed concrete, Team ESTEEM are not afraid to think outside the box when it comes to embracing the technology of tomorrow."
      });
    }

    else if(id==2){
      this.setState({ 
        title: "Innovation",
        para: "at the heart of our home lies our steadfast commitment to innovation in architectural design. Through our collaboration with industry and academic partners, we have equipped our building with cutting-edge renewable energy technology such as bifacial solar panels and bespoke water heating systems. "
      });
    }

    else if(id==3){
      this.setState({ 
        title: "Clean Energy",
        para: "our dedicated renewables sub-team have worked tirelessly to develop the electrical generation systems that will power our competition build. Photovoltaic panels and solar-thermal devices are expertly woven into the design of the house, ensuring that our submission achieves the critical net zero carbon output. "
      });
    }

    else if(id==4){
      this.setState({ 
        title: "Mobility",
              para: "our home has been designed to facilitate sustainable travel using electric vehicles, an essential feature of any nation’s efforts to achieve decarbonisation. Our house itself is characterised by its mobility, designed for rapid assembly and disassembly with a minimal resultant impact on its structural integrity. "
      });
    }

    else if(id==5){
      this.setState({ 
        title: "Smart Solutions",
        para: "fit with an intelligent and intuitive energy management system that allows users to fine-tune essential parameters of the interior environment, our house exemplifies “smart”. Interactive panels and voice-controlled systems provide a high-tech solution to the question of customisability, maximising user comfort in the home. "
      }); 
    }

    else if(id==6){
      this.setState({ 
        title: "Happiness",
        para: "most importantly, our house is designed to be a home. Our blend of technology and artistic interior design ensures the user experience is at the heart of our build, with each room, feature and space designed for holistic integration with the Team ESTEEM ethos of comfort and homeliness.” "
      });
    }
 }

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
              <StaggeredList renderDetails={this.renderDetails}/>
        </div>
      
      <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="centre"
        >
        <div className="pillar-details-1">   

          <div style={{ margin: "auto" }}>
            <Grid class="pillar-block-1">
              <ThemeProvider theme={primaryFont}>
                <Typography
                  variant="h3"
                  style={{ textAlign: "center", color: lightGreen }}
                >
                  {this.state.title}
                </Typography>
              </ThemeProvider>
              <br></br>
              <ThemeProvider theme={secondaryFont}>
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", color: white }}
                >
                  {this.state.para}
                </Typography>
              </ThemeProvider>
            
            </Grid>
          </div>     
        </div>
      </Grid>

     
    </div>
    );
  }
}

// export default Impact;
