import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "../Skills/Techstack";
import Toolstack from "../Skills/Toolstack";

function Skills() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <h1 className="project-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </>
  );
}

export default Skills;
