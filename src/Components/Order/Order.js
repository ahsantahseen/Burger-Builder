import React from "react";
import classes from "./Order.module.css";
const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients:Salad(1)</p>

      <p>
        <strong>5$</strong>
      </p>
    </div>
  );
};

export default Order;
