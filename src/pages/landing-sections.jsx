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
import { Grid, Typography, ThemeProvider, Box, Card, Button } from "@material-ui/core";
import { primaryFont, secondaryFont } from "../components/fonts";
import "../App.scss";
import LaunchIcon from '@material-ui/icons/Launch';
import { transform } from "framer-motion";

function FormColumn() {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid class="mission-block">
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="h3"
              style={{ textAlign: "center", color: lightGreen }}
            >
              OUR IMPACT
            </Typography>
          </ThemeProvider>
          <br></br>
          <ThemeProvider theme={secondaryFont}>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: white }}
            >
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit, sed do eiusmod tempor <br></br>
              incididunt ut labore et dolore magna aliqua. <br></br>
            </Typography>
          </ThemeProvider>
          <br></br>
        </Grid>
        <br></br>
        <br></br>
        <Grid class="mission-block">
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="h3"
              style={{ textAlign: "center", color: lightGreen }}
            >
              OUR RESEARCH
            </Typography>
          </ThemeProvider>
          <br></br>
          <ThemeProvider theme={secondaryFont}>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: white }}
            >
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit, sed do eiusmod tempor <br></br>
              incididunt ut labore et dolore magna aliqua. <br></br>
            </Typography>
          </ThemeProvider>
          <br></br>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

class Section1V2 extends Component {
  render() {
    return (
      <>
        {/* <Box m={-10} /> */}
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: "#202020" }}
          >
            What do <span style={{ color: "#009877" }}>ESTEEM</span> do?
          </Typography>
        </ThemeProvider>
        <br></br>
        <Grid container direction="row" style={{ maxWidth: "1250px" }}>
          <Box m={2} />
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
                    We are, not only, Heriot-Watt University’s official entrant into the Solar Decathlon Middle East 2020 competition, but also the sole UK finalist! This contest is integrated with the World Expo in Dubai which envisions an estimated 25 million visitors.
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
                      src="/images/team.jpg"
                      alt=""
                    // height="500px"
                    ></img>
                  </Box>
                  <br></br>
                  <p>
                    Our goal is to design &#38; build a multifunctional solar powered house in collaboration with industry and academia. Thus, the design ethos emphasises sustainability &#38; innovative wall-to-wall constructional elements with the aspiration to achieve the most eco-friendly build. Our smart home aims to withstand the high temperatures, humidity &#38; dusty conditions prevalent in the Middle East.
                  </p>
                  <br></br>
                  <p>
                    Headquartered in Edinburgh, we are proud to represent the Scottish Construction and Building Services sectors on the international stage with our incorporation of materials and designs from several sponsors; local & worldwide.
                  </p>
                </div>
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </>
    );
  }
}

class Section2V2 extends Component {
  render() {
    return (
      <>
        <Box m={-2} />
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: "#202020" }}
          >
            Who are <span style={{ color: "#009877" }}>ESTEEM</span>?
          </Typography>
        </ThemeProvider>
        <Grid container direction="row" style={{ maxWidth: "1250px" }}>
          <Box
            style={{
              background: white,
              borderRadius: "20px",
              maxWidth: "35em",
              padding: "30px",
              margin: "auto",
            }}
          >
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em" }}>
                <div className="justify">
                  <p>
                    We are Team ESTEEM from Heriot Watt University. 120 students,
                    5 academic schools, 3 campuses and 1 cohesive vision driving
                    us to build a better world.
                  </p>
                  <br></br>
                  <p>
                    Our members stem from a broad range of academic disciplines:
                    <br /><br />
                    <ul>
                      <li>Architectural Engineering</li>
                      <li>Civil/Structural Engineering</li>
                      <li>Mechanical Engineering</li>
                      <li>Computer Science</li>
                      <li>Data Science</li>
                      <li>Marketing &#38; Business Management</li>
                      <li>Urban Planning</li>
                      <li>Construction Project Management</li>
                    </ul>
                  </p>
                  <br></br>
                  <p>
                    We are as diverse as we are creative and it's drawing from
                    this international pool of passion and talent that drives our
                    success.
                  </p>
                </div>
              </Typography>
            </ThemeProvider>
          </Box>
          <Box m={2} />
          <Box
            style={{
              background: white,
              borderRadius: "20px",
              maxWidth: "500px",
              maxHeight: "600px",
              padding: "10px",
              // padding: "2%",
            }}
          >
            <img
              // className="landing-img"
              style={{
                maxWidth: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src="/images/solariskit - kelvin points.jpg"
              alt=""
            // height="500px"
            ></img>
          </Box>
        </Grid>
      </>
    );
  }
}

