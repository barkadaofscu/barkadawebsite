import React from "react";

const Card = props => {
  return (
    <div
      style={{
        width: "25vw",
        height: "60vh",
        float: "left",
        marginLeft: 16
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70%",
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "30%",
          textAlign: "center",
          backgroundColor: "#34495E",
          fontSize: 24
        }}
      >
          <p style={{ position: "relative", marginTop: 0,color: "white", top: "25%" }}>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
