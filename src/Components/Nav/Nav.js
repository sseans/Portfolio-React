import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import "./Nav.css";
import { MdWork } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

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

export default function Nav() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    width <= 900 ? setMobileMenuActive(true) : setMobileMenuActive(false);
  }, [width]);

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-icon">
          SEAN<span>/</span>S.
        </div>
        {mobileMenuActive === true ? (
          <>
            <div
              className="nav-mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="span"></div>
              <div className="span"></div>
              <div className="span"></div>
            </div>
            <div className="nav-mobile-menu-container">
              <ul
                className={
                  mobileMenuOpen ? "nav-mobile-menu active" : "nav-mobile-menu"
                }
              >
                {menuItems.map((x) => {
                  return (
                    <li key={x.title}>
                      <button className={x.mobClassName}>{x.title}</button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        ) : (
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
