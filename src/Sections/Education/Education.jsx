import React from "react";
import "./Education.scss";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import { VscJson } from "react-icons/vsc";
import { SiAzuredevops } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Education = () => {
  return (
    <section className="abouts" id="services">
      <div className="about-left">
        <BsFillQuestionSquareFill className="about-icon" />
        <h1>What Do I Provide??</h1>
        <p>
          Rather then my Technical skills, I possess a wide range of valuable
          soft skills that have contributed to my success in various
          professional and personal settings. I have exceptional communication
          skills that enable me to express ideas and information effectively and
          build strong relationships both my colleagues, and seniors. My ability
          to learn quickly allows me to adapt to new environments and
          technologies, while my logical thinking and problem-solving skills
          enable me to analyze complex issues and develop effective solutions. I
          am also highly versatile, able to work both independently and as part
          of a team.
        </p>
      </div>
      <div className="about-right">
        <div className="about-boxes">
          <div className="about-box about-box-margin">
            <div className="about-icons">
              <GoBrowser className="about-box-icon" />
            </div>
            <h3>Frontend</h3>
            <p>
              Able to start from a design to code an entire client side
              application
            </p>
          </div>
          <div className="about-box">
            <div className="about-icons">
              <VscJson className="about-box-icon" />
            </div>
            <h3>Backend</h3>
            <p>
              Coding secure and efficient APIs with every functionalities needed
            </p>
          </div>
        </div>
        <div className="about-boxes">
          <div className="about-box about-box-margin">
            <div className="about-icons">
              <FaDatabase className="about-box-icon" />
            </div>
            <h3>Database</h3>
            <p>
              I can help with some database modelling and i have some experience
              using both SQL and NoSQL databases
            </p>
          </div>
          <div className="about-box">
            <div className="about-icons">
              <SiAzuredevops className="about-box-icon" />
            </div>
            <h3>DevOps</h3>
            <p>I can perform some basic devops operations if needed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
