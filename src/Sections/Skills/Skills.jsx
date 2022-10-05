import React from "react";
import "./Skills.scss";
import JS from "../../assets/javascript.png";
import TS from "../../assets/typescript.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import SASS from "../../assets/sass.png";
import REACT from "../../assets/react.png";
import REDUX from "../../assets/redux.png";
import GIT from "../../assets/git.png";

const skills = [
  {
    id: 1,
    title: "html",
    image: HTML,
  },
  {
    id: 2,
    title: "css",
    image: CSS,
  },
  {
    id: 3,
    title: "sass",
    image: SASS,
  },
  {
    id: 4,
    title: "javascript",
    image: JS,
  },
  {
    id: 5,
    title: "typescript",
    image: TS,
  },
  {
    id: 6,
    title: "react",
    image: REACT,
  },
  {
    id: 7,
    title: "redux",
    image: REDUX,
  },
  {
    id: 8,
    title: "git",
    image: GIT,
  },
];

const Skills = () => {
  const movingMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById("anchore");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    const eyes = document.querySelectorAll(".oneEyee");
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    });
  };
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };
  return (
    <div className="skills--wrapper" onMouseMove={movingMouse} id="skills">
      <div className="nodeAbsBox" id="anchore">
        <div className="eyese">
          <div className="oneEyee">.</div>
          <div className="oneEyee">.</div>
        </div>
      </div>
      <h1>#Skills & Experience</h1>
      <div className="skills--content">
        <div className="skills--boxes">
          {skills.map((e) => (
            <div className="skill-box" key={e.id}>
              <img src={e.image} alt="skill-logo" />
              <p>{e.title}</p>
            </div>
          ))}
        </div>
        <div className="experience--boxes">
          <div className="experience--box">
            <h2>June-August 2021 : Summer internship at SOrecom</h2>
            <p>
              lorem ipsum hala hala rabou7i lorem ipsum hala hala rabou7i lorem
              ipsum hala hala rabou7i lorem ipsum hala hala rabou7i lorem ipsum
              hala hala rabou7i lorem ipsum hala hala rabou7i lorem ipsum hala
              hala rabou7i lorem ipsum hala hala rabou7i{" "}
            </p>
          </div>
          <div className="experience--box">
            <h2>June-September 2022 : Summer internship at Numerys</h2>
            <p>lorem ipsum hala hala rabou7i</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
