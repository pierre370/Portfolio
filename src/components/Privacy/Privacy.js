import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import {SpecialZoomLevel, Viewer, Worker} from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import pdf from "../../Assets/../Assets/CV-pierre.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import GitHubCard from "../Projects/Github";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function Privacy() {

    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">

                </h1>
                <Container fluid className="about-section">
                    <Container>
                        <Row style={{ justifyContent: "center", padding: "10px" }}>
                            <Row className="resume">
                                <object className="showpdf"  data="https://pierrec.fr/Politique_confidentialite.pdf" type="application/pdf">
                                    <iframe src="https://pierrec.fr/Politique_confidentialite.pdf"></iframe>
                                </object>
                            </Row>
                        </Row>
                    </Container>
                </Container>
                <p style={{ color: "white" }}>

                </p>

            </Container>
        </Container>
    );
}

export default Privacy;