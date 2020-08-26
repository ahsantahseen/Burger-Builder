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

        validation: {
          required: true,
          valid: false,
        },
      },
      location: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Location",
        },
        value: "",
        validation: {
          required: true,
          valid: false,
        },
      },

      contact_number: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Phone Number",
        },
        value: "",
        validation: {
          required: true,
          valid: false,
          minLength: 8,
          maxLength: 8,
        },
      },

      delivery_type: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "", displayValue: "Select Any Option" },
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
    const FormData = {};
    for (let formDataElementIdentifier in this.state.orderForm) {
      FormData[formDataElementIdentifier] = this.state.orderForm[
        formDataElementIdentifier
      ].value;
    }
    const customerOrders = {
      ingredients: this.props.ingredients,
      Total_Price: this.props.price + "$",

      delivery_date: this.props.date,
      orderData: FormData,
    };

    axios
      .post("customerOrders.json", customerOrders)
      .then(
        (Response) => this.setState({ loading: false, purchasing: false }),
        this.props.history.push("/orders")
      )
      .catch((error) => this.setState({ loading: false, purchasing: false }));
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }
  inputChangedHandler = (event, InputIdentifier) => {
    const UpdatedForm = {
      ...this.state.orderForm,
    };
    const UpdatedFormElement = {
      ...UpdatedForm[InputIdentifier],
    };
    UpdatedFormElement.value = event.target.value;
    UpdatedFormElement.valid = this.checkValidity(
      UpdatedFormElement.value,
      UpdatedFormElement.validation
    );
    UpdatedForm[InputIdentifier] = UpdatedFormElement;
    console.log(UpdatedFormElement.valid);
    this.setState({ orderForm: UpdatedForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        properties: this.state.orderForm[key],
      });
    }
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
