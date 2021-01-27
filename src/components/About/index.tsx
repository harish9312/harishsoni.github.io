import * as React from "react";
import "./About.scss";
import marked from "marked";
import gitlogo from "./GitLogo.png";
marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const source = `# Hi Visitor! 
---
I'm **Harish Soni**, from *Korba, CG*. 🇮🇳 A **Senior Software
Developer 👨🏻‍💻 at [Coditas LLP](https://coditas.com)**. I have 3.6+ years of
experience of Developing Web and Node Applications.
## My Coding Motivations 🙏🏼
---
* An Artist is know by his/her art, and a Coder is known by
his/her code.😇 
* Don't write the code which you also cannot clean later. 💯
* A Programmer cannot stop learning.💡`;
export const AboutMe = () => {
  return (
    <div id="AboutMe" className="about-me page">
      <h1 className="page-heading">About Me</h1>
      <div
        className="about"
        dangerouslySetInnerHTML={{ __html: marked(source) }}
      />
      <a
        href="https://github.com/harish9312"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
      >
        <img src={gitlogo} className="github-logo" alt="GitLogo" />
      </a>
    </div>
  );
};
