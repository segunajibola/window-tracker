import React from "react";
import "../navbar.css"

const Navbar = (props) => {
  return (
    <nav className={`flex justify-between p-5 shadow-md ${props.darkMode ? "dark" : ""} dark:bg-gray-900`}>
      <h1 className="text-lg font-semibold dark:text-gray-100">Window Width</h1>
      <span className="text-md dark:text-gray-100">Dark Mode</span>
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
