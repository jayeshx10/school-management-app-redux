import React from "react";

import "./Header.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header__heading">School Management App</h1>
      <nav className="header__navbar">
        <NavLink to="/" className="header__nav-link">
          School
        </NavLink>
        <NavLink to="/class" className="header__nav-link">
          Class
        </NavLink>
        <NavLink to="/students" className="header__nav-link">
          Students
        </NavLink>
        <NavLink to="/teachers" className="header__nav-link">
          Teachers
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
