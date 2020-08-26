import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../orders-axios";
import Spinner from "../../../Components/UI/Spinnner/Spinner";
import Input from "../../../Components/UI/Forms/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      location: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Location",
        },
        value: "",
      },

      contact_number: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Phone Number",
        },
        value: "",
      },

      delivery_type: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "Fastest", displayValue: "Fastest" },

            { value: "Normal", displayValue: "Normal" },
          ],
        },
      },
    },
    loading: false,
    purchasing: true,
  };

  orderSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const customerOrders = {
      ingredients: this.props.ingredients,
      Total_Price: this.props.price + "$",

      delivery_date: this.props.date,
    };

    axios
      .post("customerOrders.json", customerOrders)
      .then(
        (Response) => this.setState({ loading: false, purchasing: false }),
        this.props.history.push("/orders")
      )
      .catch((error) => this.setState({ loading: false, purchasing: false }));
  };
  inputChangedHandler = (event, InputIdentifier) => {
    console.log(event.target.value);
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        properties: this.state.orderForm[key],
      });
    }
    console.log(formElementsArray);
    console.log(formElementsArray[0].properties.elementType);
    let form = (
      <form>
        {formElementsArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementtype={formElement.properties.elementType}
              elementconfig={formElement.properties.elementConfig}
              value={formElement.properties.value}
              options={formElement.properties.elementConfig.options}
              onChangeHandler={(event) =>
                this.inputChangedHandler(event, formElement.id)
              }
            ></Input>
          );
        })}
        <Button Btntype="Success" clicked={(event) => this.orderSubmit(event)}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner></Spinner>;
    }
    return (
      <div className={classes.contact_data}>
        <h3>Enter Details</h3>
        {form}
      </div>
    );
  }
}
export default withRouter(ContactData);
