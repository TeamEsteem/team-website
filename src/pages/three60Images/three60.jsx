import { Box, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { esteemGreen, white } from "../../components/colors";
import { primaryFont } from "../../components/fonts";
import { Pannellum } from "pannellum-react"
import image from "../../assets/images/three60panoramas/p2-scaled.jpg"
import Button from "@material-ui/core/Button";
import ArrowBack from '@material-ui/icons/ArrowBack';
import EsteemLogo from "../../assets/images/ESTEEM/Esteem Logo Full White.png";

class Three60 extends Component {
  render() {
    return (
      <>
        <div
          style={{ position: "absolute", width: "100vw", backgroundColor: "#009877", zIndex: "10", opacity: "85%", padding: "0 0 10px 0" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", margin: "10px 0" }}>
            <a
              href="/"
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
                  padding: "5px 0 5px 10px",
                  color: white,
                  margin: "auto",
                  border: "2px solid" + white,
                  borderRadius: "20px",
                }}
                startIcon={<ArrowBack />}
              ></Button>
            </a>
            {/* <img src={EsteemLogo} style={{maxHeight: "5vh"}} alt="" /> */}
            <p style={{
              color: white,
              fontWeight: "bold",
              fontSize: "large",
            }}>
              Our Work Environments
            </p>
          </div>
          <div style={{display:"flex", width:"100%", padding:"0 10px"}}>
            <p
              style={{ color: white, margin: "auto", textAlign: "center" }}
            >
              Look around the places that we've worked at. Hover over info icons to read more.
            </p>
          </div>
        </div>

        <div>
          <Pannellum
            width="100vw"
            height="100vh"
            title="CSIC Innovation Factory"
            image={image}
            pitch={0}
            yaw={120}
            hfov={100}
            autoLoad
            autoRotate={-2}
            showFullscreenCtrl={false}
            showZoomCtrl={false}
            showControls={false}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={180}
              yaw={52}
              text="Automatic trimming saw cuts the timber to the correct size"
            />
            <Pannellum.Hotspot
              type="info"
              pitch={200}
              yaw={50}
              text="Timber cut to size, ready to be assembled"
            />
            <Pannellum.Hotspot
              type="info"
              pitch={184}
              yaw={-50}
              text="Completed CLT panels. These will be cut to the right size"
            />
            <Pannellum.Hotspot
              type="info"
              pitch={181}
              yaw={-80}
              text="Vacuum press uses the pressure of the atmosphere to evenly press the timber together, pulling out air bubbles in the process"
            />
            <Pannellum.Hotspot
              type="info"
              pitch={176}
              yaw={-84}
              text="This machine moves over the timber, laying a bead of glue"
            />
          </Pannellum>
        </div>
      </>
    );
  }
}

// class Backup extends Component {
//   render() {
//     return (
//       <>
//         <Grid
//           container
//           alignContent="center"
//           direction="column"
//           justify="center"
//           style={{ backgroundColor: esteemGreen }}
//         >
//           <Grid item>
//             <ThemeProvider theme={primaryFont}>
//               <Typography
//                 variant="h3"
//                 style={{
//                   textAlign: "center",
//                   color: white,
//                   margin: "150px 0 0 0",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Our Work Environment
//               </Typography>
//               <Typography
//                 variant="body2"
//                 style={{
//                   textAlign: "center",
//                   color: white,
//                   margin: "25px 0 100px 0",
//                   maxWidth: "1000px",
//                   fontSize: "1.5em",
//                 }}
//               >
//                 Have an immersive look at the places we've worked in to construct the prototype!
//               </Typography>
//             </ThemeProvider>
//           </Grid>
//         </Grid>
//         {/* <div class="landing-bottom" style={{ backgroundColor: esteemGreen }}>
//           <svg
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//               style={{ fill: white }}
//             ></path>
//           </svg>
//         </div> */}
//         <Box
//           height={"70%"}
//         >
//           <Pannellum
//             width="100%"
//             height="70vh"
//             image={image}
//             pitch={10}
//             yaw={180}
//             hfov={110}
//             autoLoad
//             onLoad={() => {
//               console.log("panorama loaded");
//             }}
//           >
//             <Pannellum.Hotspot
//               type="info"
//               pitch={11}
//               yaw={-167}
//               text="Info Hotspot Text 3"
//             />
//             <Pannellum.Hotspot
//               type="info"
//               pitch={31}
//               yaw={-107}
//               text="Info Hotspot Text 4"
//             />
//           </Pannellum>
//         </Box>
//       </>
//     );
//   }
// }

export default Three60;
