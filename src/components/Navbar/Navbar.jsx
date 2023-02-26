import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar--wrapper">
      <div className="navbar--content">
        <div className="navbar--logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar--items">
          <ul className="navbar--links">
            <li className="navbar--item">
              <a href="#about">About</a>
            </li>
            <li className="navbar--item">
              <a href="#services">Services</a>
            </li>
            <li className="navbar--item">
              <a href="#skills">Skills</a>
            </li>
            <li className="navbar--item">Projects</li>
            <li className="navbar--item">Contact me</li>
          </ul>
        </div>
        <HiMenuAlt3 className="menu" onClick={() => setShow((show) => !show)} />
        {show && (
          <div className="navbar--mobile-items">
            <ul className="navbar--mobile-links">
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#about">About</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#services">Services</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                <a href="#skills">Skills</a>
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                Projects
              </li>
              <li className="navbar--item" onClick={() => setShow(false)}>
                Contact me
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
