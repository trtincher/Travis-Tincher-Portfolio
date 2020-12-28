import React from "react";
import "./TopBar.scss";
import logo from "../../assets/svgs/squareLogo.svg";
import resume from "../../assets/pdf/Travis_Tincher_Resume.pdf";

function TopBar() {
  return (
    <>
      <a href="#Home">
        <img src={logo} alt="logo" className="desktop-logo" />
      </a>
      <div className="TopBar">
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>Contact</li>
          <li>
            <a href={resume} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopBar;
