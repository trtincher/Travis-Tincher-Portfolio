import React from "react";
import "./Landing.scss";
import divider from "../../assets/svgs/divider.svg";
import email from "../../assets/svgs/mail.svg";
import linkedin from "../../assets/svgs/linkedin.svg";
import github from "../../assets/svgs/github.svg";

function Landing() {
  return (
    <div className="Landing">
      <div className="landing_header_container">
        <h2 className="landing_name">Travis Tincher</h2>
        <h1 className="landing_discription">Software Developer</h1>
      </div>

      <img src={divider} alt="page divider" />

      <div className="landing_image_container">
        <img src={email} alt="" />
        <img src={github} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
}

export default Landing;
