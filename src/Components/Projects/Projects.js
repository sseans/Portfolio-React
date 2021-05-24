import React from "react";
import "./Projects.css";
import movieFXStill from "../../Assets/MovieWebAppStill.JPG";
import { IoMdOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="projects-title">
          <div className="title-bar-projects"></div>
          Projects
        </div>
        <h2>What I've been doing...</h2>
        <div className="project-container">
          <img className="project-image" src={movieFXStill} alt="MovieFX" />
          <div className="project-info">
            <div className="project-title">MovieFX</div>
            <div className="project-subtitle">Pure Vanilla Javascript.</div>
            <div className="project-desc">
              A Project to collate Movies and TV Shows from all different
              streaming platforms using the IMDb API to pull ratings,
              suggestions, descriptions, poster art and more...
              <br />
              <br />
              The purpose of this project was to extend my skills in vanilla
              javascript without relying on the tools of a framework, as helpful
              as they may be.
            </div>
            <div className="project-tech">Vanilla JS - Sass - Fetch</div>
            <div className="project-links">
              <FaGithub />
              <IoMdOpen />
            </div>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={movieFXStill} alt="MovieFX" />
          <div className="project-info">
            <div className="project-title">MovieFX</div>
            <div className="project-subtitle">Pure Vanilla Javascript.</div>
            <div className="project-desc">
              A Project to collate Movies and TV Shows from all different
              streaming platforms using the IMDb API to pull ratings,
              suggestions, descriptions, poster art and more...
              <br />
              <br />
              The purpose of this project was to extend my skills in vanilla
              javascript without relying on the tools of a framework, as helpful
              as they may be.
            </div>
            <div className="project-tech">Vanilla JS - Sass - Fetch</div>
            <div className="project-links">
              <FaGithub />
              <IoMdOpen />
            </div>
          </div>
        </div>
        <div className="project-container">
          <img className="project-image" src={movieFXStill} alt="MovieFX" />
          <div className="project-info">
            <div className="project-title">MovieFX</div>
            <div className="project-subtitle">Pure Vanilla Javascript.</div>
            <div className="project-desc">
              A Project to collate Movies and TV Shows from all different
              streaming platforms using the IMDb API to pull ratings,
              suggestions, descriptions, poster art and more...
              <br />
              <br />
              The purpose of this project was to extend my skills in vanilla
              javascript without relying on the tools of a framework, as helpful
              as they may be.
            </div>
            <div className="project-tech">Vanilla JS - Sass - Fetch</div>
            <div className="project-links">
              <FaGithub />
              <IoMdOpen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
