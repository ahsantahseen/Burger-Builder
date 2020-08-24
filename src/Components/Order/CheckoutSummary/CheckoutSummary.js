import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

import { withRouter } from "react-router-dom";

const OrderSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your delicious Burger</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button Btntype="Danger">CANCEL</Button>

      <Button Btntype="Success" clicked>
        Continue
      </Button>
    </div>
  );
};

export default withRouter(OrderSummary);
