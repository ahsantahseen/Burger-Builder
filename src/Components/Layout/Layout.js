import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

export const Layout = (props) => {
  return (
    <Auxiliary>
      <div>Toolbar,sidebar,backdrop</div>
      <main>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
