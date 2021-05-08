import React from "react";
import { motion } from "framer-motion";
// import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";
import "./styles.css";
import { Typography, ThemeProvider } from "@material-ui/core";
import { white } from "../../components/colors";
import { primaryFont, secondaryFont } from "../../components/fonts";
export function Item({ id }) {
  const { category, title, desc } = items.find((item) => item.id === id) || {};

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img
              className="card-image"
              src={`images/${id}.jpg`}
              alt=""
              style={{ width: "50em" }}
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            {/* <Typography variant="h6" style={{ lineHeight: "-10px" }}> */}
            {/* <ThemeProvider theme={primaryFont}> */}
            {/* <Typography variant="h5">{title}</Typography> */}
            <h2>{title}</h2>
            {/* </ThemeProvider> */}
            {/* </Typography> */}
          </motion.div>
          <motion.div className="content-container" animate>
            {/* <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            /> */}
            <Typography variant="body1" style={{ color: white }}>
              {desc}
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

// https://codesandbox.io/s/framer-motion-animatesharedlayout-app-store-demo-i1kct?from-embed=&file=/src/Item.js:0-1493
