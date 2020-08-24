import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const OrderSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your delicious Burger</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button Btntype="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>

      <Button Btntype="Success" clicked={props.checkoutContinue}>
        Continue
      </Button>
    </div>
  );
};

export default OrderSummary;
