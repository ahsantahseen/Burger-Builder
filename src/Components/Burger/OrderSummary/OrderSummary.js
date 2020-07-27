import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

export const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li style={{ lineHeight: 1.4 }} key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <h4>Delicious Burger with Following ingredients:</h4>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {ingredientsSummary}
      </ul>
      <h4>Total Amount: {props.price} $ </h4>
      <h4>Continue to Checkout?</h4>
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
