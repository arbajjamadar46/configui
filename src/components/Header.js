import React from "react";
import { config } from "../config";

const Header = () => {
  return (
    <header style={{ textAlign: "center", padding: "2px", fontSize:"22px", backgroundColor: "#40434E", color: "#92DCE5" }}>
      <h1>{config.header.title}</h1>
      <p>{config.header.subtitle}</p>
    </header>
  );
};

export default Header;