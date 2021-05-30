import React from "react";
import "./Footer.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer">
      <div className="arrow-container">
        <IoIosArrowDown />
      </div>
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
    </div>
  );
}
