import { Link } from "react-router-dom";

import PageContent from "../components/PageContent";

function ProjectPage() {
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