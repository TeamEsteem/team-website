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
class Landing extends Component {
  render() {
    return (
      <div>
        {/* <img src={Logo} alt="logos" width="70%"></img> */}
        <p style={{ float: "right", color: white }}>The Landing Page!</p>
      </div>
    );
  }
}

export default Landing;
