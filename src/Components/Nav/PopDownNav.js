import { useState, useEffect } from "react";
import "./PopDownNav.css";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useScrollDirection from "../../Hooks/useScrollDirection";

export default function PopDownNav({ openMenu, statusOpenMenu }) {
  const scrollD = useScrollDirection();
  useEffect(() => {
    console.log(`scrollD`, scrollD);
  }, [scrollD]);

  return (
    <motion.div className="drop-nav">
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
