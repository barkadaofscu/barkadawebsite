import React, { Component } from "react";
import mountain from "./assets/mountain.jpg";
import mariaclara from "./assets/maria_clara.jpg";
import modern from "./assets/modern.jpg";
import muslim from "./assets/muslim.jpg";
import rural from "./assets/rural.jpg";
import tribal from "./assets/tribal.jpg";
import "./styles.css";

const suite = [
  { id: "1", cover: mariaclara },
  { id: "2", cover: mountain },
  { id: "3", cover: modern },
  { id: "4", cover: tribal },
  { id: "5", cover: muslim },
  { id: "6", cover: rural }
];
class SuiteOverview extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <h1 className="header">Suites</h1>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac pretium nunc. Integer efficitur libero purus, et hendrerit ligula
          imperdiet vitae. Maecenas eu interdum est. Quisque a mauris ac dui
          vestibulum pretium. Aenean ac posuere orci, a luctus tellus. Maecenas
          vestibulum vitae massa vel auctor. Nullam id risus ullamcorper,
          malesuada orci sit amet, fermentum enim. Pellentesque pulvinar mauris
          at dolor pulvinar aliquet sit amet non dolor.
        </p>
        {suite.map(s => (
          <div
            key={s.id}
            style={{ width: "50%", height: "auto", float: "left" }}
          >
            <img src={s.cover} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </div>
    );
  }
}

export default SuiteOverview;
