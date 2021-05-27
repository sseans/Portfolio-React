import React from "react";
import "./Experience.css";
import secondsLogo from "../../Assets/8_logo.png";
import cactusLogo from "../../Assets/CactusCan2020_White.png";

export default function Experience(props) {
  return (
    <div className="experience" ref={props.refProp}>
      <div className="experience-wrapper">
        <div className="experience-title">
          <div className="title-bar-experience"></div>
          Experience
        </div>
        <h2>Where I'm Working...</h2>
        <div className="job-container">
          <div className="job-logo">
            <img src={secondsLogo} alt="8Secondz" className="logo" />
          </div>
          <div className="job-info">
            <div className="info-title">
              Junior Software Engineer - 8Secondz
            </div>
            <div className="info-desc">
              My responsibilites include web development in a mainly frontend
              aspect but with flexibility to work on whatever is needed at the
              time
            </div>
            <div className="info-tech">
              Vue JS - React JS - Javascript - Firebase - AWS
            </div>
          </div>
        </div>
        <div className="job-line">
          <div className="line">
            <div className="line-actual"></div>
          </div>
        </div>
        <div className="job-container">
          <div className="job-logo cactus">
            <img src={cactusLogo} alt="8Secondz" className="logo cactuslogo" />
          </div>
          <div className="job-info">
            <div className="info-title">
              Digital Producer / Web Developer - CactusCan
            </div>
            <div className="info-desc">
              Coming onboard initially producing digital content, videos,
              editing, filming, minor graphic design. Over time my role changed
              and I shifted to web development.
            </div>
            <div className="info-tech">
              Adobe Creative Suite - WordPress - Javascript
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
