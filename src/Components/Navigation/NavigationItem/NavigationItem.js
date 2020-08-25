import React from "react";
import classes from "../NavigationItem/NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink href={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default NavigationItem;
