import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import photoArr from "./HomePhotos";
import "./main.css";

const ImageFade = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(photoArr[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 5000),
    []
  );
    return transitions.map(({ item, props, key }) => (
        <div >
    <animated.div
      key={key}
      className="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.image}`
      }}
  />
  </div>
  ));
};

export default ImageFade;
