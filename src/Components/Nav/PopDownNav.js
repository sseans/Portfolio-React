import React, { useState, useEffect } from "react";
import "./PopDownNav.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function PopDownNav() {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-icons">
          <div className="nav-icon">
            SEAN<span>/</span>S.
          </div>
          <div className="nav-icons-div">
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>

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
      </div>
    </div>
  );
}
