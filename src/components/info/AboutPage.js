import React, { Component } from "react";
import castPhoto from "./assets/fullCast.jpeg";
import "./styles.css";

class AboutPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          overflow: "hidden"
        }}
      >
        <h1 className="pageTitle">About</h1>

        <p className="tagLine">
          The <h2>largest</h2> student-run cultural production at Santa Clara
          University.
        </p>
        <div className="row">
          <div className="column">
            <p className="content">
              <span>
                <h2>29th</h2> annual Pilipino Cultural Night{" "}
              </span>
              <span>
                <h2>15</h2> traditional folk dances, <h2>3</h2> modern dances
              </span>
              <span>
                Skit highlighting Filipino identity and understanding
                perspectives
              </span>
              <span>
                Collaborating with world-renowed Filipino folk dancers and
                musicians
              </span>
            </p>
          </div>
          <div className="column">
            <p className="content">
              <span>
                <h2>85</h2> cast members
              </span>
              <span>
                <h2>19</h2> alumni teachers
              </span>
              <span>
                <h2>353</h2> days to make this production come to life
              </span>
            </p>
            <img
              src={castPhoto}
              alt="cast"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
