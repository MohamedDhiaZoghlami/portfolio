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
            Im Dhia, an enthusiastic and very motivated software engineer
            student. Since i was a child , i loved logic , i loved problem
            solving even the simpliest ones so it was a no brainer for me that i
            have chosen to study mathematics after highschool. I loved every
            part of it from solving complex problems to some simple
            stuff.However on my last year of university , ive felt in love with
            programming so instead of looking for jobs i have decided to engage
            in another college degree and pursue a career in software
            engineering. I'm very happy to say that i only have some more few
            months to graduate and i chose to specialize in web developement. I
            can't really wait for new challenges , the harder they are , the
            more fun for me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
