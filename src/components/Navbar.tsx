import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        Mitchell Bylak
      </div>
      <ul className="nav-links">
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="portfolio">Portfolio</a></li> 
        <li><a href="projects">Projects</a></li>
        <li><a href="music">Music</a></li>
        <li><a href="handicraft">Handicraft</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
