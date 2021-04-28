import React from "react";
import "./Nav.css";
import { MdWork } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-icon">Sean</div>
        <ul className="nav-menu">
          <li>
            <button className="nav-button">
              <HiCode />
              Skills
            </button>
          </li>
          <li>
            <button className="nav-button">
              <FaProjectDiagram />
              Projects
            </button>
          </li>
          <li>
            <button className="nav-button">
              <MdWork />
              Experience
            </button>
          </li>
          <li>
            <button className="nav-resume-button">
              <HiDocumentText />
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
