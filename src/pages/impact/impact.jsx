import React, { Component } from "react";
import "../../index.css";
import Header from "../nav-barV2";
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
  Card,
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
import Footer from "../footer";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { PinDropSharp } from "@material-ui/icons";

// class CardContainer extends React.Component{
//   render() {
//     var cards = [];
//     for(var i = 1; i <= this.props.numCards; i += 1){
//         cards.push(<CardItem idNum={i}  />);
//     }
//     return (
//         <div className="card-flex">{cards}</div>
//     );
//   }
// }

// class CardItem extends React.Component{
//   render() {
//     return(
//         <div id={'card-' + this.props.idNum} className="card-flex-item"></div>
//     );
// }
// }

// class CardContent extends React.Component{
//   render(){
//       return(
//           <div className="card-flex-wrapper">
//               <div className="card-flex-image">
//                   <img src={this.props.imgSrc} alt="img placeholder" />
//               </div>
//               <div className="card-flex-content">
//                   <h3>{this.props.headerText}</h3>
//                   <p>{this.props.description}</p>
//                   <a href={this.props.url} className="card-flex-button btn-block">Button</a>
//               </div>
//           </div>
//       );
//   }
// }

class StaggeredList extends React.Component {
  getItems() {
    return [
      "Sustainability",
      "Future",
      "Innovation",
      " Clean Energy",
      "Mobility",
      "Smart Solutions",
      "Happiness",
    ];
  }

  render() {
    const items = this.getItems();

    return (
      <div align="left">
        <ul className="pillar-list">
          <ReactCSSTransitionGroup
            transitionName="slide-up"
            transitionAppear={true}
          >
            {items.map((item, i) => {
              return (
                <ThemeProvider theme={primaryFont}>
                  {/* <li key={i} className="pillar-item" id={`pillar-${i}`} style={{ "transitionDelay": `${i * .05}s` }} onClick={() => { this.props.renderDetails(i) }}> */}
                  <li
                    key={i}
                    className="pillar-item"
                    id={`pillar-${i}`}
                    style={{ transitionDelay: `${i * 0.05}s` }}
                    onClick={() => {
                      this.props.renderDetails(i);
                    }}
                  >
                    {item}
                  </li>
                </ThemeProvider>
              );
            })}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

class Impact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Sustainability",
      para: "our house will be built from a broad range of environmentally friendly construction materials. From cross-laminated timber to  woodfibre insulation, every element of the design is designed to minimise energy and water consumption, helping to downsize the carbon footprint of the house occupants. ",

      data: [
        { id: "1", name: "Red", color: "#f44336", span: 1 },
        { id: "2", name: "Pink", color: "#E91E63", span: 2 },
        { id: "3", name: "Purple", color: "#9C27B0", span: 3 },
        { id: "4", name: "Deep Purple", color: "#673AB7", span: 1 },
        { id: "5", name: "Indigo", color: "#3F51B5", span: 1 },
        { id: "6", name: "Blue", color: "#2196F3", span: 1 },
        { id: "7", name: "Light Blue", color: "#03A9F4", span: 3 },
        { id: "8", name: "Cyan", color: "#00BCD4", span: 2 },
        { id: "9", name: "Teal", color: "#009688", span: 1 },
        { id: "10", name: "Green", color: "#4CAF50", span: 1 },
        { id: "11", name: "Light Green", color: "#8BC34A", span: 2 },
        { id: "12", name: "Lime", color: "#CDDC39", span: 3 },
        { id: "13", name: "Yellow", color: "#FFEB3B", span: 2 },
        { id: "14", name: "Amber", color: "#FFC107", span: 1 },
        { id: "15", name: "Orange", color: "#FF5722", span: 3 },
      ],
    };
  }

  renderDetails = (id) => {
    if (id == 0) {
      this.setState({
        title: "Sustainability",
        para: "our house will be built from a broad range of environmentally friendly construction materials. From cross-laminated timber to  woodfibre insulation, every element of the design is designed to minimise energy and water consumption, helping to downsize the carbon footprint of the house occupants. ",
      });
    } else if (id == 1) {
      this.setState({
        title: "Future",
        para: "with building services developing along several exciting technological frontiers, we are eager to incorporate as much futuristic tech into our design as possible. From voice activated appliances to a windcatcher made from 3D printed concrete, Team ESTEEM are not afraid to think outside the box when it comes to embracing the technology of tomorrow.",
      });
    } else if (id == 2) {
      this.setState({
        title: "Innovation",
        para: "at the heart of our home lies our steadfast commitment to innovation in architectural design. Through our collaboration with industry and academic partners, we have equipped our building with cutting-edge renewable energy technology such as bifacial solar panels and bespoke water heating systems. ",
      });
    } else if (id == 3) {
      this.setState({
        title: "Clean Energy",
        para: "our dedicated renewables sub-team have worked tirelessly to develop the electrical generation systems that will power our competition build. Photovoltaic panels and solar-thermal devices are expertly woven into the design of the house, ensuring that our submission achieves the critical net zero carbon output. ",
      });
    } else if (id == 4) {
      this.setState({
        title: "Mobility",
        para: "our home has been designed to facilitate sustainable travel using electric vehicles, an essential feature of any nation’s efforts to achieve decarbonisation. Our house itself is characterised by its mobility, designed for rapid assembly and disassembly with a minimal resultant impact on its structural integrity. ",
      });
    } else if (id == 5) {
      this.setState({
        title: "Smart Solutions",
        para: "fit with an intelligent and intuitive energy management system that allows users to fine-tune essential parameters of the interior environment, our house exemplifies “smart”. Interactive panels and voice-controlled systems provide a high-tech solution to the question of customisability, maximising user comfort in the home. ",
      });
    } else if (id == 6) {
      this.setState({
        title: "Happiness",
        para: "most importantly, our house is designed to be a home. Our blend of technology and artistic interior design ensures the user experience is at the heart of our build, with each room, feature and space designed for holistic integration with the Team ESTEEM ethos of comfort and homeliness.” ",
      });
    }
  };

  render() {
    return (
      <div style={{ width: "100%" }} onScroll={this.handleScroll}>
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
        <div className="impact">
          <StaggeredList renderDetails={this.renderDetails} />
        </div>

        {/* <CardContent 
          imgSrc= "../../assets/images/sustainability.png"
          headerText="One"
          description="I'm a card and I'm first"
          url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" 
        />

        <CardContent 
          imgSrc="https://placeimg.com/640/480/nature"
          headerText="One"
          description="I'm a card and I'm first"
          url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" 
        /> */}

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
        <div class="footer-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1100 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="Footer">
          <ThemeProvider theme={primaryFont}>
            <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
              <Footer />
            </Typography>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default Impact;
