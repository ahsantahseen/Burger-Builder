import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";

export const Layout = (props) => {
  return (
    <Auxiliary>
      <div>Toolbar,sidebar,backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
