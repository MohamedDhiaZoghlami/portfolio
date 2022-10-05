import React from "react";
import "./Hero.scss";
import Profile from "../../assets/profile.png";

const Hero = () => {
  const movingMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById("anchor");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    const eyes = document.querySelectorAll(".oneEye");
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
    <section className="hero--wrapper" onMouseMove={movingMouse}>
      <div className="hero--infos">
        <h1>👋 Hi I'm Mohamed Dhia Zoghlami,</h1>
        <h2>
          Full Stack JavaScript
          <span data-text="&nbsp;Developer.&nbsp;">&nbsp;Developer.&nbsp;</span>
        </h2>
        <div className="boxInfos">
          <div className="jsAbsBox" id="anchor">
            <div className="eyes">
              <div className="oneEye">.</div>
              <div className="oneEye">.</div>
            </div>
          </div>
          <p>
            From coding APIs to creating beautifull user interfaces , using
            Javascript to create full stack web applications using React for the
            front-end and Node.js and express to handle the server side of the
            apps.
          </p>
        </div>
      </div>
      <div className="hero--image">
        <img src={Profile} alt="profile" className="profileImg" />
      </div>
    </section>
  );
};

export default Hero;
