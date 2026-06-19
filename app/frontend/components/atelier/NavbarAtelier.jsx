import React from "react";

export default function NavbarAtelier() {
    return (
        <nav className="navbar-atelier">

          <div className="navbar-left  "> 
          <a href="/atelier">ATELIER <strong>LA PIEUVRE</strong></a>
            </div>
            <div className="navbar-atelier-center">
          <a href="/"><img src="https://res.cloudinary.com/dnojcwwos/image/upload/v1776416329/08a6a08d-1b8c-4227-8c88-718ef85ffe28.png" alt="Logo" /></a>
            </div>
          <div className="navbar-right">
            <a href="/" style={{ marginRight: "10rem" }}>INSTAGRAM</a>
            <a href="#contactez-nous">CONTACT</a>
          </div>
        </nav>
     )
}