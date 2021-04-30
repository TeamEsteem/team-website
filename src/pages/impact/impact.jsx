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


class StaggeredList extends React.Component {
    getItems() {
        return ["Sustainability","Future","Innovation"," Clean Energy","Mobility","Smart Solutions","Happiness"]
    }
    
    render() {
        const items = this.getItems();
        
        return (
            <div>
                <ul className="list">
                    <ReactCSSTransitionGroup transitionName="slide-up" transitionAppear={true}>
                        {items.map((item, i) => {
                            return <li key={i} className="pillar-item" style={{"transitionDelay": `${ i * .05 }s` }}>{item}</li>;
                        })}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}



export default class Impact extends Component {
  render() {
    return (

      <div className="impact">
        <div>
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
    );
  }
}

// export default Impact;
