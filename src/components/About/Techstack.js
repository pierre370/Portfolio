import React from "react";
import { Col, Row } from "react-bootstrap";
import {IoLogoJavascript,

} from "react-icons/io";
import FaVuejs from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
    SiPhp,
    SiHtml5,
    SiCss3,
    SiVuedotjs,
    SiSymfony,
    SiMysql,
    SiWordpress,
    SiBootstrap,
} from "react-icons/si";
import Progressbar from './progressbar';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="JavaScript" xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
          <Progressbar message="confirmer"/>
      </Col>
      <Col title="React Js" xs={4} md={2} className="tech-icons">
        <DiReact />
          <Progressbar message="deb"/>
      </Col>
      <Col title="PHP" xs={4} md={2} className="tech-icons">
        <SiPhp />
          <Progressbar message="confirmer"/>
      </Col>
      <Col title="HTML 5" xs={4} md={2} className="tech-icons">
        <SiHtml5 />
          <Progressbar message="confirmer"/>
      </Col>
      <Col title="CSS" xs={4} md={2} className="tech-icons">
        <SiCss3 />
          <Progressbar message="confirmer"/>
      </Col>
      <Col title="Vue Js" xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
          <Progressbar message="deb"/>
      </Col>
      <Col title="Symfony" xs={4} md={2} className="tech-icons">
        <SiSymfony />
          <Progressbar message="deb"/>
      </Col>
      <Col title="SQL" xs={4} md={2} className="tech-icons">
        <SiMysql />
          <Progressbar message="inter"/>
      </Col>
      <Col title="Wordpress" xs={4} md={2} className="tech-icons">
        <SiWordpress />
          <Progressbar message="inter"/>
      </Col>
      <Col title="Bootstrap" xs={4} md={2} className="tech-icons">
        <SiBootstrap />
          <Progressbar message="inter"/>
      </Col>
    </Row>
  );
}

export default Techstack;
