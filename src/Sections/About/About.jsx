import React from "react";
import "./About.scss";

const About = () => {
  const movingMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById("anchors");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    const eyes = document.querySelectorAll(".oneEyes");
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
    <div className="about--wrapper" onMouseMove={movingMouse} id="about">
      <div className="about--content">
        <div className="about--image">
          <h1>#About me</h1>
        </div>
        <div className="about--infos">
          <div className="reactAbsBox" id="anchors">
            <div className="eyess">
              <div className="oneEyes">.</div>
              <div className="oneEyes">.</div>
            </div>
          </div>
          <h2>Who am i ?</h2>
          <p>
            I'm Dhia, a web developer with a unique background in mathematics.
            After earning my bachelor's degree in mathematics, I've felt in love
            with programming so instead of looking for jobs i have decided to
            engage in another college degree and pursue a career in software
            engineering. I discovered that the logical thinking and
            problem-solving skills I developed during my studies in mathematics
            have been invaluable assets in my work as a developer. Since making
            the switch, I have been passionate about creating engaging and
            dynamic websites that not only look great but also provide seamless
            user experiences. When I'm not coding, I enjoy watching football,
            reading, and taking long walks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
