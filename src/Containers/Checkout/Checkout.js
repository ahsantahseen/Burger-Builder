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
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinue={this.checkoutContinueHandler()}
          checkoutCancelled={this.checkoutCancelledHandler()}
        ></CheckoutSummary>
      </div>
    );
  }
}
export default withRouter(Checkout);
