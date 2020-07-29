import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

export const Layout = (props) => {
  return (
    <Auxiliary>
      <Toolbar></Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
