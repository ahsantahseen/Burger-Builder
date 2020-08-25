import React from "react";
import classes from "./Order.module.css";
const Order = (props) => {
  const Ingredients = [];
  for (let IngredientsName in props.ingredients) {
    Ingredients.push({
      name: IngredientsName,
      amount: props.ingredients[IngredientsName],
    });
  }
  const ingredientOutput = Ingredients.map((ing) => {
    return (
      <span className={classes.IngredientItem} key={ing.name}>
        {ing.name} ({ing.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients:{ingredientOutput}</p>

      <p>
        $<strong>{Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
