import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-title">Contact Me!</div>
        <div className="footer-desc">
          Shoot me an email if you want to get in touch, lets build something.
        </div>
        <div className="email">s.seanseale@gmail.com</div>
        <button className="footer-button">Next?</button>
      </div>
    </div>
  );
}
