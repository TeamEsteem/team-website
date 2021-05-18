import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import SDMEhouse from "./sdmehouse-architecture 1.glb";
import "@google/model-viewer";
import { esteemGreen } from "../../components/colors";
import "./homestyles.css";
import Header from "../nav-barV2";
class HomeModelV2 extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#e7e3e3" }}>
        <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
          <Header />
        </Typography>
        <Box style={{ background: esteemGreen, height: "auto" }}>
          <model-viewer
            src={SDMEhouse}
            camera-controls
            shadow-intensity="2"
            auto-rotate
            camera-orbit="35deg 135deg 1m"
          >
            <div class="progress-bar hide" slot="progress-bar">
              <div class="update-bar"></div>
            </div>
          </model-viewer>
        </Box>
      </div>
    );
  }
}

export default HomeModelV2;
