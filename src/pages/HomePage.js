import { Link } from "react-router-dom";

import professional from '../avatars/professional.svg'
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
                    <img src={professional} className={classes.avatar} alt="professional" />
                    <p>"I never make the same mistake twice. I make them three or four times just to be sure."</p>
                </div>
                <div>
                    <img src={electricalLogo} className={classes.logo} alt="electricalLogo" />
                    <img src={mechanicalLogo} className={classes.logo} alt="mechanicalLogo" />
                </div>
                <div>
                    <img src={programmingLogo} className={classes.logo} alt="programmingLogo" />
                    <img src={projectManagementLogo} className={classes.logo} alt="projectManagementLogo" />
                </div>
            </div>
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