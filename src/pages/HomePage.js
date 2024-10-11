import { Link } from "react-router-dom";

import electricalLogo from '../logos/electrical.svg'
import mechanicalLogo from '../logos/mechanical.svg'
import programmingLogo from '../logos/programming.svg'
import projectManagementLogo from '../logos/project_management.svg'
import PageContent from "../components/PageContent.js";

function HomePage() {
    return (
        <PageContent title="Home Page">
            <div>
                <img src={electricalLogo} className="Logo" alt="electricalLogo" />
                <img src={mechanicalLogo} className="Logo" alt="mechanicalLogo" />
                <img src={programmingLogo} className="Logo underscore" alt="programmingLogo" />
                <img src={projectManagementLogo} className="Logo" alt="projectManagementLogo" />
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