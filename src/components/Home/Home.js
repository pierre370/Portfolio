import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import HomeBg from "../../Assets/HomeBg.jpg";
import myImg from "../../Assets/avatar.svg";

function Home() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1>&lsaquo; Portfolio /&rsaquo;</h1>
                            <h1 style={{paddingBottom: 15}} className="heading">
                                &lsaquo; Pierre <strong className="main-name">Coeffeteau{" "}</strong>
                                <span className="wave" role="img" aria-labelledby="wave">
                </span>
                                /&rsaquo;
                            </h1>
                            <div style={{textAlign: "left"}} className="headingv">
                                <Type/>

                            </div>
                        </Col>

                        <Col md={5} style={{paddingBottom: 100}}>
                            <Tilt>
                                <img style={{maxHeight: "450px", borderRadius: "10px"}} src={HomeBg} className="img-fluid" alt="avatar"/>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2/>
        </section>
    );
}

export default Home;
