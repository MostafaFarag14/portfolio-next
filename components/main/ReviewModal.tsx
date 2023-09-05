import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReactPlayer from "react-player/youtube";
import classes from "./portfolio.module.css";

function ReviewModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" size="sm" onClick={handleShow}>
        Watch Video Review
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName={`${classes.modalDialog}`}
        contentClassName={`${classes.modalContent}`}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wafar Points Video Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactPlayer
            width="100%"
            height="35vw"
            style={{ minHeight: "40vh" }}
            controls
            url={"https://youtu.be/dC9YHRR2vSU"}
          />

          {/* <iframe
              src="https://www.veed.io/embed/0e01c178-0eeb-47e4-8e65-fe75fef81c25"
              width="100%"
              height="504"
              // frameBorder="0"
              title="Screen Recording - Sep 3, 2023"
              allowFullScreen
              onLoad={() => {
                console.log("loading");
              }}
            ></iframe> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ReviewModal;
