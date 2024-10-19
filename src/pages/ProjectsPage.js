import { useState } from "react";
import { Link } from "react-router-dom";

import content from '../content.json';
import cvz from '../logos/computer_vision.svg';
import ctr from '../logos/ct.svg';
import ecg from '../logos/ecg.svg';
import isp from '../logos/isp.svg';
import ldd from '../logos/leaf_disease.svg';
import mls from '../logos/ml_stethoscope.svg';
import mct from '../logos/morse.svg';
import nmr from '../logos/nmr.svg';
import PageContent from "../components/PageContent.js";
import classes from '../components/PageContent.module.css';


function ProjectsPage() {

    // Extract project information
    const projects = content.projects

    // State to track which image's information is visible (null means no info is visible)
    const [visibleInfo, setVisibleInfo] = useState(null);
    
    // Function to toggle information for a specific image
    const toggleInfo = (imageIndex) => {
        // Set the clicked image's index to visible, or hide if clicked again
        setVisibleInfo((prevVisibleInfo) => 
        prevVisibleInfo === imageIndex ? null : imageIndex
        );
    };

    return (
        <PageContent title="Projects" >
            <p>Select a project icon to find out more.</p>
            <div>
                <img src={cvz} onClick={() => toggleInfo(1)} className={classes.projectlogo} alt="Computer Vision" />
                <img src={ctr} onClick={() => toggleInfo(2)} className={classes.projectlogo} alt="Computed Tomography Reconstruction" />
                <img src={ecg} onClick={() => toggleInfo(3)} className={classes.projectlogo} alt="Electrocardiogram" />
                <img src={isp} onClick={() => toggleInfo(4)} className={classes.projectlogo} alt="IMG Signal Processor" />
            </div>
            <div>
                <img src={ldd} onClick={() => toggleInfo(5)} className={classes.projectlogo} alt="Leaf Disease Detection" />
                <img src={mls} onClick={() => toggleInfo(6)} className={classes.projectlogo} alt="ML Stethoscope" />
                <img src={mct} onClick={() => toggleInfo(7)} className={classes.projectlogo} alt="Morse Code Translator" />
                <img src={nmr} onClick={() => toggleInfo(8)} className={classes.projectlogo} alt="Nuclear Magnetic Resonance" />
            </div>
            {/* Conditionally rendering information for Selected project */}
            {visibleInfo && (
                <div className={classes.content}>
                    <h2>{projects[visibleInfo-1].title}</h2>
                    <p>{projects[visibleInfo-1].description}</p>
                    <Link to={`/projects/${projects[visibleInfo-1].id}`}>
                        <button>
                            <p>Project Page</p>
                        </button>
                    </Link>
                </div>
            )}
        </PageContent>
    )
}

export default ProjectsPage;