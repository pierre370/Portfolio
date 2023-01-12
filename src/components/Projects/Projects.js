import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import GitHubCard from './Github';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="blue">projets </strong>
        </h1>
          <Container fluid className="about-section">
              <Container>
                  <Row style={{ justifyContent: "center", padding: "10px" }}>
                      <GitHubCard />
                  </Row>
              </Container>
          </Container>
        <p style={{ color: "white" }}>
          
        </p>

      </Container>
    </Container>
  );
}

export default Projects;
