import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ReactThreeFbxViewer from "react-three-fbx-viewer";
import { esteemGreen } from "../../components/colors";
import fbxUrl from "./sdmehouse-architecture 1.fbx";
// let fbxUrl = require("./Dragon 2.5_fbx.fbx");

export default class App extends Component {
  onLoad(e) {
    console.log(e);
  }

  onError(e) {
    console.log(e);
  }
  render() {
    let cameraPosition = {
      x: 0,
      y: -150,
      z: 80,
    };
    return (
      <Box>
        <div
          style={{ background: esteemGreen, width: "600px", height: "500px" }}
        >
          Hey
          <ReactThreeFbxViewer
            cameraPosition={cameraPosition}
            backgroundColor={esteemGreen}
            url={fbxUrl}
            onLoading={this.onLoad}
            onError={this.onError}
            style={{ width: "600px", height: "500px" }}
          />
        </div>
      </Box>
    );
  }
}
