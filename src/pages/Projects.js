import { useState } from "react";
// import { Link } from "react-router-dom";

import content from '../content.json';
import cv from '../logos/computer_vision.svg';
import ct from '../logos/ct.svg';
// import ecg from '../logos/ecg.svg';
// import isp from '../logos/isp.svg';
// import leaf_disease from '../logos/leaf_disease.svg';
// import mlStethoscope from '../logos/ml_stethoscope.svg';
// import morse from '../logos/morse.svg';
// import nmr from '../logos/nmr.svg';
import PageContent from "../components/PageContent.js";
// import classes from '../components/PageContent.module.css';

let LOGOSIZE = "125";

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
            {/* <div>
                <img src={computerVision} className={classes.projectlogo} alt="computerVision" onClick={toggleInfo} width={LOGOSIZE} />
                <img src={ct} className={classes.projectlogo} alt="ct" width={LOGOSIZE} />
                <img src={ecg} className={classes.projectlogo} alt="ecg" width={LOGOSIZE} />
                <img src={isp} className={classes.projectlogo} alt="isp" width={LOGOSIZE} />
            </div> */}
            {/* <div>
                <img src={leaf_disease} className={classes.projectlogo} alt="leaf_disease" width={LOGOSIZE} />
                <img src={mlStethoscope} className={classes.projectlogo} alt="mlStethoscope" width={LOGOSIZE} />
                <img src={morse} className={classes.projectlogo} alt="morse" width={LOGOSIZE} />
                <img src={nmr} className={classes.projectlogo} alt="nmr" width={LOGOSIZE} />
            </div> */}
            <div>
                <img src={cv} alt="Computer Vision" onClick={() => toggleInfo(1)} width={LOGOSIZE} />
                <img src={ct} alt="Computed Tomography" onClick={() => toggleInfo(2)} width={LOGOSIZE} />
            </div>
            {/* Conditionally rendering information for Selected project */}
            {visibleInfo && (
                <div>
                <h2>{content.projects[visibleInfo - 1].title}</h2>
                <p>{content.projects[visibleInfo -1].description}</p>
                </div>
            )}
        </PageContent>
    )
}

export default Projects;