import React, { Component } from "react";
import "./styles.css";

class AboutPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          textAlign: "center",
          paddingBottom: "40px"
        }}
      >
        <h1 className="pageTitle">About</h1>

        <p className="content">
          Philippino Culture Night is the largest student run culture show
          hosted by Barkada of Santa Clara University. Our title, Pagyakap Sa
          Pananaw: Embracing Perspectives, explores the different outlooks of
          what it means to grow up Pilipino, whether that was in the
          Philippines, the struggles to come to America, and what this means for
          the following generations of Pilipino Americans. This skit reminds us
          that our historical past shapes our identity today. We explore the
          generational and cultural differences we face within our community. By
          acknowledging our differences, we are better able to embrace our
          identities and embrace others, bridging our communities together.
      </p>

      <p className="content">
          A two-night celebration of rich Filipino culture.
          The largest student-run cultural production at Santa Clara University.
          - 29th annual Pilipino Cultural Night
          - 15 traditional folk dances, 3 modern dances
          - Skit highlighting Filipino identiy and understanding perspectives
          - Collaborating with world-renowed Filipino folk dancers and musicians
      </p>
        <div style={{ width: "100%", height: "50%" }}>
          <div
            style={{
              width: "33.33%",
              height: "100%",
              float: "left",
              backgroundColor: "blue"
            }}
          >
            <h1 style={{ color: "white" }}>Test Area</h1>
          </div>
          <div
            style={{
              width: "33.33%",
              height: "100%",
              float: "left",
              backgroundColor: "red"
            }}
          >
            <h1 style={{ color: "white" }}>Test Area</h1>
          </div>
          <div
            style={{
              width: "33.33%",
              height: "100%",
              float: "left",
              backgroundColor: "green"
            }}
          >
            <h1 style={{ color: "white" }}>Test Area</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
