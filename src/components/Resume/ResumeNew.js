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
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
    "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          <Row className="resume">
              <object className="showpdf"  data="https://pierrec.fr/CV-pierre.pdf" type="application/pdf">
                  <iframe src="https://pierrec.fr/CV-pierre.pdf"></iframe>
              </object>
          </Row>
        </Container>
      </div>
  );
}

export default ResumeNew;