import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementtype) {
    case "input":
      inputElement = (
        <input
          {...props.elementconfig}
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.onChangeHandler}
        ></input>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementconfig}
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.onChangeHandler}
        ></textarea>
      );
      break;

    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.onChangeHandler}
        >
          {props.options.map((option) => {
            return (
              <option
                key={option.value}
                onChange={props.onChangeHandler}
                value={option.value}
              >
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
          className={inputClasses.join(" ")}
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
