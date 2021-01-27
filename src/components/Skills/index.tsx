import * as React from "react";
import "./Skills.scss";
import { skills } from "./skills";

export const Skills = () => {
  return (
    <div id="Skills" className="about-me page">
      <h1 className="page-heading">Skills</h1>
      <div className="skills-pane">
        {skills.map((skill, i) => {
          return (
            <div key={i} className="skill-card">
              {skill.name}
              <img src={skill.logo} alt="Skill Logo" className="tech-logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
