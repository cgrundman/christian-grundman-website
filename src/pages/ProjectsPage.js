import { useState } from "react";
import { Link } from "react-router-dom";

import content from "../content.json";
import CVZ from "../logos/CVZ.jsx";
import CTR from "../logos/CTR.jsx";
import ECG from "../logos/ECG.jsx";
import ISP from "../logos/ISP.jsx";
import LDD from "../logos/LDD.jsx";
import MLS from "../logos/MLS.jsx";
import MCT from "../logos/MCT.jsx";
import NMR from "../logos/NMR.jsx";
import relaxed from "../avatars/relaxed.svg";
import PageContent from "../components/PageContent.js";
import classes from "../components/PageContent.module.css";

function ProjectsPage() {
  // Extract project information
  const projects = content.projects;

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
    <PageContent title="Projects">
      <div>
        <img src={relaxed} className={classes.avatar} alt="relaxed" />
        <p className={classes.quote}>
          "Do not underestimate your abilities. That is your boss's job."
        </p>
        <p>Select a project icon to learn more.</p>
      </div>
      <div>
        <CVZ
          onClick={() => toggleInfo(1)}
          className={highlighted === 1 ? "highlight" : ""}
          alt="Computer Vision"
          width="20%"
        />
        <CTR
          onClick={() => toggleInfo(2)}
          className={highlighted === 2 ? "highlight" : ""}
          alt="Computed Tomography Reconstruction"
          width="20%"
        />
        <ECG
          onClick={() => toggleInfo(3)}
          className={highlighted === 3 ? "highlight" : ""}
          alt="Electrocardiogram"
          width="20%"
        />
        <ISP
          onClick={() => toggleInfo(4)}
          className={highlighted === 4 ? "highlight" : ""}
          alt="IMG Signal Processor"
          width="20%"
        />
      </div>
      <div>
        <LDD
          onClick={() => toggleInfo(5)}
          className={highlighted === 5 ? "highlight" : ""}
          alt="Leaf Disease Detection"
          width="20%"
        />
        <MLS
          onClick={() => toggleInfo(6)}
          className={highlighted === 6 ? "highlight" : ""}
          alt="ML Stethoscope"
          width="20%"
        />
        <MCT
          onClick={() => toggleInfo(7)}
          className={highlighted === 7 ? "highlight" : ""}
          alt="Morse Code Translator"
          width="20%"
        />
        <NMR
          onClick={() => toggleInfo(8)}
          className={highlighted === 8 ? "highlight" : ""}
          alt="Nuclear Magnetic Resonance"
          width="20%"
        />
      </div>
      {/* Conditionally rendering information for Selected project */}
      {visibleInfo && (
        <div className={classes.content}>
          <h2>{projects[visibleInfo - 1].title}</h2>
          <p>{projects[visibleInfo - 1].description}</p>
          <div className={classes.tagspace}>
            {projects[visibleInfo - 1].tags.map((tag, index) =>
              tag === "Programming" ? (
                <button key={index} className={classes.pTag}>
                  <p>{tag}</p>
                </button>
              ) : tag === "Project Management" ? (
                <button key={index} className={classes.pmTag}>
                  <p>{tag}</p>
                </button>
              ) : tag === "Mechanical" ? (
                <button key={index} className={classes.mTag}>
                  <p>{tag}</p>
                </button>
              ) : (
                <button key={index} className={classes.eTag}>
                  <p>{tag}</p>
                </button>
              )
            )}
          </div>
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
