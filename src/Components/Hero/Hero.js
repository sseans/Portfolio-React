import { useEffect, useState } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Hero.css";
import { motion, useAnimation } from "framer-motion";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import {
  FaReact,
  FaSass,
  FaHtml5,
  FaNodeJs,
  FaVuejs,
  FaJava,
  FaPlus,
} from "react-icons/fa";

const skillsGrid = [
  { skill: "html", icon: <FaHtml5 /> },
  { skill: "css", icon: <IoLogoCss3 /> },
  { skill: "react", icon: <FaReact /> },
  { skill: "javascript", icon: <IoLogoJavascript /> },
  { skill: "scss", icon: <FaSass /> },
  { skill: "nodejs", icon: <FaNodeJs /> },
  { skill: "vue", icon: <FaVuejs /> },
  { skill: "java", icon: <FaJava /> },
];

const animationVariants = {
  after: {
    x: 2000,
    opacity: 0,
    transition: { type: "spring", duration: 0.25 },
  },
  before: { x: 0, opacity: 100 },
};

export default function Hero() {
  const [mobileHero, setMobileHero] = useState(false);
  const [profilePic, setProfilePic] = useState(false);

  const { width } = useWindowDimensions();
  useEffect(() => {
    width <= 900 ? setMobileHero(true) : setMobileHero(false);
  }, [width]);

  const controls = useAnimation();
  controls.start(profilePic === true ? "after" : "before");

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
            className="hero-intro"
          >
            Hey there, my name is
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="hero-name"
          >
            Sean Seale.
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
            className="hero-phrase"
          >
            I'm a Sydney based Frontend Developer.
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
            className="hero-desc"
          >
            I build unique UI implementaions, have a passion for software
            engineering and a strong drive to continue learning. Looking for a
            workplace that I can grow into, building upon my skills every day.
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
            className="hero-button"
          >
            <button>Contact Me</button>
          </motion.div>
        </div>
        {mobileHero === true ? null : (
          <motion.div
            initial="inactive"
            animate={controls}
            variants={animationVariants}
            className="hero-right"
          >
            <motion.div
              initial={{
                skew: 20,
                height: 0,
              }}
              animate={{
                skew: 20,
                height: 600,
                transition: {
                  type: "tween",
                  delay: 0.7,
                },
              }}
              className="hero-shape"
            >
              <FaReact />
            </motion.div>
            <motion.div
              initial={{
                skew: 20,
                height: 0,
              }}
              animate={{
                skew: 20,
                height: 600,
                transition: { type: "tween", delay: 0.9 },
              }}
              className="hero-shape"
            >
              <IoLogoJavascript />
            </motion.div>
            <motion.div
              initial={{
                skew: 20,
                height: 0,
              }}
              animate={{
                skew: 20,
                height: 600,
                transition: { type: "tween", delay: 1.1 },
              }}
              className="hero-shape"
            >
              <FaSass />
            </motion.div>
            <motion.div
              initial={{
                skew: 20,
                height: 0,
              }}
              animate={{
                skew: 20,
                height: 600,
                transition: { type: "tween", delay: 1.25 },
              }}
              className="hero-shape"
            >
              <FaVuejs />
            </motion.div>
            <motion.div
              initial={{
                skew: 20,
                height: 0,
              }}
              animate={{
                skew: 20,
                height: 600,
                transition: { type: "tween", delay: 1.375 },
              }}
              className="hero-shape"
            >
              <FaNodeJs />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.475 } }}
              className="hero-plus"
            >
              <button onClick={() => setProfilePic(true)}>
                <FaPlus />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
