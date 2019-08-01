import React, { useState, Component } from "react";
import barkadaLogo from "./logo1.png";
import { useSpring, animated } from "react-spring";
import "./styles.css";

const TopMenuBar = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    to: async (next, cancel) => {
      await next({ height: isToggled ? "400px" : "40px" });
    },
    from: { backgroundColor: "white" }
  });
  return (
    <div className="navigation" onClick={() => setToggle(!isToggled)}>
      <animated.div
        onClick={() => setToggle(!isToggled)}
        style={fade}
      >
        <h1
          style={{
            display: "inline-block",
            marginLeft: "2.5%",
            float: "left",
            fontSize: "18px"
          }}
        >
          Barkada of SCU
        </h1>
        <img
          src={barkadaLogo}
          style={{
            display: "inline-block",
            float: "right",
            height: "50px",
              width: "auto",
              marginLeft:'auto',
            marginRight: '47.5%'
          }}
        />
      </animated.div>
    </div>
  );
};

export default TopMenuBar;
