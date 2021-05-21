import React, { useEffect, useState } from "react";
import "./About.css";
import Logo from "../../Assets/2020-10-25 01.28.21 1 (600px-Desktop).png";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaVuejs, FaGithub } from "react-icons/fa";

export default function About() {
  const [mobileActive, setMobileActive] = useState();

  // Determines size of screen and which menu to show (Uses Custom Hook)
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 900) {
      setMobileActive(true);
    } else {
      setMobileActive(false);
    }
  }, [width]);

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-info">
          <h1 className="about-title">
            <div className="title-bar"></div>
            Skills
          </h1>
          <h2>A diverse set of skills & growing.</h2>
          <p>
            Bringing past experience from various creative fields, including
            filmmaking, photography, design and more. Always striving for better
            and more efficently crafted software. Through my years in
            university, instructing and other similar roles, I have acquired
            strong communication skills and developed an affection for teaching
            and guiding the learning proccess.
          </p>
          <br></br>
          <p>
            I have worked in web Agencies and startups, developing a love for
            frontend development and a grasp of many of the technologies within.
          </p>
          <div className="about-info-icons">
            <h3>I'm usually working with...</h3>
            <IoLogoJavascript />
            <FaReact />
            <FaVuejs />
          </div>
          {mobileActive ? (
            <div className="about-button">
              <a
                href="https://github.com/sseans"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Github
                <FaGithub />
              </a>
            </div>
          ) : null}
        </div>
        <div className="about-picture">
          {mobileActive ? null : (
            <div className="about-picture-container">
              <img className="about-picture-src" src={Logo} alt="Me" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
