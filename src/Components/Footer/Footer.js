import React from "react";
import "./Footer.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-title">Contact Me!</div>
        <div className="footer-desc">
          Shoot me an email if you want to get in touch, lets build something.
        </div>
        <div className="email">s.seanseale@gmail.com</div>
        <a className="footer-button" href="mailto:s.seanseale@gmail.com">
          Contact
        </a>
      </div>
      <div className="footer-madeby">
        <h2>Made from ground zero by Sean Seale</h2>
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
    </div>
  );
}
