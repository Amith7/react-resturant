import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Restrev({ review }) {
  const [open, setOpen] = useState(false);

  console.log(review);
  return review.map((item) => (
    <Card style={{ float: "left" }} className="border m-4  mt-3">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
        <Card.Text>Rating : {item.rating}</Card.Text>
        <Card.Text>
          <Button 
          className="btn btn-dark"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Comments
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">{item.comments}</div>
          </Collapse>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
}

export default Restrev;
