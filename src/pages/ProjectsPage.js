import { useState } from "react";
import { Link } from "react-router-dom";

import content from "../content.json";
import desk from "../backgrounds/desk.svg";
import ProjectLogoMap from "../components/ProjectLogoMap.js";
import relaxed from "../avatars/relaxed.svg";
import PageContent from "../components/PageContent.js";
import Tag from "../components/Tags.js";
import classes from "../components/PageContent.module.css";

function ProjectsPage() {
  // Extract project information
  const projects = content.projects;

  // Extract Quote
  const quotes = content.quotes[0]["work"];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // State to track which image's information is visible (null means no info is visible)
  const [visibleInfo, setVisibleInfo] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  // Function to toggle information for a specific image
  const toggleInfo = (imageIndex) => {
    // Set the clicked image's index to visible, or hide if clicked again
    setVisibleInfo((prevVisibleInfo) =>
      prevVisibleInfo === imageIndex ? null : imageIndex
    );
    setHighlighted((prevIndex) =>
      prevIndex === imageIndex ? null : imageIndex
    );
  };

  return (
    <PageContent>
      <div>
        <div className={classes.background}>
          <img src={desk} alt="desk" />
          <div className={classes.foreground}>
            <img src={relaxed} className={classes.avatar} alt="relaxed" />
            <p className={classes.quote}>"{quote}"</p>
          </div>
        </div>
        <h1>Projects</h1>
        <p>Select a project icon to learn more.</p>
      </div>
      <div>
        {Object.entries(ProjectLogoMap).map(([id, Logo]) => (
          <Logo
            key={id}
            onClick={() => toggleInfo(id)}
            className={highlighted === id ? "highlight" : ""}
            width="16%"
          />
        ))}
      </div>
      {/* Conditionally rendering information for Selected project */}
      {visibleInfo && (
        <div className={classes.content}>
          <h2>{projects[visibleInfo - 1].title}</h2>
          <p>{projects[visibleInfo - 1].description}</p>
          <Tag tagList={projects[visibleInfo - 1].tags} />
          <Link to={`/projects/${projects[visibleInfo - 1].id}`}>
            <button>
              <p>Project Page</p>
            </button>
          </Link>
        </div>
      )}
    </PageContent>
  );
}

export default ProjectsPage;
