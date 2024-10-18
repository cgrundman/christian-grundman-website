import { useState } from "react";
// import { Link } from "react-router-dom";

// import content from '../content.json';
import computerVision from '../logos/computer_vision.svg';
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

    // // State to track the visibility of the info
    // const [isInfoVisible, setInfoVisible] = useState(false);

    // // Set the info to be displayed
    // const [projectTitle, setProjectTitle] = useState([]);
    // const [projectDesc, setProjectDesc] = useState([])

    // // Function to toggle the visibility
    // const toggleInfo = () => {
    //     setInfoVisible(!isInfoVisible); // Toggle the state between true and false
    //     setProjectTitle(content.projects[0].title)
    //     setProjectDesc(content.projects[0].description)
    // };

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
            {/* <div>
                {(typeof content.projects === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    content.projects.map((project, i) => (
                        <div>
                            <h3 key={i}>{project.title}</h3>
                            <p key={i}>{project.description}</p>
                        </div>
                    ))
                )}
            </div> */}
            {/* <div>
                {isInfoVisible && (
                    <div>
                        <h2>{projectTitle}</h2>
                        <p>{projectDesc}</p>
                        <Link to={`/projects/project`}>
                            <div>
                                <button>
                                    <p>Project Page</p>
                                </button>
                            </div>
                        </Link>
                    </div>
                )}
            </div> */}
            {/* Image 1 */}
            <img
                src={computerVision}
                alt="Image 1"
                onClick={() => toggleInfo(1)}
                style={{ cursor: 'pointer', width: '300px', height: 'auto', margin: '10px' }}
            />

            {/* Image 2 */}
            <img
                src={ct}
                alt="Image 2"
                onClick={() => toggleInfo(2)}
                style={{ cursor: 'pointer', width: '300px', height: 'auto', margin: '10px' }}
            />

            {/* Conditionally rendering information for Image 1 */}
            {visibleInfo === 1 && (
                <div>
                <h2>Information about Image 1</h2>
                <p>This is some additional information about the first image.</p>
                </div>
            )}

            {/* Conditionally rendering information for Image 2 */}
            {visibleInfo === 2 && (
                <div>
                <h2>Information about Image 2</h2>
                <p>This is some additional information about the second image.</p>
                </div>
            )}
        </PageContent>
    )
}

export default Projects;