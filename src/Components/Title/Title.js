import React from "react";
import { FaHamburger } from "react-icons/fa";
import classes from "./Title.module.css";
const Title = () => {
  return (
    <span className={classes.Title}>
      <h3>Burger Builder <FaHamburger style={{verticalAlign:"-4px"}}/></h3>
    </span>
  );
};

export default Title;
