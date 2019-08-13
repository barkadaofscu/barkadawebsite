import React, { Component } from "react";
import MediaQuery, { useMediaQuery } from "react-responsive";
import castPhoto from "./assets/fullCast.jpeg";
import castPhoto1 from "./assets/fullCast1.png";
import "./styles.css";

class MobileAboutPage extends Component {
  render() {
    return (
      <div
        className="mobile">
        <div className="row">
          <h1 className="pageTitle">About</h1>

          <p className="mobileTagLine">
            The <h2>largest</h2> student-run cultural production at Santa Clara
            University.
          </p>
        </div>
        <div className="row">
          <div className="columnMobile">
            <p className="content">
              <span className="mobSpan">
                <h2>29th</h2> annual Pilipino Cultural Night
              </span>
              <span className="mobSpan">
                <h2>15</h2> traditional folk dances
              </span>
              <span className="mobSpan">
                <h2>3</h2> modern dances
              </span>
            </p>
          </div>
          <div className="columnMobile">
            <p className="content">
              <span className="mobSpan">
                <h2>85</h2> cast members
              </span>
              <span className="mobSpan">
                <h2>19</h2> alumni teachers
              </span>
              <span className="mobSpan">
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

export default MobileAboutPage;
