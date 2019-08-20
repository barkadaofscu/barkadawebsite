import React, { Component } from "react";
import castPhoto from "./assets/fullCast.jpeg";
import castPhoto1 from "./assets/fullCast1.png";
import "./styles.css";

class AboutPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "white",
          overflow: "hidden",
          textAlign: "center"
        }}
      >
        <div className="row">
          <h1 className="pageTitle">About</h1>

          <p className="tagLine">
            The <h2>largest</h2> student-run cultural production at Santa Clara
            University.
          </p>
        </div>
        <div className="row">
          <div className="column">
            <p className="content">
              <span className="colSpan">
                <h2>29th</h2> annual Pilipino Cultural Night
              </span>
              <span className="colSpan">
                <h2>15</h2> traditional folk dances
              </span>
              <span className="colSpan">
                <h2>3</h2> modern dances
              </span>
            </p>
          </div>
          <div className="column">
            <p className="content">
              <span className="colSpan">
                <h2>85</h2> cast members
              </span>
              <span className="colSpan">
                <h2>19</h2> alumni teachers
              </span>
              <span className="colSpan">
                <h2>353</h2> days to make this production come to life
              </span>
            </p>
          </div>
        </div>
        <div style={{ width: "70%", height: "20%", marginLeft: "15%" }}>
          <img
            src={castPhoto1}
            alt="cast"
            style={{ width: "100%", height: "auto", paddingBottom: "40px" }}
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;
