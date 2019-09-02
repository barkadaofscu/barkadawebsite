import React, { Component, useRef, useState, useEffect } from "react";
import { config } from "react-spring/renderprops";
import { PageTag, PageSpan, Container, BoldSpan } from "../../shared/primitives";
import { useSprings, animated } from "react-spring";
import clamp from "lodash-es/clamp";
import { useGesture } from "react-use-gesture";
import MediaQuery from "react-responsive";
import Grid from "../grid/Grid";
import { Slug, Fade } from "../grid/Primitives";
import data from "../grid/data";
import "../grid/styles.css";
import { Icon } from "antd";

function Viewpager() {
  const index = useRef(0);
  const [props, set] = useSprings(data.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block",
    top: 0,
      position: "relative",
      config: {mass: 1, tension: 210, friction: 20}
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            data.length - 1
          ))
        );
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        display,
        position: "absolute",
        height: "90vh",
        width: "80vw",
        willChange: "transform",
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
      }}
    >
      <animated.div
        style={{
          transform: sc.interpolate(s => `scale(${s})`),
          height: "90vh",
          backgroundImage: `url(${data[i].verticalImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <Container style={{ paddingTop: "5%" }}>
          <PageSpan
            color="white"
            style={{
              fontSize: "24px",
              fontWeight: "500",
              padding: 0,
              margin: 0
            }}
          >
            {data[i].name}
          </PageSpan>
          <PageSpan
            color="white"
            style={{
              fontSize: "18px",
              fontWeight: "300",
              padding: 0,
              margin: 0
            }}
          >
            {data[i].tag}
          </PageSpan>
          <PageSpan color="white" style={{ fontSize: "12px" }}>
            {data[i].description}
          </PageSpan>
        </Container>
      </animated.div>
    </animated.div>
  ));
}

class Cell extends Component {
  render() {
    const { toggle, name, tag, image, description, active } = this.props;
    return (
      <div
        className="cell"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          cursor: !active ? "pointer" : "auto"
        }}
        onClick={!active ? toggle : undefined}
      >
        <Fade show={active} delay={active ? 500 : 0}>
          <div className="details">
            <Slug delay={600}>
              <div className="close">
                <Icon
                  type="close"
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={toggle}
                />
              </div>
              <div className="danceDescription">
                <PageTag
                  color="white"
                  style={{ fontSize: "24px", fontWeight: "400" }}
                >
                  {name}
                </PageTag>{" "}
                <PageSpan color="white">{description}</PageSpan>
              </div>
            </Slug>
          </div>
        </Fade>
        <Fade
          show={!active}
          from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
          enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
          delay={active ? 0 : 400}
        >
          <div className="default">
            <div
              style={{
                zIndex: 1,
                color: "white",
                textAlign: "center",
                overflowWrap: "break-word"
              }}
            >
              <PageTag color="white">{name}</PageTag>
              <PageTag color="white">{tag}</PageTag>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

class Suites extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: "24px"
        }}
      >
        <Container>
          <div style={{ width: "90%", height: "90%", padding: "5%" }}>
            <PageSpan>
              PCN typically consists of 5 traditional suites: Maria Clara,
              Tribal, Mountain, Muslim, and Rural. Each of these suites
              represents different tribes/areas of the Philippines, and they
              each have a distinct character or feel to the dances. In addition,
              we have a modern suite which showcases modern dance styles (i.e.
              hip hop).{" "}
            </PageSpan>
            <MediaQuery query="(max-device-width: 1023px)">
                <PageSpan><BoldSpan>Swipe the images to read more information.</BoldSpan></PageSpan>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 1024px)">
                <PageSpan><BoldSpan>Click on an image to read more information</BoldSpan></PageSpan>
            </MediaQuery>
          </div>
        </Container>
        <MediaQuery query="(max-device-width: 1023px)">
          <div
            style={{
              width: "80vw",
              height: "80vh",
              display: "block",
              overflow: "hidden",
              willChange: "transform"
            }}
          >
            <Viewpager />
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1024px)">
          <Grid
            className="grid"
            data={data}
            keys={d => d.name}
            heights={d => d.height}
            columns={3}
            margin={0}
            lockScroll={true}
            closeDelay={500}
            config={config.default}
          >
            {(data, active, toggle) => (
              <Cell {...data} active={active} toggle={toggle} />
            )}
          </Grid>
        </MediaQuery>
      </div>
    );
  }
}

export default Suites;