class Section3V2 extends Component {
  render() {
    return (
      <>
        <Box m={-8} />
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: "#202020" }}
          >
            <span style={{ color: "#009877" }}>Our</span> Mission
          </Typography>
        </ThemeProvider>
        <Grid container direction="row" style={{ maxWidth: "1250px" }}>
          <Box
            style={{
              // background: white,
              borderRadius: "20px",
              maxWidth: "35em",
              padding: "30px",
              margin: "auto",
            }}
          >
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em" }}>
                <div className="justify">
                  <p>
                    At Team ESTEEM we draw from a range of academic backgrounds
                    and our members aspire to apply their years of classroom
                    learning to an interdisciplinary project that will change the
                    world. We are the generation that will live to see the
                    consequences of climate change. Motivated, eager and ready to
                    act, each of us is committed to bringing together science,
                    technology, architecture and innovative thinking to develop
                    ourselves as professionals and bring about positive ecological
                    change.
                  </p>
                  <br></br>
                  <p>
                    With the SDME, we are ready to take on the biggest challenge
                    of all – becoming thought leaders in the green recovery and
                    building the better, greener world of tomorrow.
                  </p>
                </div>
              </Typography>
            </ThemeProvider>
          </Box>
          <Box m={2} />
          <Box
            style={{
              // background: grey,
              borderRadius: "20px",
              maxWidth: "500px",
              maxHeight: "600px",
              // padding: "20px",
              padding: "2%",
            }}
          >
            <img
              // className="landing-img"
              style={{
                maxWidth: "100%",
                maxHeight: "600px",
                borderRadius: "20px",
              }}
              src="/images/csic - scott wood wide cropped.jpg"
              alt=""
            // height="500px"
            ></img>
          </Box>
        </Grid>
      </>
    );
  }
}

class Section4 extends Component {
  render() {
    return (
      <>
        <Box m={-2} />
        <ThemeProvider theme={secondaryFont}>
          <Typography
            variant="h3"
            style={{ textAlign: "center", color: "#202020" }}
          >
            Support <span style={{ color: "#009877" }}>Our</span> Journey!
          </Typography>
        </ThemeProvider>
        <Grid container direction="row" style={{ maxWidth: "1250px" }}>
          <Box
            style={{
              background: white,
              borderRadius: "20px",
              maxWidth: "35em",
              padding: "30px",
              margin: "auto",
            }}
          >
            <ThemeProvider theme={primaryFont}>
              <Typography variant="body1" style={{ fontSize: "1em" }}>
                <div className="justify">
                  <p>
                    We're counting on the community to support us in our journey to the World Expo in Dubai. In return for your contributions we are offering exclusive perks ranging from your name on our website to visiting our house in Dubai!
                  </p>
                  <br></br>
                  <p>
                    If you would like to be a part of this journey, please consider donating to our IndieGoGo campaign!
                  </p>
                  <br></br>

                  <Button
                    variant="outlined"
                    size="large"
                    style={{
                      padding: "5px 30px 5px 30px",
                      color: esteemGreen,
                      margin: "auto",
                      marginBottom: "90px",
                      border: "2px solid" + esteemGreen,
                      borderRadius: "20px",
                    }}
                    startIcon={<LaunchIcon />}
                  >
                    <a
                      // activeClass="active"
                      // to="section1"
                      // spy={true}
                      // smooth={true}
                      // duration={1000}
                      href="https://www.indiegogo.com/projects/team-esteem-solar-powered-timber-home"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative",
                        textDecoration: "none",
                        color: esteemGreen,
                      }}
                    >
                      Contribute
                    </a>
                  </Button>
                </div>
              </Typography>
            </ThemeProvider>
          </Box>
          <Box m={2} />
          <Box
            style={{
              background: white,
              borderRadius: "20px",
              maxWidth: "500px",
              maxHeight: "600px",
              padding: "10px",
              // padding: "2%",
            }}
          >
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PT8aveu2Asg" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Grid>
      </>
    );
  }
}

export { Section1V2, Section3V2, Section2V2, Section4 };

// class Section1 extends Component {
//   render() {
//     return (
//       <div id="xyz">
//         <div style={{ margin: "auto" }} id="section1">
//           {/* <Grid
//             container
//             direction="column"
//             justify="space-evenly"
//             alignItems="center"
//             display="flex"
//             margin="auto"
//           > */}
//           <Grid item class="wwd-block" id="landing-bottom">
//             <ThemeProvider theme={secondaryFont}>
//               <Typography
//                 variant="h3"
//                 style={{ textAlign: "center", color: "#202020" }}
//               >
//                 Who are <span style={{ color: "#009877" }}>ESTEEM</span>?
//               </Typography>
//             </ThemeProvider>
//             <br></br>
//             <ThemeProvider theme={primaryFont}>
//               <Typography
//                 variant="body1"
//                 style={{ fontSize: "1em", textAlign: "right" }}
//               >
//                 <Grid container spacing={2}>
//                   <Grid
//                     item
//                     xs={12}
//                     style={{
//                       display: "flex",
//                       marginLeft: "10px",
//                       justifyContent: "left",
//                     }}
//                   >
//                     <div className="section-block">
//                       <div className="section-block-text">
//                         <p>
//                           We are Team ESTEEM from Heriot Watt University. 130
//                           students, 5 academic schools, 3 campuses and 1
//                           cohesive vision driving us to build a better world.
//                         </p>
//                         <br></br>
//                         <p>
//                           Our members stem from a broad range of academic
//                           disciplines – Architectural, Structural, Electrical,
//                           Mechanical, Civil, Chemical Engineering; Computer
//                           Science, Data Science, Marketing and Business
//                           Management; Urban Planning, Construction Project
//                           Management.
//                         </p>
//                         <br></br>
//                         <p>
//                           We are as diverse as we are creative, and it is
//                           drawing from this international pool of passion and
//                           talent that drives our success.
//                         </p>
//                       </div>
//                       {/* <Grid item xs={12}> */}
//                       <img
//                         className="landing-img"
//                         style={{}}
//                         src=""
//                         height="500px"
//                       ></img>
//                       {/* </Grid> */}
//                     </div>
//                   </Grid>
//                 </Grid>
//               </Typography>
//             </ThemeProvider>
//           </Grid>
//           {/* </Grid> */}
//           <br></br>
//           <br></br>
//         </div>
//       </div>
//     );
//   }
// }

