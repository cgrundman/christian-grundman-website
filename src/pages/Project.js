import { Link } from "react-router-dom";

import PageContent from "../components/PageContent";

function Project() {
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

export default Project;