import React from "react";
import "./Footer.scss";
// import { Link } from "react-router-dom";
import Logo from "../../assets/logoF.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import {
  BsTelephone,
  BsYoutube,
  BsFacebook,
  BsInstagram,
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
          <div className="socialLinks">
            <a
              href="https://www.facebook.com/MHM-Motors-103060721805298"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
            >
              <BsFacebook className="socialIcons" />
            </a>
            <a
              href="https://www.instagram.com/mhm.motors/"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
            >
              <BsInstagram className="socialIcons" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNA7S_TBfd_sv76PMIb16LA"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
            >
              <BsYoutube className="socialIcons" />
            </a>
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
      </div>
      <div className="footer-bottom" style={{ fontSize: "14px" }}>
        &copy; 2023 Designed By Med Dhia.
      </div>
    </footer>
  );
};

export default Footer;
