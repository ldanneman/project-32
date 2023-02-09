import React, { Fragment } from "react";

function Text({ children, ...props }) {
  return <Fragment {...props}>{children}</Fragment>;
}

export default Text;
