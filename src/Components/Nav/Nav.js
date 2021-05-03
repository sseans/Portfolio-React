import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Nav.css";
import { MdWork } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import useLockScroll from "../../Hooks/useLockScroll";
import PopDownNav from "./PopDownNav";

const menuItems = [
  {
    icon: <HiCode />,
    title: "Skills.",
    link: "/skills",
    className: "nav-button",
    mobClassName: "nav-mobile-button",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Projects.",
    link: "/projects",
    className: "nav-button",
    mobClassName: "nav-mobile-button",
  },
  {
    icon: <MdWork />,
    title: "Experience.",
    link: "/experience",
    className: "nav-button",
    mobClassName: "nav-mobile-button",
  },
  {
    icon: <HiDocumentText />,
    title: "Resume",
    link: "/resume",
    className: "nav-resume-button",
    mobClassName: "nav-mobile-resume-button",
  },
];

const animationVariants = {
  inactive: { x: 320, opacity: 0 },
  active: { x: 35, opacity: 100 },
};

const navAnimationVariants = {
  inactive: { opacity: 0 },
  active: { opacity: 100 },
};

export default function Nav({ appRef }) {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropDownState, setDropDownState] = useState(false);

  // Determines size of screen and which menu to show (Uses Custom Hook)
  const { width } = useWindowDimensions();
  useEffect(() => {
    width <= 900 ? setMobileMenuActive(true) : setMobileMenuActive(false);
    if (width >= 900) {
      setDropDownState(false);
    }
  }, [width]);

  // Mobile Navbar Animation to select the variant
  const controls = useAnimation();
  controls.start(mobileMenuOpen === true ? "active" : "inactive");

  const mainNavControls = useAnimation();
  mainNavControls.start(dropDownState === true ? "inactive" : "active");

  // Locks scroll when menu is open
  const scrollLockFunction = useLockScroll(mobileMenuOpen);
  useEffect(() => {
    scrollLockFunction();
  }, [mobileMenuOpen]);

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <motion.div
          animate={mainNavControls}
          initial="active"
          variants={navAnimationVariants}
          className="nav-icons"
        >
          <div className="nav-icon">
            SEAN<span>/</span>S.
          </div>
          <div className="nav-icons-div">
            <FaGithub />
            <FaLinkedin />
          </div>
        </motion.div>
        {mobileMenuActive === true ? (
          // Mobile Menu
          <>
            <PopDownNav
              openMenu={setMobileMenuOpen}
              statusOpenMenu={mobileMenuOpen}
              dropDownState={dropDownState}
              setDropDownState={setDropDownState}
            />
            {mobileMenuOpen === true ? (
              <div
                className="nav-mobile-menu-backdrop"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              ></div>
            ) : null}

            {/* Hamburger Icon */}
            <div
              className={
                mobileMenuOpen === true
                  ? "nav-mobile-menu-hamburger active"
                  : "nav-mobile-menu-hamburger"
              }
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="span"></div>
              <div className="span"></div>
              <div className="span"></div>
            </div>
            {/* Slide Out Mobile Menu */}
            <motion.div
              variants={animationVariants}
              animate={controls}
              initial={{ opacity: 0 }}
              className="nav-mobile-menu-container"
            >
              <ul className="nav-mobile-menu">
                <div className="nav-mobile-menu-contact">
                  <IoMdMail />
                  Contact me!
                </div>
                {menuItems.map((x) => {
                  return (
                    <li key={x.title}>
                      <button className={x.mobClassName}>
                        {x.mobClassName === "nav-mobile-resume-button"
                          ? x.icon
                          : null}
                        {x.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        ) : (
          // Desktop Menu
          <ul className="nav-menu">
            {menuItems.map((x) => {
              return (
                <li key={x.title}>
                  <button className={x.className}>
                    {x.className === "nav-resume-button" ? x.icon : null}
                    {x.title}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
