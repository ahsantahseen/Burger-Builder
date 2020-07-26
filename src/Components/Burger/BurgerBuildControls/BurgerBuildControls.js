import React from "react";
import classes from "../BurgerBuildControls/BurgerBuildControls.module.css";
import BurgerBuildControl from "./BurgerBuildControl/BurgerBuildControl";

const Controls = [
  {
    label: "Salad",
    type: "salad",
  },
  { label: "Meat", type: "meat" },
  {
    label: "Cheese",
    type: "cheese",
  },
];

const BurgerBuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {Controls.map((ctrl) => (
        <BurgerBuildControl
          label={ctrl.label}
          key={ctrl.label}
          type={ctrl.type}
          addIngdrientFunc={() => props.AddIng(ctrl.type)}
          removeIngdrientFunc={() => props.RemoveIng(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        ></BurgerBuildControl>
      ))}
    </div>
  );
};

export default BurgerBuildControls;
