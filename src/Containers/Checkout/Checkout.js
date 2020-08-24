import React, { Component } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
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
        <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
      </div>
    );
  }
}
export default withRouter(Checkout);
