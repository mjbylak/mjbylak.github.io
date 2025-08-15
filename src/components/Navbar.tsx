import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">Mitchell Bylak</div>
            <ul className="nav-links">
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Music">Music</Link>
                </li>
                <li>
                    <Link to="/Handicraft">Handicraft</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
