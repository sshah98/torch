import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [bigImage, setImage] = useState(null);
  const [show, setShow] = useState(false);

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
    `https://torchimages-dev.imgix.net/handson-images/${imagePath}.jpg`;

  const onThumbnailClick = (image) => {
    setImage(image);
    setShow(true);
  };

  const decrement = (image) => {
    var index = images.indexOf(image);

    if (index === 0) {
      setImage(images[images.length - 1 - index]);
    } else {
      setImage(images[index - 1]);
    }
  };

  const increment = (image) => {
    var index = images.indexOf(image);

    if (index < images.length - 1) {
      setImage(images[index + 1]);
    } else {
      setImage(images[images.length - 1 - index]);
    }
  };

  return (
    <div className="App">
      <h2>Torch Dental</h2>

      <h3>Image Here</h3>

      {bigImage && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="container">
              <img
                src={buildURL(bigImage)}
                width="400"
                height="400"
                alt={bigImage}
              />
              <div class="text-block">
                <input />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => decrement(bigImage)}>
              Previous
            </Button>
            <Button variant="primary" onClick={() => increment(bigImage)}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <div>
        {images.map((image) => (
          <img
            src={buildURL(image)}
            key={image}
            alt={image}
            width="50"
            height="50"
            onClick={() => onThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
