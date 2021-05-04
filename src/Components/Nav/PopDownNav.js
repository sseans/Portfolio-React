import { useState, useEffect } from "react";
import "./PopDownNav.css";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useScrollDirection from "../../Hooks/useScrollDirection";

const animationVariants = {
  active: { y: 0, opacity: 90 },
  inactive: { y: -70, opacity: 0 },
  instantInactive: { opacity: 0, transition: { duration: 0.3 } },
  stay: { y: 0, opacity: 90 },
};

export default function PopDownNav({
  openMenu,
  statusOpenMenu,
  dropDownState,
  setDropDownState,
  scrollToTop,
}) {
  const scrollD = useScrollDirection();
  useEffect(() => {
    if (scrollD === null) {
      setDropDownState(null);
    } else if (statusOpenMenu === true) {
      setDropDownState(true);
    } else if (scrollD === "up") {
      setDropDownState(true);
    } else if (scrollD === "down" && dropDownState === "stay") {
      setDropDownState(null);
    } else if (scrollD === "down") {
      setDropDownState(false);
    }
  }, [scrollD]);

  const controls = useAnimation();
  controls.start(
    dropDownState === true
      ? "active"
      : dropDownState === false
      ? "inactive"
      : dropDownState === null
      ? "instantInactive"
      : dropDownState === "stay"
      ? "stay"
      : null
  );

  return (
    <motion.div
      variants={animationVariants}
      initial="inactive"
      animate={controls}
      className="drop-nav"
    >
      <div className="drop-nav-wrapper">
        <div className="drop-nav-icons">
          <div
            onClick={() => {
              scrollToTop();
              if (statusOpenMenu === true) {
                openMenu(!statusOpenMenu);
              }
            }}
            className="drop-nav-icon"
          >
            SEAN<span>/</span>S.
          </div>
          <div className="drop-nav-icons-div">
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>

        <div
          className={
            statusOpenMenu === true
              ? "drop-nav-mobile-menu-hamburger active"
              : "drop-nav-mobile-menu-hamburger"
          }
          onClick={() => openMenu(!statusOpenMenu)}
        >
          <div className="drop-span"></div>
          <div className="drop-span"></div>
          <div className="drop-span"></div>
        </div>
      </div>
    </motion.div>
  );
}