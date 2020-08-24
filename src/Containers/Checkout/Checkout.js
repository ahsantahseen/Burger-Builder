import React, { Component } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import { withRouter, Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    total_price: "",
    order_date: "",
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let tot_price = 0;
    let order_date;
    for (let param of query.entries()) {
      //["meat","1"]
      if (param[0] === "total-price") {
        tot_price = param[1];
      } else if (param[0] === "order-data") {
        order_date = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      order_date: order_date,
      total_price: tot_price,
    });
  }
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
          checkoutContinue={this.checkoutContinueHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        ></CheckoutSummary>
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.total_price}
              date={this.state.order_date}
            ></ContactData>
          )}
        ></Route>
      </div>
    );
  }
}
export default withRouter(Checkout);
