import * as React from "react";
import { projects } from "./projects";
import "./Projects.scss";

export const Projects = () => {
  return (
    <div id="Projects" className="page projects-pane">
      <h1 className="page-heading">Projects</h1>
      <div className="projects">
        {projects.map((proj) => {
          return (
            <div key={proj.id} className="card">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={proj.preview || "#"}
                className="link"
              >
                <h3 className="project-title">
                  {/* {proj.title} */}
                  <img
                    className={proj.className || "project-logo"}
                    src={proj.img}
                    alt="Project Logo"
                  />
                </h3>

                <p className="project-desc">{proj.description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
