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
import NODE from "../../assets/node.png";
import EXPRESS from "../../assets/express.png";
import MONGO from "../../assets/mongodb.png";
import MYSQL from "../../assets/mysql.png";
import Spring from "../../assets/spring.png";
import DOCKER from "../../assets/docker.png";
import AWS from "../../assets/aws.png";

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
    title: "nodejs",
    image: NODE,
  },
  {
    id: 9,
    title: "expressjs",
    image: EXPRESS,
  },
  {
    id: 10,
    title: "mongo db",
    image: MONGO,
  },
  {
    id: 11,
    title: "MySql",
    image: MYSQL,
  },
  {
    id: 14,
    title: "spring boot",
    image: Spring,
  },
  {
    id: 12,
    title: "git",
    image: GIT,
  },
  {
    id: 13,
    title: "docker",
    image: DOCKER,
  },
  {
    id: 15,
    title: "aws",
    image: AWS,
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
            <h2>June-September 2022 : Summer internship at Numerys</h2>
            <ul>
              <li>
                Collaborated with a four‑person team to develop a web
                application that let users post motors to sell, contact an owner
                to buy a motor, get reservation to repair a motor for a french
                company
              </li>
              <li>
                Developed authentication and authorization of the web
                application
              </li>
              <li>
                Built the logic for managing products(motors) of the application
                and the reservation system.
              </li>
              <li>Added payment methods such as Stripe and ScalaPay</li>
              <li>
                Added some crud operation and filtering to the admin dashboard.
              </li>
            </ul>
          </div>
          <div className="experience--box">
            <h2>June-August 2021 : Summer internship at SMEG</h2>
            <ul>
              <li>
                Collaborated with a person to build an e‑commerce web
                application of electronic products.
              </li>
              <li>
                Designed the database models and collections, and designed the
                user interface of the web app.
              </li>
              <li>Helped to create an Admin dashboard.</li>
              <li>
                Added create, read, update, delete functionalities to the
                products with filtering and sorting.
              </li>
              <li>Added statistics to the admin dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
