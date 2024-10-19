import { Link, useParams } from "react-router-dom";

import content from '../content.json';
import PageContent from "../components/PageContent";
import classes from "../components/PageContent.module.css";

function ProjectPage() {

    const { projectid } = useParams();

    // Find the user based on the id from the URL
    const project = content.projects.find(project => project.id === projectid)

    return (
        <PageContent title="Project" >
            <Link to={`/projects`}>
                <div>
                    <button>
                        <p>Back</p>
                    </button>
                </div>
            </Link>
        </PageContent>
    )
}

export default ProjectPage;