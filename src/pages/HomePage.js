import { Link } from "react-router-dom";

import electricalLogo from '../logos/electrical.svg'
import mechanicalLogo from '../logos/mechanical.svg'
import programmingLogo from '../logos/programming.svg'
import projectManagementLogo from '../logos/project_management.svg'
import PageContent from "../components/PageContent.js";
import classes from "../components/PageContent.module.css"

function HomePage() {
    return (
        <PageContent>
            <div>
                <div>
                    <img src={electricalLogo} className={classes.logo} alt="electricalLogo" />
                    <img src={mechanicalLogo} className={classes.logo} alt="mechanicalLogo" />
                </div>
                <div>
                    <img src={programmingLogo} className={classes.logo} alt="programmingLogo" />
                    <img src={projectManagementLogo} className={classes.logo} alt="projectManagementLogo" />
                </div>
            </div>
            <h3>Full site coming soon!</h3>
            <Link to={`/projects`}>
                <div>
                    <button>
                        <p>Projects</p>
                    </button>
                </div>
            </Link>
        </PageContent>
    )
}

export default HomePage;