// export default Section1V2;
// class Section2 extends Component {
//   render() {
//     return (
//       <div style={{ margin: "auto" }}>
//         <Grid
//           container
//           direction="row"
//           justify="space-evenly"
//           alignItems="center"
//         >
//           <Grid item class="wwd-block">
//             <ThemeProvider theme={secondaryFont}>
//               <Typography
//                 variant="h3"
//                 style={{ textAlign: "center", color: "#202020" }}
//               >
//                 What do <span style={{ color: "#009877" }}>ESTEEM</span> do?
//               </Typography>
//             </ThemeProvider>
//             <br></br>
//             <ThemeProvider theme={primaryFont}>
//               <Typography
//                 variant="body1"
//                 style={{ color: darkGrey, fontSize: "1em" }}
//               >
//                 <div className="section-block">
//                   <img
//                     className="landing-img"
//                     style={{}}
//                     src="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg"
//                     height="500px"
//                   ></img>
//                   <div className="section-block-text">
//                     <p>
//                       We are Heriot Watt University’s official entrant to the
//                       Solar Decathlon Middle East 2020 competition, a collegiate
//                       contest integrated with the 2020 World Expo in Dubai which
//                       is expected to attract an estimated 25 million people.
//                     </p>
//                     <br></br>
//                     <p>
//                       Our goal is to design and build a multifunctional solar
//                       powered house in collaboration with industry and academia.
//                       Our design ethos emphasises sustainability, and our
//                       construction will feature wall-to-wall innovation in our
//                       efforts to achieve the most eco-friendly build that can
//                       withstand the high temperature, high humidity and dusty
//                       conditions present in the Middle East.
//                     </p>
//                     <br></br>
//                     <p>
//                       Headquartered in Edinburgh, we are proud to represent the
//                       Scottish Construction and Building Services sectors on the
//                       international stage with our incorporation of materials
//                       and designs from several local sponsors.
//                     </p>
//                   </div>
//                 </div>
//               </Typography>
//             </ThemeProvider>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// class Section3 extends Component {
//   render() {
//     return (
//       <div style={{ margin: "auto" }} id="section3">
//         <Grid
//           container
//           direction="row"
//           justify="space-evenly"
//           alignItems="center"
//         >
//           <Grid item class="wwd-block" id="landing-bottom">
//             <ThemeProvider theme={secondaryFont}>
//               <Typography
//                 variant="h3"
//                 style={{ textAlign: "center", color: "#202020" }}
//               >
//                 <span style={{ color: "#009877" }}>Our</span> Mission
//               </Typography>
//             </ThemeProvider>
//             <br></br>
//             <ThemeProvider theme={primaryFont}>
//               <Typography variant="body1" style={{ fontSize: "1em" }}>
//                 <div className="section-block">
//                   <div className="section-block-text">
//                     <p>
//                       At Team ESTEEM we draw from a range of academic
//                       backgrounds and our members aspire to apply their years of
//                       classroom learning to an interdisciplinary project that
//                       will change the world. We are the generation that will
//                       live to see the consequences of climate change. Motivated,
//                       eager and ready to act, each of us is committed to
//                       bringing together science, technology, architecture and
//                       innovative thinking to develop ourselves as professionals
//                       and bring about positive ecological change.
//                     </p>
//                     <br></br>
//                     <p>
//                       With the SDME, we are ready to take on the biggest
//                       challenge of all – becoming thought leaders in the green
//                       recovery and building the better, greener world of
//                       tomorrow.
//                     </p>
//                   </div>
//                   <img
//                     className="landing-img"
//                     style={{}}
//                     src="https://i.pinimg.com/564x/9a/be/5f/9abe5f0ad84b083a1a52dac183c7bc89.jpg"
//                     height="500px"
//                   ></img>
//                 </div>
//               </Typography>
//             </ThemeProvider>
//           </Grid>
//         </Grid>
//         <br></br>
//         <br></br>
//       </div>
//     );
//   }
// }
