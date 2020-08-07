import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BurgerBuildControls from "../../Components/Burger/BurgerBuildControls/BurgerBuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import { OrderSummary } from "../../Components/Burger/OrderSummary/OrderSummary";
import axios from "../../orders-axios";

const dummy_names = ["Ali", "Amin", "Bilal", "Ahsan", "Tahseen", "Tabassum"];
const dummy_location = [
  "Karachi-FB AREA",
  "Karachi-Saddar",
  "Karachi-Clifton",
  "Karachi-PECHS",
  "Karachi-Nursery",
];
const dummy_numbers = ["052523", "525251", "145523", "123453", "435355"];

const dummy_delivery_type = ["Fastest", "Normal", "Urgent", "Casual"];
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
    Total_Price: 1.0,
    purchaseable: false,
    purchasing: false,
  };
  enablePurchasing = () => {
    this.setState({ purchasing: true });
  };
  cancelenablePurchasing = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasing = () => {
    const customerOrders = {
      ingredients: this.state.Ingredients,
      Total_Price: this.state.Total_Price,
      customer_details: {
        name: dummy_names[Math.floor(Math.random() * dummy_names.length)],
        location:
          dummy_location[Math.floor(Math.random() * dummy_location.length)],
        contact_number:
          dummy_numbers[Math.floor(Math.random() * dummy_numbers.length)],
      },
      delivery_type:
        dummy_delivery_type[
          Math.floor(Math.random() * dummy_delivery_type.length)
        ],
    };

    alert("Parsing to database....");
    axios
      .post("customerOrders.json", customerOrders)
      .then((Response) => console.log(Response))
      .catch((error) => console.error());
  };
  render() {
    const OrderButtonHandler = (ingredients) => {
      const sum = Object.keys(ingredients)
        .map((igKey) => {
          return ingredients[igKey];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      this.setState({ purchaseable: sum > 0 });
    };
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
      OrderButtonHandler(UpdatedIngredients);
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

      OrderButtonHandler(UpdatedIngredients);
    };
    const disabledButtoninfo = {
      ...this.state.Ingredients,
    };
    for (let key in disabledButtoninfo) {
      disabledButtoninfo[key] = disabledButtoninfo[key] <= 0;
    }
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          clicked={this.cancelenablePurchasing}
        >
          <OrderSummary
            ingredients={this.state.Ingredients}
            cancelBtnClicked={this.cancelenablePurchasing}
            continueBtnClicked={this.continuePurchasing}
            price={this.state.Total_Price}
          ></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.Ingredients} />
        <BurgerBuildControls
          AddIng={AddIngredientHandler}
          RemoveIng={RemoveIngredientHandler}
          disabled={disabledButtoninfo}
          price={this.state.Total_Price}
          purchaseable={this.state.purchaseable}
          purchasing={this.enablePurchasing}
        ></BurgerBuildControls>
      </Auxiliary>
    );
  }
}
