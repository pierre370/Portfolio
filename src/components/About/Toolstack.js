import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
    SiMicrosoftsqlserver,
    SiPhpstorm,
    SiMaterialui
} from "react-icons/si";
import Progressbar from './progressbar';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="Linux" xs={4} md={2} className="tech-icons">
        <SiLinux />
          <Progressbar message="deb"/>
      </Col>
      <Col title="Visual code" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
          <Progressbar message="confirmer"/>
      </Col>
      <Col title="Postman" xs={4} md={2} className="tech-icons">
        <SiPostman />
          <Progressbar message="inter"/>
      </Col>
      <Col title="PHP Storm" xs={4} md={2} className="tech-icons">
        <SiPhpstorm />
          <Progressbar message="confirmer"/>
      </Col>
      <Col title="SQL server" xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
          <Progressbar message="inter"/>
      </Col>
        <Col title="Material UI" xs={4} md={2} className="tech-icons">
            <SiMaterialui />
            <Progressbar message="deb"/>
        </Col>
    </Row>
  );
}

export default Toolstack;
