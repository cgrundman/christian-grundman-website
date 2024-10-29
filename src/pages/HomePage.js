import { useState } from "react";
import { Link } from "react-router-dom";

import professional from "../avatars/professional.svg";
import Electrical from "../logos/electrical.jsx";
import ElectricalStatic from "../logos/electricalStatic.jsx";
import MechanicalStatic from "../logos/mechanicalStatic.jsx";
import Mechanical from "../logos/mechanical.jsx";
import ProgrammingStatic from "../logos/programmingStatic.jsx";
import Programming from "../logos/programming.jsx";
import ProjectManagementStatic from "../logos/projectManagementStatic.jsx";
import ProjectManagement from "../logos/projectManagement.jsx";
import PageContent from "../components/PageContent.js";
import classes from "../components/PageContent.module.css";
import content from "../content.json";

function HomePage() {
  // Extract logo information
  const logos = content.logos;

  // Extract Quote
  const quotes = content.quotes[0]["work"];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // State to track which logos's information is visible (null means no info is visible)
  const [visibleInfo, setVisibleInfo] = useState(null);

  // Function to toggle information for a specific logo
  const toggleInfo = (logoIndex) => {
    // Set the clicked logo's index to visible, or hide if clicked again
    setVisibleInfo((prevVisibleInfo) =>
      prevVisibleInfo === logoIndex ? null : logoIndex
    );
  };

  return (
    <PageContent>
      <div>
        <div className={classes.cityscape}>
          <img
            src={professional}
            className={classes.avatar}
            alt="professional"
          />
          <p className={classes.quote}>"{quote}"</p>
        </div>
        <div>
          {visibleInfo === 1 ? (
            <Electrical
              className={classes.logoAnimated}
              onClick={() => toggleInfo(1)}
              alt="electricalLogo"
            />
          ) : (
            <ElectricalStatic
              className={classes.logo}
              onClick={() => toggleInfo(1)}
              alt="electricalStaticLogo"
            />
          )}
          {visibleInfo === 2 ? (
            <Mechanical
              className={classes.logoAnimated}
              onClick={() => toggleInfo(2)}
              alt="mechanicalLogo"
            />
          ) : (
            <MechanicalStatic
              className={classes.logo}
              onClick={() => toggleInfo(2)}
              alt="mechanicalStaticLogo"
            />
          )}
          {visibleInfo === 3 ? (
            <Programming
              className={classes.logoAnimated}
              onClick={() => toggleInfo(3)}
              alt="programmingLogo"
            />
          ) : (
            <ProgrammingStatic
              className={classes.logo}
              onClick={() => toggleInfo(3)}
              alt="programmingStaticLogo"
            />
          )}
          {visibleInfo === 4 ? (
            <ProjectManagement
              className={classes.logoAnimated}
              onClick={() => toggleInfo(4)}
              alt="projectManagementLogo"
            />
          ) : (
            <ProjectManagementStatic
              className={classes.logo}
              onClick={() => toggleInfo(4)}
              alt="projectManagementStaticLogo"
            />
          )}
        </div>
      </div>
      {/* Conditionally rendering information for Selected subject */}
      {visibleInfo && (
        <div className={classes.logoContent}>
          <h2>{logos[visibleInfo - 1].title}</h2>
          <p>{logos[visibleInfo - 1].description}</p>
        </div>
      )}
      <div>
        <Link to={`/projects`}>
          <button>
            <p>Projects</p>
          </button>
        </Link>
        <Link to={`/aboutme`}>
          <button>
            <p>About Me</p>
          </button>
        </Link>
      </div>
    </PageContent>
  );
}

export default HomePage;
