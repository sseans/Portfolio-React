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
import useScrollDirection from "../../Hooks/useScrollDirection";
import Pdf from "../../Assets/Resume 2021 - May.pdf";

const menuItems = [
  {
    icon: <HiCode />,
    title: "Skills.",
    referenceName: "about",
    scroll: "675",
    className: "nav-button",
    mobClassName: "nav-mobile-button",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Projects.",
    referenceName: "projects",
    scroll: "1350",
    className: "nav-button",
    mobClassName: "nav-mobile-button",
  },
  {
    icon: <MdWork />,
    title: "Experience.",
    referenceName: "experience",
    scroll: "2800",
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
  active: { y: 60, opacity: 1 },
  inactive: { y: -90, opacity: 1 },
  topPosition: { opacity: 1 },
  stay: { y: 0, opacity: 1 },
};

export default function Nav({ executeScroll }) {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropDownState, setDropDownState] = useState(true);

  // Determines size of screen and which menu to show (Uses Custom Hook)
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 900) {
      setMobileMenuActive(true);
    } else {
      setMobileMenuActive(false);
      setMobileMenuOpen(false);
    }
  }, [width]);

  // Mobile sidebar => selecting which animation variant
  const controls = useAnimation();
  controls.start(mobileMenuOpen === true ? "active" : "inactive");

  // Locks scroll when menu is open
  useLockScroll(mobileMenuOpen);

  // Determines scroll direction => If scrollD changes? sets (NavbarDropDown) state
  const scrollD = useScrollDirection();
  useEffect(() => {
    if (scrollD === null) {
      setDropDownState(null);
    } else if (mobileMenuOpen === true) {
      setDropDownState(true);
    } else if (scrollD === "up") {
      setDropDownState(true);
    } else if (scrollD === "down" && dropDownState === "stay") {
      setDropDownState(null);
    } else if (scrollD === "down") {
      setDropDownState(false);
    }
  }, [scrollD]); // eslint-disable-line react-hooks/exhaustive-deps

  // Applies corresponding animation (NavbarDropDown) based off useEffect
  const navControls = useAnimation();
  navControls.start(
    dropDownState === true
      ? "active"
      : dropDownState === false
      ? "inactive"
      : dropDownState === null
      ? "topPosition"
      : dropDownState === "stay"
      ? "stay"
      : null
  );

  return (
    <>
      {mobileMenuOpen === true ? (
        <div
          className="nav-mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        ></div>
      ) : null}
      <motion.div
        variants={navAnimationVariants}
        initial="inactive"
        animate={navControls}
        className={dropDownState === null ? "nav" : "nav glass"}
      >
        <div className="nav-wrapper">
          <div className="nav-left">
            <div
              onClick={() => {
                if (mobileMenuOpen === true) {
                  setMobileMenuOpen(!mobileMenuOpen);
                }
                window.scrollTo(0, 0);
              }}
              className="nav-icon"
            >
              SEAN<span>/</span>S.
            </div>
            <div className="nav-icons-div">
              <a
                style={{ display: "table-cell" }}
                href="https://github.com/sseans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                style={{ display: "table-cell" }}
                href="https://www.linkedin.com/in/sean-seale-ab07691a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/* // Mobile Menu */}
          {mobileMenuActive === true ? (
            <>
              {/* Hamburger Icon */}
              <div
                className={
                  mobileMenuOpen === true
                    ? "nav-mobile-menu-hamburger active"
                    : "nav-mobile-menu-hamburger"
                }
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div
                  className={dropDownState === null ? "span" : "span dropdown"}
                ></div>
                <div
                  className={dropDownState === null ? "span" : "span dropdown"}
                ></div>
                <div
                  className={dropDownState === null ? "span" : "span dropdown"}
                ></div>
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
                    <a
                      className="nav-button-inner"
                      href="mailto:s.seanseale@gmail.com"
                    >
                      <IoMdMail />
                      Contact Me
                    </a>
                  </div>
                  {menuItems.map((x) => {
                    return (
                      <li key={x.title}>
                        {x.title !== "Resume" ? (
                          <button
                            onClick={() => {
                              executeScroll(x.referenceName);
                              setTimeout(() => {
                                setMobileMenuOpen(!mobileMenuOpen);
                              }, 200);
                              setDropDownState(true);
                            }}
                            className={x.mobClassName}
                          >
                            {x.mobClassName === "nav-mobile-resume-button"
                              ? x.icon
                              : null}
                            {x.title}
                          </button>
                        ) : (
                          <a
                            href={Pdf}
                            target="_blank"
                            rel="noreferrer"
                            className={x.mobClassName}
                          >
                            {x.title}
                          </a>
                        )}
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
                    {x.title !== "Resume" ? (
                      <button
                        onClick={() => {
                          executeScroll(x.referenceName);
                          setTimeout(() => {
                            setDropDownState(true);
                          }, 100);
                        }}
                        className={
                          dropDownState === null
                            ? x.className
                            : x.className + " glass"
                        }
                      >
                        {x.title}
                      </button>
                    ) : (
                      <a
                        href={Pdf}
                        target="_blank"
                        rel="noreferrer"
                        className={x.className}
                      >
                        {x.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </motion.div>
    </>
  );
}
