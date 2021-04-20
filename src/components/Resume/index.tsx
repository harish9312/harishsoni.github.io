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
        src="https://www.docdroid.net/HiIHHiT/harish-soni-pdf"
        allowFullScreen
        title="My Resume"
      ></iframe>
    </div>
  );
};
