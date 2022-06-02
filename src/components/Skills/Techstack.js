import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        color: "white",
        paddingBottom: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        {/* <img src={js} style={{ width: "100px" }} alt="" /> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
