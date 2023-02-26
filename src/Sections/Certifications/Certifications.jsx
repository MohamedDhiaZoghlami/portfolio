import React from "react";
import "./Certifications.scss";
import WEB from "../../assets/web.PNG";
import DSA from "../../assets/jsdsa.PNG";

const certs = [
  {
    id: 1,
    title: "FreeCodeCamp Responsive Web Design",
    image: WEB,
    link: "https://freecodecamp.org/certification/dzovi/responsive-web-design",
  },
  {
    id: 2,
    title: "FreeCodeCamp Javascript Algorithms and Data Structures",
    image: DSA,
    link: "https://freecodecamp.org/certification/dzovi/javascript-algorithms-and-data-structures",
  },
];

const Certifications = () => {
  return (
    <div className="certf-wrapper">
      <h1>#Certifications</h1>
      <div className="certs--boxes">
        {certs.map((e) => (
          <a
            className="cert-box"
            key={e.id}
            href={e.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={e.image} alt="cert-img" />
            <p>{e.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
