import React from "react";
import "../navbar.css"

const Navbar = (props) => {
  return (
    <nav className={`flex justify-between p-5 shadow-md ${props.darkMode ? "dark" : ""}`}>
      <h1 className="text-lg font-semibold">Window Width</h1>
      <span className="text-md">Dark Mode</span>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

export default Navbar;
