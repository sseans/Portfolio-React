import React, { useState, useEffect } from "react";
import "./PopDownNav.css";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function PopDownNav({ openMenu, statusOpenMenu, appRef }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  console.log(`appRef`, appRef);

  function handleScroll() {
    const currentScrollPos = appRef[0].pageYOffset;
    console.log(currentScrollPos);
    console.log(`appRef`, appRef);
  }

  useEffect(() => {
    console.log(`appRef`, appRef);
    // appRef.scrollTo(0, 0);
  }, [statusOpenMenu]);

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
