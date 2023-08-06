import React from "react";
import "./Hero.scss";
import Profile from "../../assets/dzovi.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/mdz_cv_en.pdf";
    downloadLink.download = "mdz_cv_en.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
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
      <motion.div
        className="hero--infos"
        animate={{ y: [-1500, 0] }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h1>👋 Hi I'm Mohamed Dhia Zoghlami,</h1>
        <h2>
          Full Stack Web
          <span data-text="&nbsp;Developer.&nbsp;">&nbsp;Developer.&nbsp;</span>
        </h2>
        <div className="boxInfos">
          <motion.div
            className="jsAbsBox"
            id="anchor"
            animate={{ x: [-1500, 0] }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
          >
            <div className="eyes">
              <div className="oneEye">.</div>
              <div className="oneEye">.</div>
            </div>
          </motion.div>
          <p>
            I am a passionate and versatile Full Stack Web Developer with a
            flair for crafting captivating digital experiences. From front-end
            wizardry with React to building robust backends, I thrive on
            creating dynamic, user-friendly web applications. With a dedication
            to clean code, I aim to deliver seamless and impactful solutions. My
            journey as a developer is fueled by curiosity and a constant drive
            to learn and grow. Let's collaborate and bring your next project to
            life with innovation and expertise!
          </p>
        </div>
        <div onClick={handleDownload} className="btnCv">
          Download My CV 📁
        </div>
      </motion.div>
      <motion.div
        className="hero--image"
        animate={{ x: [1500, 0] }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
      >
        <img src={Profile} alt="profile" className="profileImg" />
      </motion.div>
    </section>
  );
};

export default Hero;
