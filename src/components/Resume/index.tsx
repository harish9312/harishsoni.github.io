import * as React from "react";
import "./Resume.scss";

export const Resume = () => {
  return (
    <div id="Resume" className="about-me page">
      <h1 className="page-heading">Resume</h1>
      <iframe
        style={{ minHeight: "90vh" }}
        width="100%"
        height="600"
        src="https://drive.google.com/file/d/13j32LFXmwfkUbX81wpxVfYfHcKL3ybGV/preview"
        allowFullScreen
        title="My Resume"
      ></iframe>
    </div>
  );
};
