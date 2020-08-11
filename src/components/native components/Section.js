import React from "react";

const Section = ({ children, backgroundColor = "transparent" }) => {
    return <section style={{ backgroundColor: backgroundColor }}>{children}</section>;
};

export default Section;