import { Link } from "react-router-dom";

import PageContent from "../components/PageContent.js";

function HomePage() {
    return (
        <PageContent title="Home Page">
            <p>Site coming soon!</p>
            <Link to={`/projects`}>
                <div>
                    <p>Projects</p>
                </div>
            </Link>
        </PageContent>
    )
}

export default HomePage;