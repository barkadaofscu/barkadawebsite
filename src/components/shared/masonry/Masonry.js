import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import shuffle from "lodash/shuffle";
import useMeasure from "./useMeasure";
import useMedia from "./useMedia";
import data from "./data";
import "./masonry.css";

export default function Masonry() {
  // Tie media queries to the number of columns
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [2, 2, 2],
    2
  );
  // Measure the width of the container element
  const [bind, { width }] = useMeasure();
  // Hold items and shuffle them every 2 seconds
  const [items, set] = useState(data);
  useEffect(() => void setInterval(() => set(shuffle), 5000), []);
  // Form a grid of stacked items
  let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2
    ]; // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 };
  });
  // Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  });
  // Render the grid
  return (
    <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <animated.div
          key={key}
          style={{
            transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
            ...rest
          }}
        >
          <div style={{ backgroundImage: item.css }} />
        </animated.div>
      ))}
    </div>
  );
}
