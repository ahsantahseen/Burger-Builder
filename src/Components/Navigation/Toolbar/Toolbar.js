import React from "react";
import Title from "../../Title/Title";
import classes from "./Toolbar.module.css";
const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Title />
      <nav>....</nav>
    </header>
  );
};

export default Toolbar;
