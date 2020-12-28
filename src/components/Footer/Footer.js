import React from "react";
import "./Footer.scss";
import logo from "../../assets/svgs/squareLogo.svg";
import resume from "../../assets/pdf/Travis_Tincher_Resume.pdf";

function Footer() {
  return (
    <div className="Footer">
      <a href="#Home">
        <div className="footer-branding">
          <img src={logo} alt="logo" />
          <div className="footer-logo-name">
            <p>Travis</p>
            <p>Tincher</p>
          </div>
        </div>
      </a>
      <div className="footer-navs">
        <ul>
          <li>
            <a href=".About">About</a>
          </li>
          <li>
            <a href=".Skills">Skills</a>
          </li>
          <li>
            <a href=".Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href={resume} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
