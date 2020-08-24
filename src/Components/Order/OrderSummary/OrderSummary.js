import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h1>Enjoy your delicious Burger</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button Btntype="Danger" clicked>
        CANCEL
      </Button>

      <Button Btntype="Success" clicked>
        Continue
      </Button>
    </div>
  );
};

export default OrderSummary;
