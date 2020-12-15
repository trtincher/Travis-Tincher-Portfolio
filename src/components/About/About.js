import React from "react";
import "./About.scss";
import headshot from "../../assets/img/headshot-transparent.png";

function About() {
  return (
    <div className="About">
      <div className="headerBox">
        <h1>About Me</h1>
      </div>
      <div className="headshot">
        <img src={headshot} alt="headshot" />
      </div>
      <div className="about_body">
        <p>
          I’m a <span>Houston based</span> software developer who builds user
          forward websites with an eye towards integrating function and design!
        </p>
        <p>
          I have a diverse background in philosophy, theology, art and beer,
          which has given me an eye for aesthetic and a mind for the production
          cycle.
        </p>
      </div>
    </div>
  );
}

export default About;
