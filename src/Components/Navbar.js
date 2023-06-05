import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
    <Container>
    <Navbar className="navbar navbar-expand-sm bg-dark">
        <Container className="fluid">
        
          {/* <Navbar.Brand href="#home">N</Navbar.Brand> */}
          <Nav  className="ms-auto">
            <Nav.Link href="/Home.js">Home</Nav.Link>
            <Nav.Link href="\About.js">About</Nav.Link>
            <Nav.Link href="\Contact.js">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Container>
      
    </>
  );
}

export default ColorSchemesExample;