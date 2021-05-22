import React from "react";
import "./Projects.css";
import movieFXStill from "../../Assets/MovieWebAppStill.jpg";
import Project from "./IndividualProjects/Project";

const projects = [
  {
    title: "MovieFx - Vanilla JS",
    desc: "blah blah",
    movieImageSrc: movieFXStill,
  },
  {
    title: "Weather App - Vanilla JS",
    desc: "blah blah",
    movieImageSrc: movieFXStill,
  },
  {
    title: "Eat My Shorts - React JS",
    desc: "blah blah",
    movieImageSrc: movieFXStill,
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="projects-title">
          <div className="title-bar-projects"></div>
          Projects
        </div>
        <h2>What I've been doing.</h2>
        {projects.map((project) => (
          <Project key={project.title} projectData={project} />
        ))}
      </div>
    </div>
  );
}
