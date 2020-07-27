import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  React.useEffect(() =>
    console.log([classes.Button, classes[props.Btntype]].join(" "))
  );
  return (
    <button
      className={[classes.Button, classes[props.Btntype]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
