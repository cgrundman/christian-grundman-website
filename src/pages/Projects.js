import { Link } from "react-router-dom";

import PageContent from "../components/PageContent.js";

function Projects() {
    return (
        <PageContent title="Projects" >
            <p>Coming Soon!</p>
            <Link to={`/projects/project`}>
                <div>
                    <p>Project Page</p>
                </div>
            </Link>
        </PageContent>
    )
}

export default Projects;