import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          {...props.elementconfig}
          className={classes.InputElement}
          value={props.value}
          onChange={props.onChangeHandler}
        ></input>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementconfig}
          className={classes.InputElement}
          value={props.value}
          onChange={props.onChangeHandler}
        ></textarea>
      );
      break;

    case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.onChangeHandler}
        >
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementconfig}
          className={classes.InputElement}
          value={props.value}
          onChange={props.onChangeHandler}
        ></input>
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
