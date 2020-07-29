import React from "react";
import Title from "../../Title/Title";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <img
        width="32px"
        height="32px"
        onClick={props.clicked}
        src="https://image.flaticon.com/icons/svg/812/812847.svg"
        alt="Menu Icon"
      />
      <Title />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
