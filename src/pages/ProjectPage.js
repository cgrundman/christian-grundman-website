import { Link, useParams } from "react-router-dom";

import content from "../content.json";
import PageContent from "../components/PageContent";
import ProjectLogoMap from "../components/ProjectLogoMap.js";
import Tag from "../components/Tags";
import classes from "../components/PageContent.module.css";

function ProjectPage() {
  const { projectid } = useParams();

  // Find the user based on the id from the URL
  const project = content.projects.find((project) => project.id === projectid);
  console.log(typeof project.id);
  // Load the logo component
  const LogoComponent = ProjectLogoMap[project.logo];

  return (
    <PageContent title={project.title}>
      <p className={classes.description}>{project.description}</p>
      <div className={classes.content}>
        <LogoComponent className={classes.logoLarge} />
        <Tag tagList={project.tags} />
        <ul>
          {project.subtitles.map((subtitle, index) => (
            <div key={index}>
              <h3>{subtitle}</h3>
              <p>{project.sections[index]}</p>
              {/* <img src={} alt={project.id + "_" + index} /> */}
              {project.images[index] !== "" && (
                <img
                  src={project.images[index]}
                  alt="Not Found"
                  className={classes.projectImage}
                />
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
  );
}

export default ProjectPage;
