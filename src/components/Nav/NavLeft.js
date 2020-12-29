import React, { useState } from "react";
import Hamburger from "./Hamburger";
import "./NavLeft.scss";
import logo from "../../assets/svgs/squareLogo.svg";
import resume from "../../assets/pdf/Travis_Tincher_Resume.pdf";

function NavLeft({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [left, setLeft] = useState("-500px");
  const [display, setDisplay] = useState("none");

  const onNavClick = () => {
    if (isOpen) {
      setLeft("-500px");
      setDisplay("none");
    } else {
      setLeft("0");
      setDisplay("block");
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="NavLeft">
      <Hamburger handleNavClick={onNavClick} />
      <div className="left-drawer" style={{ left: `${left}` }}>
        <ul>
          <li className="home-logo" onClick={onNavClick}>
            <a href="#Home">
              <img src={logo} alt="logo" />
              <div className="logo-name">
                <p>Travis</p>
                <p>Tincher</p>
              </div>
            </a>
          </li>
          <li onClick={onNavClick}>
            <a href="#About">About</a>
          </li>
          <li onClick={onNavClick}>
            <a href="#Skills">Skills</a>
          </li>
          <li onClick={onNavClick}>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li onClick={onNavClick} className="list-contact">
            <p onClick={onContactClick}>Contact</p>
          </li>
          <li onClick={onNavClick}>
            <a href={resume} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div
        className="background-nav"
        onClick={onNavClick}
        style={{ display: `${display}` }}
      ></div>
    </div>
  );
}

export default NavLeft;
