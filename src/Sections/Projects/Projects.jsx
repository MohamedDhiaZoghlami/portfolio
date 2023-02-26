import React from "react";
import "./Projects.scss";
import TMDB from "../../assets/tmdb.PNG";
import NUMERYS from "../../assets/numerys.PNG";
import { BsGithub, BsFillEyeFill } from "react-icons/bs";

const projectss = [
  {
    id: 1,
    title: "TnMovies",
    techs: "ReactJs, TMDB API, Styled Components",
    image: TMDB,
    demoLink: "http://dzovi-tmdb.netlify.app",
    githubLink: "https://github.com/MohamedDhiaZoghlami/movie-app",
  },
  {
    id: 2,
    title: "Numerys",
    techs: "ReactJs, Framer Motion, Sass",
    image: NUMERYS,
    demoLink: "https://www.numerys.io",
    githubLink: "",
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h1>#Projects</h1>
      <div className="projects-container">
        {projectss.map((e) => (
          <div className="projectCard" key={e.id}>
            <div className="imgWrapper">
              <img src={e.image} alt="project" />
            </div>
            <h3 className="project-name">{e.title}</h3>
            <p className="project-tech">{e.techs}</p>
            <div className="view_icons">
              {e.githubLink ? (
                <a
                  className="view"
                  href={e.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="view_icon" />
                </a>
              ) : null}
              {e.demoLink ? (
                <a
                  className="view"
                  href={e.demoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill className="view_icon" />
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
