import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";

export default class BurgerBuilder extends Component {
  state = {
    Ingredients: {
      salad: 1,
      meat: 2,
      cheese:2,
    },
  };
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.Ingredients} />
        <div>BurgerControls</div>
      </Auxiliary>
    );
  }
}
