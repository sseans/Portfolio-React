import { useState, useEffect } from "react";
import "./PopDownNav.css";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useScrollDirection from "../../Hooks/useScrollDirection";

const animationVariants = {
  active: { y: 0, opacity: 90 },
  inactive: { y: -70, opacity: 0 },
  instantInactive: { opacity: 0, transition: { duration: 0.1 } },
};

export default function PopDownNav({
  openMenu,
  statusOpenMenu,
  dropDownState,
  setDropDownState,
}) {
  const scrollD = useScrollDirection();
  useEffect(() => {
    console.log(`scrollD`, scrollD);
    if (scrollD === null) {
      setDropDownState(null);
    } else if (scrollD === "up") {
      setDropDownState(true);
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
      : null
  );

  useEffect(() => {}, [dropDownState]);

  return (
    <motion.div
      variants={animationVariants}
      initial="inactive"
      animate={controls}
      className="drop-nav"
    >
      <div className="drop-nav-wrapper">
        <div className="drop-nav-icons">
          <div className="drop-nav-icon">
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
