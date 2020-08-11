import React from "react";

const Container = ({ children, backgroundColor = "transparent" }) => {
  return <div style={{ backgroundColor: backgroundColor }}>{children}</div>;
};

export default Container;
