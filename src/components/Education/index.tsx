import * as React from "react";
import "./Education.scss";
import marked from "marked";
marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const source = `#  BE Honours, Computer Science
-  SSGI - Faculty of Engineering & Technology
-  Bhilai, Chhattishgarh
-  Batch: 2013-2017
---
#  Higher Secondary, Maths
- Adarsh Higher Secondary School
- Balco Nagar, Chhattishgarh
-  Batch: 2011-2013
---

#  High School
-  Adarsh Higher Secondary School
-  Balco Nagar, Chhattishgarh
-  Batch: 2010`;

export const Education = () => {
  return (
    <div id="Education" className="about-me page">
      <h1 className="page-heading">Education</h1>
      <div
        className="education"
        dangerouslySetInnerHTML={{ __html: marked(source) }}
      />
    </div>
  );
};
