import { useState } from "react";
import { Link } from "react-router-dom";

import professional from '../avatars/professional.svg'
import Electrical from "../logos/electrical.jsx";
import programmingLogo from '../logos/programming.svg'
import Mechanical from "../logos/mechanical.jsx";
import projectManagementLogo from '../logos/project_management.svg'
import PageContent from "../components/PageContent.js";
import classes from "../components/PageContent.module.css"
import content from "../content.json"

function HomePage() {

    // Extract logo information
    const logos = content.logos

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
                <div>
                    <img src={professional} className={classes.avatar} alt="professional" />
                    <p>"I never make the same mistake twice. I make them three or four times just to be sure."</p>
                </div>
                <div>
                    <Electrical className={classes.logo} onClick={() => toggleInfo(1) } alt="electricalLogo" />
                    <img src={programmingLogo} className={classes.logo} onClick={() => toggleInfo(3) } alt="programmingLogo" />
                    <Mechanical className={classes.logo} onClick={() => toggleInfo(2) } alt="mechanicalLogo" />
                    <img src={projectManagementLogo} className={classes.logo} onClick={() => toggleInfo(4) } alt="projectManagementLogo" />
                </div>
            </div>
            {/* Conditionally rendering information for Selected subject */}
            {visibleInfo && (
                <div className={classes.logoContent}>
                    <h2>{logos[visibleInfo-1].title}</h2>
                    <p>{logos[visibleInfo-1].description}</p>
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
    )
}

export default HomePage;