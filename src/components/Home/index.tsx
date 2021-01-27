import * as React from "react";
import myImage from "./mee.png";
import "./Home.scss";
import fb from "./FB.png";
import li from "./LI.png";
import st from "./ST.png";

export const Home = () => {
  return (
    <div id="Home" className="home on-desktop rm-overlay">
      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/harish-soni-1b8065119/"
        >
          <img alt="Link" width="70px" src={li} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=100012736925355"
        >
          <img alt="FBLogo" src={fb} width="70px" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackoverflow.com/users/6457067/harish-soni"
        >
          <img alt="ST" width="70px" src={st} />
        </a>
      </div>
      <img className="myImage" src={myImage} alt="It's Awesome Harish" />
    </div>
  );
};
