import React, { useEffect, useState } from "react";
import "./About.css";
import Logo from "../../Assets/2020-10-25 01.28.21 1 (600px-Desktop).png";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaVuejs, FaGithub } from "react-icons/fa";

export default function About(props) {
  const [mobileActive, setMobileActive] = useState();

  // Animation functions for scroll reveal
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.15 });

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
      transition: { delay: 0.2 },
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
      transition: { delay: 0.5 },
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
      transition: { delay: 0.75 },
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
      transition: { delay: 1 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };
  const itemE = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 1.15 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };

  // Determines size of screen and which menu to show (Uses Custom Hook)
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 900) {
      setMobileActive(true);
    } else {
      setMobileActive(false);
    }
  }, [width]);

  return (
    <div className="about" ref={props.refProp}>
      <div className="about-wrapper">
        <motion.div
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={variants}
          className="about-info"
        >
          <motion.h1 variants={itemA} className="about-title">
            <div className="title-bar"></div>
            Skills
          </motion.h1>
          <motion.h2 variants={itemB}>
            A diverse set of skills & growing.
          </motion.h2>
          <motion.p variants={itemC}>
            Bringing past experience from various creative fields, including
            filmmaking, photography, design and more. Always striving for better
            and more efficently crafted software. Through my years in
            university, instructing and other similar roles, I have acquired
            strong communication skills and developed an affection for teaching
            and guiding the learning proccess.
          </motion.p>
          <br></br>
          <motion.p variants={itemD}>
            I have worked in web Agencies and startups, developing a love for
            frontend development and a grasp of many of the technologies within.
          </motion.p>
          <motion.div variants={itemE} className="about-info-icons">
            <h3>I'm usually working with...</h3>
            <IoLogoJavascript />
            <FaReact />
            <FaVuejs />
          </motion.div>
          {mobileActive ? (
            <div className="about-button">
              <a
                href="https://github.com/sseans"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Github
                <FaGithub />
              </a>
            </div>
          ) : null}
        </motion.div>
        <motion.div variants={itemB} className="about-picture">
          {mobileActive ? null : (
            <div className="about-picture-container">
              <img className="about-picture-src" src={Logo} alt="Me" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
