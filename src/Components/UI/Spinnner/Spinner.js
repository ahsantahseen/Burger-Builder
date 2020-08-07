import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  console.log("[Spiinger.js}");
  return <div className={classes.loader}>Parsing to database...</div>;
};

export default Spinner;
