import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience-wrapper">
        <div className="experience-title">
          <div className="title-bar-experience"></div>
          Experience
        </div>
        <div className="job-container">
          <div className="job-logo"></div>
          <div className="job-info">
            <div className="info-title"></div>
            <div className="info-desc"></div>
            <div className="info-tech"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
