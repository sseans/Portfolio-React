import React, { useEffect } from "react";
import "./Experience.css";
import secondsLogo from "../../Assets/8_logo.png";
import cactusLogo from "../../Assets/CactusCan2020_White.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Experience(props) {
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
      transition: { delay: 0.6 },
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
      transition: { delay: 1 },
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
      transition: { delay: 1.4 },
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
      transition: { delay: 1.6 },
    },
    hidden: {
      y: 100,
      opacity: 0,
    },
  };

  return (
    <div className="experience" ref={props.refProp}>
      <motion.div
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variants}
        className="experience-wrapper"
      >
        <motion.div variants={itemA} className="experience-title">
          <div className="title-bar-experience"></div>
          Experience
        </motion.div>
        <motion.h2 variants={itemB}>Where I'm Working...</motion.h2>
        <motion.div variants={itemC} className="job-container">
          <div className="job-logo">
            <img src={secondsLogo} alt="8Secondz" className="logo" />
          </div>
          <div className="job-info">
            <div className="info-title">
              Junior Software Engineer - 8Secondz
            </div>
            <div className="info-desc">
              My responsibilites include web development in a mainly frontend
              aspect but with flexibility to work on whatever is needed at the
              time
            </div>
            <div className="info-tech">
              Vue JS - React JS - Javascript - Firebase - AWS
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemD} className="job-line">
          <div className="line">
            <div className="line-actual"></div>
          </div>
        </motion.div>
        <motion.div variants={itemE} className="job-container">
          <div className="job-logo cactus">
            <img src={cactusLogo} alt="8Secondz" className="logo cactuslogo" />
          </div>
          <div className="job-info">
            <div className="info-title">
              Digital Producer / Web Developer - CactusCan
            </div>
            <div className="info-desc">
              Coming onboard initially producing digital content, videos,
              editing, filming, minor graphic design. Over time my role changed
              and I shifted to web development.
            </div>
            <div className="info-tech">
              Adobe Creative Suite - WordPress - Javascript
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
