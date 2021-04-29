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

export default class Impact extends Component {
  render() {
    return (
      <div className="impact">
        <div>
          <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
            <Header />
          </Typography>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="impact-body">
            Test
        </div>
      </div>
    );
  }
}

// export default Impact;
