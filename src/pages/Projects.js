import { useState } from "react";
// import { Link } from "react-router-dom";

import content from '../content.json';
import cv from '../logos/computer_vision.svg';
import ct from '../logos/ct.svg';
import ecg from '../logos/ecg.svg';
import isp from '../logos/isp.svg';
import ld from '../logos/leaf_disease.svg';
import mls from '../logos/ml_stethoscope.svg';
import mct from '../logos/morse.svg';
import nmr from '../logos/nmr.svg';
import PageContent from "../components/PageContent.js";
import classes from '../components/PageContent.module.css';


function Projects() {

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
            <div>
                <img src={cv} alt="Computer Vision" onClick={() => toggleInfo(1)} className={classes.projectlogo} />
                <img src={ct} alt="Computed Tomography" onClick={() => toggleInfo(2)} className={classes.projectlogo} />
                <img src={ecg} alt="Electrocardiogram" onClick={() => toggleInfo(3)} className={classes.projectlogo} />
                <img src={isp} alt="IMG Signal Processor" onClick={() => toggleInfo(4)} className={classes.projectlogo} />
            </div>
            <div>
                <img src={ld} alt="Leaf Disease" onClick={() => toggleInfo(5)} className={classes.projectlogo} />
                <img src={mls} alt="ML Stethoscope" onClick={() => toggleInfo(6)} className={classes.projectlogo} />
                <img src={mct} alt="Morse Code Translator" onClick={() => toggleInfo(7)} className={classes.projectlogo} />
                <img src={nmr} alt="Nuclear Magnetic Resonance" onClick={() => toggleInfo(8)} className={classes.projectlogo} />
            </div>
            {/* Conditionally rendering information for Selected project */}
            {visibleInfo && (
                <div>
                    <h2>{projects[visibleInfo-1].title}</h2>
                    <p>{projects[visibleInfo-1].description}</p>
                    <button>Project Page</button>
                </div>
            )}
        </PageContent>
    )
}

export default Projects;