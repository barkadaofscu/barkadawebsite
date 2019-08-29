import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const ImageFade = (props) => {
  const photoArr = props.data;
  const [index, set] = useState(0);
  const transitions = useTransition(photoArr[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % photoArr.length), props.interval),
    [photoArr.length, props.interval]
  );
  return transitions.map(({ item, props, key }) => (
    <div style={{ height: "100%", position: "fixed", zIndex: -99 }}>
      <animated.div
        key={key}
        className="bg"
        style={{
          ...props,
          backgroundImage: `url(${item.image}`
        }}
      >
        <div
          style={{
            background: `rgba(0,0,0,0.3)`,
            height: "100%",
            overflow: "hidden"
          }}
        ></div>
      </animated.div>
    </div>
  ));
};

export default ImageFade;
