import React from "react";
import "./Skills.scss";
import skillsData from "../../data/skills";

const skills = skillsData.map((skill) => {
  return (
    <div className="skill_container" key={skill.name}>
      <img src={skill.logo} alt="skill logo" />
      <p>{skill.name}</p>
    </div>
  );
});

function Skills() {
  return (
    <div className="Skills" id="Skills">
      <div className="headerBox">
        <h1>Skills</h1>
      </div>

      <div className="skills_body">{skills}</div>
    </div>
  );
}

export default Skills;
