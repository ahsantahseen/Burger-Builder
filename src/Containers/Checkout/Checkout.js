import React, { Component } from "react";
import OrderSummary from "../../Components/Order/OrderSummary/OrderSummary";
import { withRouter } from "react-router-dom";

class Checkout extends Component {
  componentDidMount() {}
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
export default withRouter(Checkout);
