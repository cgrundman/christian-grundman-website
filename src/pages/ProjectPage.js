import { Link, useParams } from "react-router-dom";

import content from '../content.json';
import PageContent from "../components/PageContent";
import classes from "../components/PageContent.module.css";

function ProjectPage() {

    const { projectid } = useParams();

    // Find the user based on the id from the URL
    const project = content.projects.find(project => project.id === projectid)

    return (
        <PageContent title={project.title} >
            <p>{project.description}</p>
            <div className={classes.content}>
                <ul>
                    {project.subtitles.map((subtitle, index) => (
                        <div>
                            <h3 key={index}>{subtitle}</h3>
                            <p key={index}>{project.sections[index]}</p>
                            {project.images[index] !== "" && (
                                <img kex={index} src={project.images[index]} alt="Not Found" />
                            )}
                        </div>
                    ))}
                </ul>
                <Link to={`/projects`}>
                    <div>
                        <button>
                            <p>Back</p>
                        </button>
                    </div>
                </Link>
            </div>
        </PageContent>
    )
}

export default ProjectPage;