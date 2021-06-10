import React, { Component } from "react";
import "../../index.css";
import Header from "../nav-barV2";
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
import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import Footer from "../footer";

export default class Sponsors extends Component {
  render() {
    return (
      <div>
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
                style={{ textAlign: "center", color: white, margin: "150px 0 0 0", fontWeight: "bold" }}
              >
                Our Sponsors
            </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: white, margin: "25px 0 100px 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                We are proud to have the support of so many inspirational partners in our journey to World Expo 2021. Below you will see some of the cutting-edge companies and organisations that have worked with us so far.
            </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <div class="landing-bottom" style={{ backgroundColor: esteemGreen }}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              style={{ fill: white }}
            ></path>
          </svg>
        </div>

        <div className="sponsors">
          {/* <div>
            <Typography style={{ fontSize: "20px", fontWeight: "lighter" }}>
              <Header />
            </Typography>
          </div> */}
          {/* <div className="sponsors-body"> */}
          {/* Platinum Sponsors */}
          {/* 
          <div style={{ backgroundColor: "#009877", height: "500px", position: "relative", display: "flex" }}>
            <h3>
              Our Sponsors
          </h3>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              style={{ position: "absolute", bottom: "0" }}
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                style={{ fill: "#fff" }}
              ></path>
            </svg>
          </div> */}

          <ThemeProvider>
            <Typography
              variant="h4"
              style={{ textAlign: "center", color: darkGrey, fontWeight: "bold" }}
            >
              Platinum
            </Typography>
          </ThemeProvider>
          <div className="sponsors-images">
            <Grid
              container
              direction="row"
              alignItems="space-evenly"
              justify="center"
              className="sponsors-grid"
            >
              <a href="https://us.arbnco.com/" target="_blank">
                <img
                  className="sponsors-platinum-image"
                  src="/sponsors/platinum/arbnco.png"
                  alt=""
                />
              </a>

              <a href="https://www.asgcgroup.com/" target="_blank">
                <img
                  className="sponsors-platinum-image"
                  src="/sponsors/platinum/ASGC.png"
                  alt=""
                />
              </a>
              <a href="https://www.cs-ic.org/" target="_blank">
                <img
                  className="sponsors-platinum-image"
                  src="/sponsors/platinum/CSIC.png"
                  alt=""
                />
              </a>

              <a href="https://www.iesve.com/" target="_blank">
                <img
                  className="sponsors-platinum-image"
                  src="/sponsors/platinum/ies.jpg"
                  alt=""
                />
              </a>

              <a href="https://www.thorntontomasetti.com/" target="_blank">
                <img
                  className="sponsors-platinum-image"
                  src="/sponsors/platinum/thornton.png"
                  alt=""
                />
              </a>
            </Grid>
          </div>
          {/* <div class="sections-bottom"> */}

          {/* </div> */}

          {/* Gold Sponsors */}

          <ThemeProvider>
            <Typography
              variant="h4"
              style={{ textAlign: "center", color: darkGrey, fontWeight: "bold" }}
            >
              Gold
            </Typography>
          </ThemeProvider>

          <div className="sponsors-images">
            <a href="https://www.norrsken.co.uk/" target="_blank">
              <img
                className="sponsors-gold-image"
                src="/sponsors/gold/norrsken.png"
                alt=""
              />
            </a>

            <a href="https://sunamp.com/" target="_blank">
              <img
                className="sponsors-gold-image"
                src="/sponsors/gold/sunamp.png"
                alt=""
              />
            </a>

            <a href="https://www.vrcraftworks.com/" target="_blank">
              <img
                className="sponsors-gold-image"
                src="/sponsors/gold/vrcraftworks.png"
                alt=""
              />
            </a>
          </div>

          {/* Silver Sponsors */}

          <ThemeProvider>
            <Typography
              variant="h4"
              style={{ textAlign: "center", color: darkGrey, fontWeight: "bold", marginBottom: "25px" }}
            >
              Silver
            </Typography>
          </ThemeProvider>

          <div className="sponsors-images">
            <Grid
              container
              direction="row"
              alignItems="space-evenly"
              justify="center"
              className="sponsors-grid"
            >
              <a href="https://www.classofyourown.com/" target="_blank">
                <img
                  className="sponsors-silver-image"
                  src="/sponsors/silver/COYO.jpg"
                  alt=""
                />
              </a>

              <a href="https://www.hydraloop.com/" target="_blank">
                <img
                  className="sponsors-silver-image"
                  src="/sponsors/silver/hydraloop.png"
                  alt=""
                />
              </a>

              <a href="https://www.paulheatrecovery.co.uk/" target="_blank">
                <img
                  className="sponsors-silver-image"
                  src="/sponsors/silver/Paul.png"
                  alt=""
                />
              </a>
            </Grid>

            <a href="https://www.seawatersolutions.org/" target="_blank">
              <img
                className="sponsors-silver-image"
                src="/sponsors/silver/seawater.jpg"
                alt=""
              />
            </a>

            <a href="http://terratonics.ie/" target="_blank">
              <img
                className="sponsors-silver-image"
                src="/sponsors/silver/Terratonics.jpg"
                alt=""
              />
            </a>

            <a href="https://www.uponor.co.uk/" target="_blank">
              <img
                className="sponsors-silver-image"
                src="/sponsors/silver/uponor.png"
                alt=""
              />
            </a>

            <a href="https://www.lucecoplc.com/" target="_blank">
              <img
                className="sponsors-silver-image"
                src="/sponsors/silver/luceco.png"
                alt=""
              />
            </a>
          </div>

          {/* Bronze Sponsors */}

          <ThemeProvider>
            <Typography
              variant="h4"
              style={{ textAlign: "center", color: darkGrey, fontWeight: "bold", marginBottom: "25px" }}
            >
              Bronze
            </Typography>
          </ThemeProvider>

          <div className="sponsors-images">
            <Grid
              container
              direction="row"
              alignItems="space-evenly"
              justify="center"
              className="sponsors-grid"
            >
              <a href="https://www.concreative.me/" target="_blank">
                <img
                  className="sponsors-bronze-image"
                  src="/sponsors/bronze/concreative.gif"
                  alt=""
                />
              </a>

              <a href="https://www.fimer.com/" target="_blank">
                <img
                  className="sponsors-bronze-image"
                  src="/sponsors/bronze/fimer.png"
                  alt=""
                />
              </a>

              <a href="https://www.gseintegration.com/" target="_blank">
                <img
                  className="sponsors-bronze-image"
                  src="/sponsors/bronze/gse.png"
                  alt=""
                />
              </a>

              <a href="https://www.indinature.co/" target="_blank">
                <img
                  className="sponsors-bronze-image"
                  src="/sponsors/bronze/indinature.webp"
                  alt=""
                />
              </a>
            </Grid>

            <a href="https://itdotfocus.com/en/" target="_blank">
              <img
                className="sponsors-bronze-image"
                src="/sponsors/bronze/itfocus.png"
                alt=""
              />
            </a>

            <a href="https://www.rothoblaas.com/" target="_blank">
              <img
                className="sponsors-bronze-image"
                src="/sponsors/bronze/rothoblaas.jpg"
                alt=""
              />
            </a>

            <a href="https://solariskit.com/" target="_blank">
              <img
                className="sponsors-bronze-image"
                src="/sponsors/bronze/solariskit.jpg"
                alt=""
              />
            </a>

            <a href="https://www.tala.co.uk/" target="_blank">
              <img
                className="sponsors-bronze-image"
                src="/sponsors/bronze/tala.webp"
                alt=""
              />
            </a>

            <a href="https://www.proctorgroup.com/" target="_blank">
              <img
                className="sponsors-bronze-image"
                src="/sponsors/bronze/proctorgroup.jpeg"
                alt=""
              />
            </a>

            <a href="https://www.treedom.net/en/" target="_blank">
              <img
                className="sponsors-bronze-image"
                src="/sponsors/bronze/treedom.png"
                alt=""
              />
            </a>
          </div>

          {/* Supporters */}

          <ThemeProvider>
            <Typography
              variant="h4"
              style={{ textAlign: "center", color: darkGrey, fontWeight: "bold", marginBottom: "25px" }}
            >
              Supporters
            </Typography>
          </ThemeProvider>
          <div className="sponsors-images">
            <Grid
              container
              direction="row"
              alignItems="space-evenly"
              justify="center"
              className="sponsors-grid"
            >
              <a href="https://aecom.com/" target="_blank">
                <img
                  className="sponsors-supporters-image"
                  src="/sponsors/supporters/aecom.png"
                  alt=""
                />
              </a>

              <a href="https://www.amazon.co.uk/" target="_blank">
                <img
                  className="sponsors-supporters-image"
                  src="/sponsors/supporters/amazon.png"
                  alt=""
                />
              </a>

              <a href="https://www.bareconductive.com/" target="_blank">
                <img
                  className="sponsors-supporters-image"
                  src="/sponsors/supporters/bareconductive.webp"
                  alt=""
                />
              </a>

              <a href="https://www.bentley.com/en" target="_blank">
                <img
                  className="sponsors-supporters-image"
                  src="/sponsors/supporters/bentley.png"
                  alt=""
                />
              </a>

              <a
                href="https://www.designengineeringworkshop.co.uk/"
                target="_blank"
              >
                <img
                  className="sponsors-supporters-image"
                  src="/sponsors/supporters/DEW.jpg"
                  alt=""
                />
              </a>

              <a href="https://www.etp-scotland.ac.uk/" target="_blank">
                <img
                  className="sponsors-supporters-image"
                  src="/sponsors/supporters/ETP.gif"
                  alt=""
                />
              </a>
            </Grid>
            <a href="http://www.kenoteq.co.uk/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/kenoteq.webp"
                alt=""
              />
            </a>

            {/* <a href="" target="_blank">
            <img className="sponsors-supporters-image" src="/sponsors/supporters/alpha" alt="" />
          </a> */}

            <a href="https://www.rainbird.com/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/rainbird.png"
                alt=""
              />
            </a>

            <a href="https://www.rbge.org.uk/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/RBG.jpeg"
                alt=""
              />
            </a>

            <a href="https://www.sdi.co.uk/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/SDI.jpeg"
                alt=""
              />
            </a>

            <a href="https://www.scottish-enterprise.com/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/SE.png"
                alt=""
              />
            </a>

            <a href="https://www.soltropy.com/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/soltropy.png"
                alt=""
              />
            </a>

            <a href="https://www.facebook.com/alphaarquitectos507/" target="_blank">
              <img
                className="sponsors-supporters-image"
                src="/sponsors/supporters/alpha.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="footer-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ backgroundColor: "#fff" }}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="Footer">
          <ThemeProvider theme={primaryFont}>
            <Typography
              style={{ fontSize: "20px", fontWeight: "lighter" }}
            >
              <Footer />
            </Typography>
          </ThemeProvider>
        </div>
      </div>

    );
  }
}

// export default Sponsors;
