import React from "react";

const Section = ({ children, backgroundColor = "black" }) => {
    return <section style={{ backgroundColor: `${backgroundColor}` }}>{children}</section>;
};

export default Section;