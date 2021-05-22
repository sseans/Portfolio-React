import React from "react";
import "./Project.css";

export default function Project({ projectData }) {
  console.log("project :>> ", projectData);
  return (
    <div className="project-image-container">
      <img
        className="projects-image"
        src={projectData.movieFXStill}
        alt={projectData.title}
      />
    </div>
  );
}
