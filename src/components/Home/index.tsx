import * as React from "react";
import myImage from "../../myImg2.png";
import "./Home.scss";

export const Home = () => {
  return (
    <div id="Home" className="home on-desktop rm-overlay">
      <img className="myImage" src={myImage} alt="It's Awesome Harish" />
    </div>
  );
};
