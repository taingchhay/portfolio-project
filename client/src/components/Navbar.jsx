import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <button className="navbar-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links${open ? " open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About Me</Link>
        <Link to="/skill" onClick={() => setOpen(false)}>Skill</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
