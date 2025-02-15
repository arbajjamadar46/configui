import React from "react";
import { config } from "../config";

const HeroSection = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: config.heroSection.backgroundColor, border: "3px dashed black",margin:"20px",borderRadius:"100px", textAlign: "center" }}>
      <h2>{config.heroSection.title}</h2>
      <p>{config.heroSection.description}</p>
    </div>
  );
};

export default HeroSection;