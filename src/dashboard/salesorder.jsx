import React from "react";
import OrderDetails from "./orderdetails";
import TechnicalDetails from "./technicaldetails";

const SalesOrder = () => {
  return (
    <React.Fragment>
      <OrderDetails/>
      <TechnicalDetails/>
    </React.Fragment>
  );
}

export default SalesOrder;
