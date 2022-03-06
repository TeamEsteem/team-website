import React, { Component } from "react";
import "../../../index.css";
import {
  white,
  grey,
  lightGreen,
  esteemGreen,
  darkGreen,
  darkGrey,
  black,
} from "../../../components/colors";
import { primaryFont, secondaryFont } from "../../../components/fonts";
import {
  Grid,
  Typography,
  ThemeProvider,
  Button,
} from "@material-ui/core";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import LaunchIcon from '@material-ui/icons/Launch';

export default class Tessellate extends Component {
  render() {
    return (
      <div>
        <div style={{
          backgroundImage: "url(/campaigns/tessellate/tessellate.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50%",
        }}>
          <Grid container
            alignContent="center"
            direction="column"
            justify="center">
            <ThemeProvider theme={primaryFont}>
              <Typography
                variant="h3"
                style={{ textAlign: "center", color: white, margin: "250px 0 0 0", fontWeight: "bold" }}
              >
                Tessellate
              </Typography>
              <Typography
                variant="body2"
                style={{ textAlign: "center", color: white, margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.5em" }}
              >
                <p>
                  Envisioned and evaluated with the support of Thornton Tomasetti, Tessellate is a global art competition created to fill our house with unique art pieces.
                </p>
                <br />
                <p>
                  We invite artists of all ages and backgrounds to use this platform to show their talents to the world and to help us create not just a house, but a home.
                </p>
              </Typography>
              <a
                href="#next"
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
                    padding: "5px 25px",
                    color: white,
                    margin: "auto",
                    marginTop: "40px",
                    border: "2px solid" + white,
                    borderRadius: "20px",
                  }}
                  startIcon={<ExpandMoreRoundedIcon />}
                >
                  See more
                </Button>
              </a>
            </ThemeProvider>
          </Grid>
        </div>
        <Grid container
          alignContent="center"
          direction="column"
          justify="center"
          id="next"
        >
          <ThemeProvider theme={primaryFont}>
            <Typography
              variant="h4"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              Thornton Tomasetti
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              Thornton Tomasetti is one of our platinum sponsors, a well-respected firm with exceptional dedication towards innovation and sustainability. Their building performance and design solutions can be seen all around the world. Check out what they are all about <a style={{ color: esteemGreen }} href="https://www.thorntontomasetti.com/" target="_blank">here</a>!
            </Typography>

            <center>
              <details style={{ margin: "75px 10px 0 10px" }}>
                <summary>
                  <p style={{ margin: "0 0 0 0", fontWeight: "bold", display: "inline" }}
                  >
                    Click to see the categories, rules, and other info about the competition
                  </p>
                </summary>



                <Typography
                  variant="h4"
                  style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
                >
                  Entry Requirements
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    Tessellate was open to all Heriot-Watt University students and faculty, Thornton Tomasetti employees, and Team ESTEEM members. Artwork could be submitted in digital format to 4 different categories.
                    <br /><br />
                    <b>Artwork must be submitted to the form below by the end of September 30th at midnight (BST), 2021.</b>
                    <br /><br />
                    (we've extended the competition to give more people a chance to submit their work!)
                  </p>
                  <center>
                    <a
                      href="https://forms.gle/ddnSeCvgj7nKcCp69"
                      target="_blank"
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
                          padding: "5px 25px",
                          color: esteemGreen,
                          margin: "auto",
                          marginTop: "40px",
                          border: "2px solid" + esteemGreen,
                          borderRadius: "20px",
                        }}
                        startIcon={<LaunchIcon />}
                      >
                        Enter Competition
                      </Button>
                    </a>
                  </center>
                </Typography>

                <Typography
                  variant="h4"
                  style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
                  id="next"
                >
                  Submission Categories
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: "10px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    There are 5 categories that you can submit your artwork to. You may only submit one piece of work per category, however you can enter as many categories as you like!
                  </p>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ textAlign: "center", margin: "50px 0 0 0", fontWeight: "bold" }}
                  id="next"
                >
                  1. Drawings and Paintings
                </Typography>

                <Typography
                  variant="body2"
                  style={{ margin: "10px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    Drawings and paintings on flat surfaces such as canvas, paper, or wooden boards.
                  </p>
                  <br />
                  <p>
                    <b>Dimensions:</b> Maximum A0 (594mm width x 841mm length)
                  </p>
                  <p>
                    <b>Award:</b> £250
                  </p>
                </Typography>

                <Typography
                  variant="h5"
                  style={{ textAlign: "center", margin: "25px 0 0 0", fontWeight: "bold" }}
                  id="next"
                >
                  2. Sculptures
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: "10px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    Sculptures made of one or more materials. Decorative ceramic plates, vases or other pieces are also accepted.
                  </p>
                  <br />
                  <p>
                    <b>Dimensions:</b> Maximum 250mm width x 400mm length x 220mm height; Maximum 2kg
                  </p>
                  <p>
                    <b>Award:</b> £250
                  </p>
                </Typography>

                <Typography
                  variant="h5"
                  style={{ textAlign: "center", margin: "25px 0 0 0", fontWeight: "bold" }}
                  id="next"
                >
                  3. Digital Art
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: "10px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    Any non-animated graphic in digital format that can be printed onto a flat surface. Cartoons, outlines and fictional pieces are all welcome, however photographs must not be used in any way.
                  </p>
                  <br />
                  <p>
                    <b>Dimensions:</b> Minimum A2 (420mm width x 594mm length)
                  </p>
                  <p>
                    <b>Award:</b> £250
                  </p>
                </Typography>

                <Typography
                  variant="h5"
                  style={{ textAlign: "center", margin: "25px 0 0 0", fontWeight: "bold" }}
                  id="next"
                >
                  4. "Connections" by Thornton Tomasetti
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: "10px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    This category is a celebration of connections in our lives and is meant to be interpreted differently by each participant. It is separated into two sub-categories:
                    <br /><br />
                    <ul>
                      <li>
                        Freestyle (pieces can be created with any technique)
                      </li>
                      <li>
                        Photography
                      </li>
                    </ul>
                    <br />
                    Team ESTEEM has made countless personal and professional connections, both as individual members and as a team that enabled us to move forward with our project. We are espescially proud to collaborate with two of Thornton Tomasetti's employee network groups: Mosaic and Spectrum.
                    <br /><br />
                    Mosaic focuses on creating a safe athmosphere and providing equal opportunities to people of all cultures. Spectrum is promoting equal workplace communities by advocating for LGBTQIA+ rights and creating conversations that intiate change on personal and professional levels. Both groups are pioneers of change in the construction industry and well-represented in social movements supporting their goals of equity, diversity, and inclusion. Check out their pages to learn more about the amazing work they do!
                  </p>
                  <center>
                    <a
                      href="https://www.thorntontomasetti.com/mosaic"
                      target="_blank"
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
                          padding: "5px 25px",
                          color: esteemGreen,
                          margin: "auto",
                          marginTop: "30px",
                          border: "2px solid" + esteemGreen,
                          borderRadius: "20px",
                        }}
                        startIcon={<LaunchIcon />}
                      >
                        Mosaic
                      </Button>
                    </a>
                    &nbsp;
                    <a
                      href="https://www.thorntontomasetti.com/spectrum"
                      target="_blank"
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
                          padding: "5px 25px",
                          color: esteemGreen,
                          margin: "auto",
                          marginTop: "30px",
                          border: "2px solid" + esteemGreen,
                          borderRadius: "20px",
                        }}
                        startIcon={<LaunchIcon />}
                      >
                        Spectrum
                      </Button>
                    </a>
                  </center>
                  <br />
                  <p>
                    <b>Dimensions:</b> Not exceeding the dimensions of the previous categories.
                  </p>
                  <p>
                    <b>Award:</b> 2 x £250, one for each sub-category
                  </p>

                  <br /><br />

                  We are giving out a special award of <b>£150</b> to the submission that best envisions sustainability in its concept and/or material choices. Make sure to explain your decision and inspiration.
                </Typography>

                <Typography
                  variant="h4"
                  style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
                  id="next"
                >
                  Selection Process
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    Submissions will be evaluated in 2 rounds by representatives of both Thornton Tomasetti and Team ESTEEM. Artists will be notified of their results after each round. The winners will be publicly announced and artists will be requested to safely post their work to us.
                  </p>
                  <br />
                  <p>
                    Pieces that do not win an award will still have a chance to be displayed in either our house, Heriot-Watt University buildings, or Thornton Tomasetti offices worldwide. All shipping fees will be reimbursed, however artwork will not be returned to artists after the SDME 2021 competition.
                  </p>
                </Typography>


                <Typography
                  variant="body2"
                  style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
                >
                  <p>
                    Give yourself the best chance in winning by following the rules of this competition:
                    <br /><br />
                    <ol>
                      <li>
                        Team ESTEEM reserves the right to showcase any work that was submitted despite their success in the evaluation process. Shipment cannot be refused by artists, as by completing the submission process they agree to give Team ESTEEM a free hand in how their work is displayed.
                      </li>
                      <li>
                        Team ESTEEM does not take responsibility for the copyrights of any of the featured pieces being breached as a result of physical or online exposure.
                      </li>
                      <li>
                        As the winning pieces will receive public exposure in Dubai, all content must respect the cultural and political standards of the United Arab Emirates. Pieces that we believe to be inadequate in this manner cannot be displayed in the Team ESTEEM house. However, such submissions could still be exhibited in Heriot-Watt University buildings across Scotland and Malaysia, and Thornton Tomasetti offices around the globe. They cannot receive any awards though, as the awards were created to support our house.
                      </li>
                      <li>
                        Submitted pieces can consist of multiple items if they comply with the dimension requirements.
                      </li>
                      <li>
                        Copyrights should always be respected, especially with digital art.
                      </li>
                      <li>
                        Work submitted after the deadline will not be accepted under any circumstances.
                      </li>
                      <li>
                        Submissions cannot be withdrawn after the deadline.
                      </li>
                      <li>
                        All dimensions must be clearly stated on submissions.
                      </li>
                      <li>
                        One piece can only be submitted to one category.
                      </li>
                      <li>
                        One participant can only submit one work per category, with the exclusion of categories 4 and 5, where they can have a separate submission for each sub-category.
                      </li>
                      <li>
                        All submissions must have a title, with the exclusion of the 5th category where the title must be “Connections”.
                      </li>
                      <li>
                        All artists will be credited by displaying their name, preferred social media profile (if any) and the title of their work.
                      </li>
                    </ol>
                  </p>
                  <br /><br />
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
                    id="next"
                  >
                    Rules of Tessellate
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1em" }}
                  >
                    <p>
                      Give yourself the best chance in winning by following the rules of this competition:
                      <br /><br />
                      <ol>
                        <li>
                          Team ESTEEM reserves the right to showcase any work that was submitted despite their success in the evaluation process. Shipment cannot be refused by artists, as by completing the submission process they agree to give Team ESTEEM a free hand in how their work is displayed.
                        </li>
                        <li>
                          Team ESTEEM does not take responsibility for the copyrights of any of the featured pieces being breached as a result of physical or online exposure.
                        </li>
                        <li>
                          As the winning pieces will receive public exposure in Dubai, all content must respect the cultural and political standards of the United Arab Emirates. Pieces that we believe to be inadequate in this manner cannot be displayed in the Team ESTEEM house. However, such submissions could still be exhibited in Heriot-Watt University buildings across Scotland and Malaysia, and Thornton Tomasetti offices around the globe. They cannot receive any awards though, as the awards were created to support our house.
                        </li>
                        <li>
                          Submitted pieces can consist of multiple items if they comply with the dimension requirements.
                        </li>
                        <li>
                          Copyrights should always be respected, especially with digital art.
                        </li>
                        <li>
                          Work submitted after the deadline will not be accepted under any circumstances.
                        </li>
                        <li>
                          Submissions cannot be withdrawn after the deadline.
                        </li>
                        <li>
                          All dimensions must be clearly stated on submissions.
                        </li>
                        <li>
                          One piece can only be submitted to one category.
                        </li>
                        <li>
                          One participant can only submit one work per category, with the exclusion of categories 4 and 5, where they can have a separate submission for each sub-category.
                        </li>
                        <li>
                          All submissions must have a title, with the exclusion of the 5th category where the title must be “Connections”.
                        </li>
                        <li>
                          All artists will be credited by displaying their name, preferred social media profile (if any) and the title of their work.
                        </li>
                      </ol>
                    </p>
                  </Typography>
                  <center>
                    <p>
                      <b>
                        Ready to join in?
                      </b>
                    </p>
                    <a
                      href="https://forms.gle/ddnSeCvgj7nKcCp69"
                      target="_blank"
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
                          padding: "5px 25px",
                          color: esteemGreen,
                          margin: "auto",
                          marginTop: "20px",
                          border: "2px solid" + esteemGreen,
                          borderRadius: "20px",
                        }}
                        startIcon={<LaunchIcon />}
                      >
                        Enter Competition
                      </Button>
                    </a>
                    <br /><br />
                    <b>
                      If you have any further questions please contact us at&nbsp;
                      <a style={{ color: esteemGreen }} href="mailto:sdme2020@hw.ac.uk?subject=Tessellate Competition Question">sdme2020@hw.ac.uk</a>
                    </b>
                  </center>
                </Typography>
              </details>
            </center>

            <Typography
              variant="h4"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              Tessellate Winners
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              We would like to express our gratitude again to all artists who participated in the competition and helped make our house unique and colorful. A big thank you again to Thornton Tomasetti, who made all this possible. The following submissions were the winners of their respective categories, standing out in their concept and artistic execution. Please read the descriptions for each piece to better understand what inspired their creation.
            </Typography>

            <Typography
              variant="h5"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              1. Drawings and Paintings
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              <b>Waves of Time</b> · Amy Costello
              <br /><br />
              <i>
                This piece represents the depth of emotions. Each line and spiral represent a different time and feeling. The joyful and bright memories right down to the dark but simple tones of life.
              </i>
              <br />
              <a
                href="https://instagram.com/amycos1"
                target="_blank"
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
                    padding: "5px 25px",
                    color: esteemGreen,
                    margin: "auto",
                    marginTop: "15px",
                    border: "2px solid" + esteemGreen,
                    borderRadius: "20px",
                  }}
                  startIcon={<LaunchIcon />}
                >
                  Instagram
                </Button>
              </a>
              <br /><br />
              <center>
                <img src="/campaigns/tessellate/waves of time.jpeg" alt="" style={{ maxWidth: "100%", maxHeight: "75vh" }} />
              </center>
            </Typography>



            <Typography
              variant="h5"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              2. Sculptures
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              <b>Stilted Vase No. 01</b> · Gregory Durno Stragnell
              <br /><br />
              <i>
                An exploration of this novel stilted vase form. The chaotic and bright line work is intended to be reminiscent of graffiti.
              </i>
              <br />
              <a
                href="https://instagram.com/durno_does"
                target="_blank"
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
                    padding: "5px 25px",
                    color: esteemGreen,
                    margin: "auto",
                    marginTop: "15px",
                    border: "2px solid" + esteemGreen,
                    borderRadius: "20px",
                  }}
                  startIcon={<LaunchIcon />}
                >
                  Instagram
                </Button>
              </a>
              <br /><br />
              <center>
                <img src="/campaigns/tessellate/vase.JPG" alt="" style={{ maxWidth: "100%", maxHeight: "75vh" }} />
              </center>
            </Typography>


            <Typography
              variant="h5"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              3. Digital Art
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              <b>No. 1 // No. 2 // No. 3</b> · Michael Aronson
              <br /><br />
              <i>
                "No. 1 // No. 2 // No. 3" is a piece that investigates a technique to convince the viewer of the presence a three-dimensional form that is not directly visible. This strategy can be incorporated into more involved works to enhance the composition and encourage the observer to interact with the piece in a manner as defined by the artist. Aspects of an artwork such as visual path and focal point can sometimes be difficult or even antithetical to incorporate overtly into a given composition; this approach offers an alternative, more subtle way to enforce these principles.
                <br /><br />
                <b>Sustainability Aspect: </b>
                The idea of encouraging a person to behave a certain way is a fundamental aspect of architecture generally and is a crucial piece of sustainable development. Design choices that subconsciously impact the decisions occupants make on a daily basis — for example, orienting a building in such a way so as to maximize indoor daylighting and minimize the need for artificial lighting — are not only more effective than outright demands for lifestyle changes but also have the potential to provide economic benefit and directly improve quality of life.
              </i>
              <br />
              <br /><br />
              <center>
                <img src="/campaigns/tessellate/no1.jpg" alt="" style={{ maxWidth: "100%", maxHeight: "75vh" }} />
              </center>
            </Typography>


            <Typography
              variant="h5"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              4.A "Connections" Freestyle
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              <b>Fingerprint</b> · Hibah Naseer
              <br /><br />
              <i>
                Unique but the same, all shades are beautiful
              </i>
              <br />
              <a
                href="https://instagram.com/hibahnsr"
                target="_blank"
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
                    padding: "5px 25px",
                    color: esteemGreen,
                    margin: "auto",
                    marginTop: "15px",
                    border: "2px solid" + esteemGreen,
                    borderRadius: "20px",
                  }}
                  startIcon={<LaunchIcon />}
                >
                  Instagram
                </Button>
              </a>
              <br /><br />
              <center>
                <img src="/campaigns/tessellate/fingerprint.jpg" alt="" style={{ maxWidth: "100%", maxHeight: "75vh" }} />
              </center>
            </Typography>



            <Typography
              variant="h5"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              4.B "Connections" Photography
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              <b>After the Storm (Loch Ness)</b> · Lydia Graves
              <br /><br />
              <i>
                This picture was taken after a heavy storm in the middle of winter in the Scottish Highlands. The sunlight shining through the clouds were the first beams of sun we had seen all week, and sitting on the beach, hearing the water lap onto the rocks, it was the most peaceful moment I can ever remember.
              </i>
              <br />
              <a
                href="https://instagram.com/lydia.i.graves"
                target="_blank"
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
                    padding: "5px 25px",
                    color: esteemGreen,
                    margin: "auto",
                    marginTop: "15px",
                    border: "2px solid" + esteemGreen,
                    borderRadius: "20px",
                  }}
                  startIcon={<LaunchIcon />}
                >
                  Instagram
                </Button>
              </a>
              <br /><br />
              <center>
                <img src="/campaigns/tessellate/storm.jpg" alt="" style={{ maxWidth: "100%", maxHeight: "75vh" }} />
              </center>
            </Typography>




            <Typography
              variant="h5"
              style={{ textAlign: "center", margin: "100px 0 0 0", fontWeight: "bold" }}
            >
              Sustainability Award
            </Typography>
            <Typography
              variant="body2"
              style={{ margin: "25px 0 0 0", maxWidth: "1000px", fontSize: "1.25em" }}
            >
              A special Sustainability Award was given to the following submission as it best illustrated our shared standpoint on sustainability with Thornton Tomasetti.

              <br /><br /><br />
              <b>Terrarium</b> · Alakbar Zeynalzade
              <br /><br />
              <i>
                It is a snapshot of a remote location at some point in the future, where the potential of sustainable energy has been fully realized. Humans can live almost anywhere they want, and we see a new trend in people looking to venture out into the world to find their perfect spot for a home.
                <br /><br />
                <b>Sustainability Aspect: </b>
                I imagine a world in the future where we have perfected sustainable energy production and storage. This would allow people to be able to purely generate and store their own power allowing them to live off the grid and in parts of the world that would have otherwise not been possible before. This freedom would allow human beings to safely move away from dense cities into more peaceful locations and to get in touch with nature.
              </i>
              <br />
              <a
                href="https://alak.bar/"
                target="_blank"
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
                    padding: "5px 25px",
                    color: esteemGreen,
                    margin: "auto",
                    marginTop: "15px",
                    border: "2px solid" + esteemGreen,
                    borderRadius: "20px",
                  }}
                  startIcon={<LaunchIcon />}
                >
                  Website
                </Button>
              </a>
              <br /><br />
              <center>
                <img src="/campaigns/tessellate/terrarium.jpg" alt="" style={{ maxWidth: "100%", maxHeight: "75vh" }} />
              </center>
            </Typography>

          </ThemeProvider>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div >
    )
  }
}

