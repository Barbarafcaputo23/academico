import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Afogando as mágoas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Nav className="nav-link">Home</Nav>
              </Link>
              <Link to="/sobre">
                <Nav className="nav-link">Sobre</Nav>
              </Link>
              <Link to="/vinhos">
                <Nav className="nav-link">Vinhos</Nav>
              </Link>
              <Link to="/cervejas">
                <Nav className="nav-link">Cervejas</Nav>
              </Link>
              <Link to="/espumantes">
                <Nav className="nav-link">Espumantes</Nav>
              </Link>
              <Link to="/whisky">
                <Nav className="nav-link">Whisky</Nav>
              </Link>
              <Link to="/destilados">
                <Nav className="nav-link">Destilados</Nav>
              </Link>
              <Link to="/carrinho">
                <Nav className="nav-link">Carrinho</Nav>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
