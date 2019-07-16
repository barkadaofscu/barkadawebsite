import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import mountain from './assets/mountain.jpg'

const SuiteSpotlight = props =>{
return (
    <ParallaxLayer
      offset={3}
      speed={1}
      style={{
          width: "97.5%",
          height: '97.5%'
      }}
  >
      <img src={mountain}/>
    </ParallaxLayer>
  );
};
        
export default SuiteSpotlight;
