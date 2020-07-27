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
      <p>
        Current Price: <strong>{props.price.toFixed(2)}$</strong>
      </p>
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
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.purchasing}
      >
        Order Now!
      </button>
    </div>
  );
};

export default BurgerBuildControls;
