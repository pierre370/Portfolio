import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {useRef, useEffect} from 'react';
import Tilt from "react-parallax-tilt";
import Button from '@mui/material/Button';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import anime from "animejs";
import {Link} from "react-router-dom";

function Home2() {
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const el2 = ref.current;
    const el3 = ref2.current;

    el2.innerHTML = el2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
        .add({
          targets: '.ml2 .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70*i
        }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 3000,
      easing: "easeOutExpo",
      delay: 8000
    });

  }, []);



  return (
    <Container ref={ref2} fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1  className="" style={{ fontSize: "2.6em" }}>
              A propos de moi <span className="blue">- Bio </span> 
            </h1>
            <p  ref={ref} className="home-about-body ml2">
              Débutant mais en apprentissage dans le Web, et avide de découvrir de nouvelles
              Technologies, <b className="blue">Conceptes</b> et langages.
              <br />
              <br />Je suis Étudiant en alternance à <a target="_blank" href="https://www.ynov-nantes.com/" className="blue">Ynov Campus Nantes </a> 
              <i>
                Master Expert en développement Web
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Link to="/competences">
         <Button color="secondary" className="buttonhome" variant="contained">Plus de Détails</Button>
        </Link>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me suivre</h1>
      
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pierre370"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/PierreCoft"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pierre-coeffeteau-1520731a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pierre_coft/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
