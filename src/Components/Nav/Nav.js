import React from "react";
import "./Nav.css";
import { MdWork } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const menuItems = [
  {
    icon: <HiCode />,
    title: "Skills",
    link: "/skills",
    className: "nav-button",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Projects",
    link: "/projects",
    className: "nav-button",
  },
  {
    icon: <MdWork />,
    title: "Experience",
    link: "/experience",
    className: "nav-button",
  },
  {
    icon: <HiDocumentText />,
    title: "Resume",
    link: "/resume",
    className: "nav-resume-button",
  },
];

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-icon">
          SEAN<span>/</span>S.
        </div>
        <ul className="nav-menu">
          {menuItems.map((x) => {
            return (
              <li>
                <button className={x.className}>{x.title}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
