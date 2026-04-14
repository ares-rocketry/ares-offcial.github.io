import React, { useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/sponsors">SPONSORS</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">GALLERY</NavLink>
        </li>
        <li>
          <NavLink to="/join">JOIN US</NavLink>
        </li>
      </ul>
    </nav>
  );
};
