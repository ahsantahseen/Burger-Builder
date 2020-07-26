import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BurgerBuildControls from "../../Components/Burger/BurgerBuildControls/BurgerBuildControls";

const INGREDIENTS_PRICE = {
  salad: 0.3,
  cheese: 0.5,
  meat: 1.4,
};
export default class BurgerBuilder extends Component {
  state = {
    Ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
    },
    Total_Price: 4.0,
  };
  render() {
    const AddIngredientHandler = (type) => {
      const oldCount = this.state.Ingredients[type];
      const UpdatedCount = oldCount + 1;
      const UpdatedIngredients = { ...this.state.Ingredients };
      UpdatedIngredients[type] = UpdatedCount;
      const PriceAddition = INGREDIENTS_PRICE[type];
      const oldPrice = this.state.Total_Price;
      const UpdatedPrice = oldPrice + PriceAddition;
      this.setState({
        Ingredients: UpdatedIngredients,
        Total_Price: UpdatedPrice,
      });
    };
    const RemoveIngredientHandler = (type) => {
      const oldCount = this.state.Ingredients[type];
      if (oldCount <= 0) {
        return;
      }
      const UpdatedCount = oldCount - 1;
      const UpdatedIngredients = { ...this.state.Ingredients };
      UpdatedIngredients[type] = UpdatedCount;
      const PriceReduction = INGREDIENTS_PRICE[type];
      const oldPrice = this.state.Total_Price;
      const UpdatedPrice = oldPrice - PriceReduction;
      this.setState({
        Ingredients: UpdatedIngredients,
        Total_Price: UpdatedPrice,
      });
    };
    const disabledButtoninfo = {
      ...this.state.Ingredients,
    };
    for (let key in disabledButtoninfo) {
      disabledButtoninfo[key] = disabledButtoninfo[key] <= 0;
    }
    return (
      <Auxiliary>
        <Burger ingredients={this.state.Ingredients} />
        <BurgerBuildControls
          AddIng={AddIngredientHandler}
          RemoveIng={RemoveIngredientHandler}
          disabled={disabledButtoninfo}
        ></BurgerBuildControls>
      </Auxiliary>
    );
  }
}