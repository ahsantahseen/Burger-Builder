import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../Components/Burger/Burger";
import BurgerBuildControls from "../../Components/Burger/BurgerBuildControls/BurgerBuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import { OrderSummary } from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinnner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../orders-axios";
import { withRouter } from "react-router-dom";

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

class BurgerBuilder extends Component {
  state = {
    Ingredients: null,
    Total_Price: 1.0,
    Date: null,
    purchaseable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    axios
      .get("ingredients.json")
      .then((Response) => {
        this.setState({ Ingredients: Response.data });
        console.log(this.state.Ingredients);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  enablePurchasing = () => {
    this.setState({ purchasing: true });
  };
  cancelenablePurchasing = () => {
    this.setState({ purchasing: false });
  };

  continuePurchasing = () => {
    // this.setState({ loading: true });
    // const customerOrders = {
    //   ingredients: this.state.Ingredients,
    //   Total_Price: this.state.Total_Price + "$",
    //   customer_details: {
    //     name: dummy_names[Math.floor(Math.random() * dummy_names.length)],
    //     location:
    //       dummy_location[Math.floor(Math.random() * dummy_location.length)],
    //     contact_number:
    //       dummy_numbers[Math.floor(Math.random() * dummy_numbers.length)],
    //   },

    //   delivery_type:
    //     dummy_delivery_type[
    //       Math.floor(Math.random() * dummy_delivery_type.length)
    //     ],
    //   delivery_date: this.state.Date,
    // };

    // axios
    //   .post("customerOrders.json", customerOrders)
    //   .then((Response) => this.setState({ loading: false, purchasing: false }))
    //   .catch((error) => this.setState({ loading: false, purchasing: false }));
    const QueryParams = [];
    for (let i in this.state.Ingredients) {
      QueryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.Ingredients[i])
      );
    }
    const QueryString = QueryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + QueryString,
    });
  };
  render() {
    const OrderButtonHandler = (ingredients) => {
      this.setState({ Date: new Date().toLocaleString() });
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

    let DisplayScreen = null;
    let DisplayBurger = <Spinner></Spinner>;
    if (this.state.Ingredients) {
      DisplayBurger = (
        <Auxiliary>
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

      DisplayScreen = (
        <OrderSummary
          ingredients={this.state.Ingredients}
          cancelBtnClicked={this.cancelenablePurchasing}
          continueBtnClicked={this.continuePurchasing}
          price={this.state.Total_Price}
        ></OrderSummary>
      );
    }
    if (this.state.loading) {
      DisplayScreen = <Spinner></Spinner>;
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          clicked={this.cancelenablePurchasing}
        >
          {DisplayScreen}
        </Modal>
        {DisplayBurger}
      </Auxiliary>
    );
  }
}

export default withRouter(withErrorHandler(BurgerBuilder, axios));
