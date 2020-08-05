import React from "react";
import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Auxiliary>
      <Backdrop clicked={props.clicked} show={props.show}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

const CheckingFunction = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show;
};
export default React.memo(Modal, CheckingFunction);
