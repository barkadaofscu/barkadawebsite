import React, { Component } from "react";
import mountain from "./assets/mountain.jpg";
import mariaclara from "./assets/maria_clara.jpg";
import modern from "./assets/modern.jpg";
import muslim from "./assets/muslim.jpg";
import rural from "./assets/rural.jpg";
import tribal from "./assets/tribal.jpg";
import "./styles.css";

const suite = [
  { id: "1", title: 'Maria Clara', cover: mariaclara },
  { id: "2", title: 'Mountain', cover: mountain },
  { id: "3", title: 'Modern', cover: modern },
  { id: "4", title: 'Tribal', cover: tribal },
  { id: "5", title: 'Muslim', cover: muslim },
  { id: "6", title: 'Rural', cover: rural }
];
class SuiteOverview extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "auto" }}>
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
            style={{ width: "48%", height: "auto", padding: '1%', float: "left", backgroundImage: `url(${s.cover})`, backgroundSize: 'cover'}}
          >
              <h1 style={{zIndex: 10, color: 'white',opacity: '80%', marginTop: '25%', marginBottom: '25%'}}>{s.title} </h1>
          </div>
        ))}
      </div>
    );
  }
}

export default SuiteOverview;
