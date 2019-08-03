import React, { Component } from "react";
import director1 from "./assets/Colman Lin.jpeg";
import director2 from "./assets/Dana Militante.jpeg";
import director3 from "./assets/Janine Bautista.jpeg";
import "./styles.css";

class DirectorPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          textAlign: "center",
          overflow: "hidden"
        }}
      >
        <h1 className="pageTitle">From the Directors</h1>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac pretium nunc. Integer efficitur libero purus, et hendrerit ligula
          imperdiet vitae. Maecenas eu interdum est. Quisque a mauris ac dui
          vestibulum pretium. Aenean ac posuere orci, a luctus tellus. Maecenas
          vestibulum vitae massa vel auctor. Nullam id risus ullamcorper,
          malesuada orci sit amet, fermentum enim. Pellentesque pulvinar mauris
          at dolor pulvinar aliquet sit amet non dolor.
        </p>
        <div style={{ width: "100%", height: "50%", marginTop: "48px" }}>
          <div
            style={{
              width: "25%",
              height: "100%",
              float: "left",
              marginLeft: "12.5%"
            }}
          >
            <img
              src={director1}
              alt="Director 1"
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "50%"
              }}
            />
            <h2>Colman Lin</h2>
          </div>
          <div
            style={{
              width: "25%",
              height: "100%",
              float: "left"
            }}
          >
            <img
              src={director2}
              alt="Director 2"
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "50%"
              }}
            />
            <h2>Dana Militante</h2>
          </div>
          <div
            style={{
              width: "25%",
              height: "100%",
              float: "left"
            }}
          >
            <img
              src={director3}
              alt="Director 2"
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "50%"
              }}
            />
            <h2>Janine Bautista</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DirectorPage;
