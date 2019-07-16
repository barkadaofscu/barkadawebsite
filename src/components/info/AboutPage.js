import React, { Component } from "react";
import "./styles.css";

class AboutPage extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        <h1 className="header">About</h1>

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
          identities and embrace others, bridging our communities together.{" "}
        </p>
      </div>
    );
  }
}

export default AboutPage;
