import React from "react";
import "./Landing.scss";
import divider from "../../assets/svgs/divider.svg";
import email from "../../assets/svgs/mail.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import github from "../../assets/svgs/github.svg";

function Landing({ onContactClick }) {
  return (
    <div className="Landing" id="Home">
      <div className="landing_header_container">
        <h2 className="landing_name">Travis Tincher</h2>
        <h1 className="landing_discription">Software Developer</h1>
      </div>

      <img src={divider} alt="page divider" />

      <div className="landing_image_container">
        <img src={email} alt="emal logo" onClick={onContactClick} />
        <a href="https://github.com/trtincher" target="_blank">
          <img src={github} alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/travis-tincher/" target="_blank">
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
