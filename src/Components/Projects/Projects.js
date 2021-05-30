import React, { useEffect } from "react";
import "./Projects.css";
import movieFXStill from "../../Assets/MovieWebAppStill.JPG";
import portfolioStill from "../../Assets/portfolio.JPG";
import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Projects(props) {
  // Animation functions for scroll reveal
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,

      opacity: 1,
      transition: { delayChilden: 10, staggerChildren: 5 },
    },
    hidden: {
      y: entry,
      opacity: 0,
    },
  };

  const itemA = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  const itemB = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.8 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  const itemC = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.9 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  const itemD = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 2.8 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };

  return (
    <div className="projects" ref={props.refProp}>
      <motion.div
        animate={animation}
        initial="hidden"
        variants={variants}
        ref={ref}
        className="projects-wrapper"
      >
        <motion.div variants={itemA} className="projects-title">
          <div className="title-bar-projects"></div>
          Projects
        </motion.div>
        <h2>What I've been doing...</h2>
        <motion.div variants={itemB} className="project-container">
          <img className="project-image" src={movieFXStill} alt="MovieFX" />
          <div className="project-info">
            <div className="project-title">MovieFX</div>
            <div className="project-subtitle">Pure Vanilla Javascript.</div>
            <div className="project-desc">
              A Project to collate Movies and TV Shows from all different
              streaming platforms using the IMDb API to pull ratings,
              suggestions, descriptions, poster art and more...
              <br />
              <br />
              The purpose of this project was to extend my skills in vanilla
              javascript without relying on the tools of a framework, as helpful
              as they may be.
            </div>
            <div className="project-tech">Vanilla JS - Sass - Fetch</div>
            <div className="project-links">
              <a
                style={{ display: "table-cell" }}
                href="https://github.com/sseans"
                target="_blank"
                className="project-links-a"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                style={{ display: "table-cell" }}
                href="https://github.com/sseans"
                target="_blank"
                className="project-links-a"
                rel="noopener noreferrer"
              >
                <IoMdOpen />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemC} className="project-container">
          <img className="project-image" src={portfolioStill} alt="MovieFX" />
          <div className="project-info">
            <div className="project-title">This Portfolio!</div>
            <div className="project-subtitle">React JS</div>
            <div className="project-desc">
              A premade portfolio? No thanks! Built in react and fully mobile
              responsive. I've tried to really show who i am as a developer and
              give it a little bit of my design touch.
              <br />
              <br />
              Hopefully you're enjoying it right now!
            </div>
            <div className="project-tech">
              React JS - Framer Motion - React Router
            </div>
            <div className="project-links">
              <FaGithub />
              <IoMdOpen />
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemD} className="project-container">
          <img className="project-image" src={movieFXStill} alt="MovieFX" />
          <div className="project-info">
            <div className="project-title">MovieFX</div>
            <div className="project-subtitle">Pure Vanilla Javascript.</div>
            <div className="project-desc">
              A Project to collate Movies and TV Shows from all different
              streaming platforms using the IMDb API to pull ratings,
              suggestions, descriptions, poster art and more...
              <br />
              <br />
              The purpose of this project was to extend my skills in vanilla
              javascript without relying on the tools of a framework, as helpful
              as they may be.
            </div>
            <div className="project-tech">Vanilla JS - Sass - Fetch</div>
            <div className="project-links">
              <FaGithub />
              <IoMdOpen />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
