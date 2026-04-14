import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';


export const Navbar = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/sponsors">SPONSORS</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/join">JOIN US</Link></li>
      </ul>
    </nav>


  );

}