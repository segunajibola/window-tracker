import React from "react";
import { FaGithub } from "react-icons/fa";
import "../navbar.css";

const Navbar = (props) => {
  return (
    <nav
      className={`flex justify-between p-5 shadow-md ${
        props.darkMode ? "dark" : ""
      } dark:bg-gray-900`}
    >
      <h1 className="text-xl font-semibold dark:text-gray-100">Window Width</h1>
      <a href="https://github.com/segunajibola/window-width" target="_blank">
        <FaGithub className="dark:text-white" size={23} />
      </a>
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
