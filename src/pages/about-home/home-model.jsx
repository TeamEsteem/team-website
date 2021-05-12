import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ReactThreeFbxViewer from "react-three-fbx-viewer";
import { esteemGreen } from "../../components/colors";
import fbxUrl from "./Dragon 2.5_fbx.fbx";
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
      x: 500,
      y: 400,
      z: 100,
    };
    return (
      <Box>
        Hey
        <div style={{ background: esteemGreen }}>
          <ReactThreeFbxViewer
            cameraPosition={cameraPosition}
            url={fbxUrl}
            onLoading={this.onLoad}
            onError={this.onError}
          />
        </div>
      </Box>
    );
  }
}
