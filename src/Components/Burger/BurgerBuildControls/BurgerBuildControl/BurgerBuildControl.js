import React from "react";
import classes from "../BurgerBuildControl/BurgerBuildControl.module.css";

const BurgerBuildControl = (props) => {
  console.log(props.disableBtn);
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More} onClick={props.addIngdrientFunc}>
        More
      </button>
      <button
        className={classes.Less}
        onClick={props.removeIngdrientFunc}
        disabled={props.disabled}
      >
        Less
      </button>
    </div>
  );
};

export default BurgerBuildControl;
