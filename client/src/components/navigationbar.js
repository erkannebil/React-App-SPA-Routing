import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigationbar = () => {

    return (
       <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">FilmBase</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movies"> Movies</Nav.Link>
            <Nav.Link href="/person"> Person</Nav.Link>
            <Nav.Link href="/tv"> Tv</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       </>
    );
}


export default Navigationbar;