import React from "react";

export default function NavbarBureau() {
    return (
        <nav className="navbar-bureau">

          <div className="navbar-left"> 
          <a href="/atelier">ATELIER LA PIEUVRE</a>
            </div>
            <div className="navbar-bureau-center">
          <a href="/"><img src="https://res.cloudinary.com/dnojcwwos/image/upload/v1774863326/9d78df4e-9bd3-4d9f-b9f6-676856022d57.png" alt="Logo" /></a>
            </div>
          <div className="navbar-right">
            <a href="/">Prestation live</a>
            <a href="/">Contact</a>
          </div>
        </nav>
     )
}