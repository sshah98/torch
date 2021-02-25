import React, { useState } from "react";

import {
  Modal,
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [bigImage, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [cap, setCap] = useState(false);

  const handleClose = () => setShow(false);

  const images = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];

  const buildURL = (imagePath) =>
    `https://torchimages-dev.imgix.net/handson-images/${imagePath}.jpg?fit=clamp`;

  const onThumbnailClick = (image) => {
    setImage(image);
    setShow(true);
  };

  const decrement = (image) => {
    var index = images.indexOf(image);
    setCap(false);

    if (index === 0) {
      setImage(images[images.length - 1 - index]);
    } else {
      setImage(images[index - 1]);
    }
  };

  const increment = (image) => {
    var index = images.indexOf(image);
    setCap(false);

    if (index < images.length - 1) {
      setImage(images[index + 1]);
    } else {
      setImage(images[images.length - 1 - index]);
    }
  };

  const caption = () => {
    setCap(true);
  };

  return (
    <div className="App">
      <h2>Torch Dental</h2>

      {bigImage && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nicolas Cage {bigImage}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="text-block">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="..."
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <img
                src={buildURL(bigImage)}
                width="400"
                height="400"
                alt={bigImage}
              />
            </div>
            {cap && (
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="add caption!"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Container fluid>
              <Row style={{ display: "flex" }}>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={() => decrement(bigImage)}
                  >
                    Previous
                  </Button>
                </Col>
                <Col>
                  <Button variant="secondary" onClick={caption}>
                    Caption
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "#00AEF4" }}
                    onClick={() => increment(bigImage)}
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Footer>
        </Modal>
      )}

      <Container>
        <Row>
          {images.map((image) => (
            <Col sm={4} key={image}>
              <img
                src={buildURL(image)}
                key={image}
                alt={image}
                width="75"
                height="75"
                onClick={() => onThumbnailClick(image)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
