import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

export const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <h4>Delicious Burger with Following ingredients</h4>
      <ul>{ingredientsSummary}</ul>
      <h4>Continue to Checkout?</h4>
    </Auxiliary>
  );
};
