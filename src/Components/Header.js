import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="No Logo"
              src="data:image/png;base64,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"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            &nbsp;
             Find Me  Here
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;