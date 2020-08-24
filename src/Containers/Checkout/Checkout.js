import React, { Component } from "react";
import OrderSummary from "../../Components/Order/OrderSummary/OrderSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
    },
  };
  render() {
    return (
      <div>
        <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
      </div>
    );
  }
}
export default Checkout;
