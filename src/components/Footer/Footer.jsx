import React from "react";
import "./Footer.scss";
import Logo from "../../assets/logoF.png";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        <div className="infos">
          <div className="logo">
            <img src={Logo} alt="mhmLogo" />
          </div>
          <div className="footer-para">
            <p>
              This Site is made and designed by me, hope you like it and if you
              have any questions just contact me anytime.
            </p>
          </div>
        </div>
        <div className="navs">
          <div className="contact">
            <p>CONTACT</p>
            <ul>
              <li className="contact-item">
                <BsTelephone className="footer-icons" />
                <a href="tel:+21627959823" className="paraFoot">
                  (+216) 27 959 823
                </a>
              </li>
              <li className="contact-item">
                <AiOutlineMail className="footer-icons" />
                <a
                  className="paraFoot"
                  href="mailto:mohameddhia.zoghlami@esprit.tn"
                >
                  mohameddhia.zoghlami@esprit.tn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navs">
          <div className="contact">
            <p>SOCIALS</p>
            <ul>
              <li className="contact-item">
                <BsLinkedin className="footer-icons" />
                <a
                  className="paraFoot"
                  href="https://www.linkedin.com/in/med-dhia-zoghlami/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="contact-item">
                <BsGithub className="footer-icons" />
                <a
                  className="paraFoot"
                  href="https://github.com/MohamedDhiaZoghlami"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="contact-item">
                <BsFacebook className="footer-icons" />
                <a
                  href="https://www.facebook.com/dzoghlami23"
                  className="paraFoot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="contact-item">
                <BsInstagram className="footer-icons" />
                <a
                  className="paraFoot"
                  href="https://www.instagram.com/dzovic10/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ fontSize: "14px" }}>
        &copy; 2023 Designed & Coded By Med Dhia.
      </div>
    </footer>
  );
};

export default Footer;
