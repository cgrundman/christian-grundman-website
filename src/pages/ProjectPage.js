import { Link, useParams } from "react-router-dom";

import content from '../content.json';
import PageContent from "../components/PageContent";
import classes from "../components/PageContent.module.css";

// import nmr1 from "../images/nmr_1.png"

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
                        <div key={index}>
                            <h3>{subtitle}</h3>
                            <p>{project.sections[index]}</p>
                            {/* <img src={} alt={project.id + "_" + index} /> */}
                            {project.images[index] !== "" && (
                                <img src={project.images[index]} alt="Not Found" style={{ width: '100%', borderRadius: '10px' }} />
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