import React from "react";
import classes from "../BurgerBuildControl/BurgerBuildControl.module.css";

const BurgerBuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.addIngdrientFunc}>
        More
      </button>
      <button className={classes.More} onClick={props.removeIngdrientFunc}>
        Less
      </button>
    </div>
  );
};

export default BurgerBuildControl;
