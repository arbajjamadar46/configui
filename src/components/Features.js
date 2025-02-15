import React from "react";
import { config } from "../config";

const Features = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center", margin:"20px" }}>
      <h2 style={{fontSize: "30px"}}>---: Features :---</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        {config.features.map((feature, index) => (
          <div key={index} style={{ margin: "10px", padding: "20px", border: "2px solid #40434E", borderRadius: "20px", width: "30%" }}>
            <h3>{feature.icon} {feature.title}</h3>
            <p>{feature.description}</p>
            <img src={feature.imgUrl} style={{margin:"20px"}}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;