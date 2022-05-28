import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pawanraje Kadam </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br />
            Analytical and detail-oriented aspiring Full Stack Developer.
            Capable of writing production-ready code using ReactJS, ans CSS on
            frontend, NodeJS and Express on the backend to building single page
            apllications. Passionate about coding and strongly intrested in
            working in product based company.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">{/* pawanraje  */}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
