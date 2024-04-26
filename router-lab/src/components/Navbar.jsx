// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Kalvium</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}

export default Navbar;
