import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const words = ["Tremdous", "Excellent", "Beautiful"];

export const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li style={{ lineHeight: 1.4 }} key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <p>
        <strong>Order Summary</strong>
      </p>
      <p>
        You have made a {words[Math.floor(Math.random() * words.length)]} with
        Following ingredients:
      </p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        {ingredientsSummary}
      </ul>
      <p>
        <strong>Total Amount: {props.price.toFixed(2)} $</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.cancelBtnClicked} Btntype="Danger">
        Cancel
      </Button>
      <Button clicked={props.continueBtnClicked} Btntype="Success">
        Continue
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
