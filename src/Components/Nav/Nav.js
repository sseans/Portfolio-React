import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-icon">Sean</div>
        <ul className="nav-menu">
          <li>
            <button className="nav-button">Skills</button>
          </li>
          <li>
            <button className="nav-button">Projects</button>
          </li>
          <li>
            <button className="nav-button">Experience</button>
          </li>
          <li>
            <button className="nav-resume-button">Resume</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
