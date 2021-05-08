import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Header from "../nav-barV2";
import { Item } from "./Item";
import { List } from "./List";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <div>
        <Typography style={{ fontSize: "20px", fontWeight: "lighter"}}>
          <Header />
        </Typography>
      </div>
      <AnimateSharedLayout type="crossfade">
        {/* <Header /> */}
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
