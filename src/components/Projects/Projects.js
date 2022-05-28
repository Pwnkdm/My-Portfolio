import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bb from "../../Assets/bigbaslet.png";
import myglamm from "../../Assets/myglamm.png";
import tcity from "../../Assets/travelocity.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tcity}
              isBlog={false}
              title="Travalocity"
              description="Travelocity is an online travel agency by Expedia group. That allowed consumers the ability to purchase travel tickets.In addition to airfares, the site also permits consumers to book hotel rooms, rental cars, cruises and packaged vacations.
              It is collaborative project build by team 6 peoples executed in 6 days with help of React, Redux , Js, & CSS"
              link="https://github.com/AmanJaiswal0612/React_Travelocity_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myglamm}
              isBlog={false}
              title="MyGlamm"
              description="MyGlamm is a direct-to-consumer beauty brand that offers an online beauty products marketplace with international spa and salon products. The company uses a combination of technology, content, and social media to allow consumers to not only discover its products but also create rich, personalized, content and tutorial.
              It is collaborative project build by team 6 peoples executed in 6 days with help of HTML, Js, CSS."
              link="https://github.com/sam12125/myGlamm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bb}
              isBlog={false}
              title="Big Basket"
              description="BigBasket is an online food and grocery store that delivers personal and household needs right to the customer's doorstep.
              It is collaborative project build by team 6 peoples executed in 6 days with help of HTML, Js, CSS."
              link="https://github.com/Snehil133/BigBasketProject"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
