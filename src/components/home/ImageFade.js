import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import photoArr from "./HomePhotos";
import "./styles.css";

const ImageFade = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(photoArr[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,
    config: config.molasses,
    trail: 500,
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.image}`
      }}
    />
  ));
};

export default ImageFade;
