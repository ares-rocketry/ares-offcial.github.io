import React from 'react';
import './Navbar.css';

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";


export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Nav className="me-auto">
          <Link to="/home">Home</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/sponsors">SPONSORS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/join">JOIN US</Link>
        </Nav>
      </Container>
    </Navbar>
  );

}