import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageContent from "../components/PageContent";

function Project() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/project_list").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <PageContent title="Project" >
            <div>
                {(typeof data.projects === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    data.projects.map((project, i) => (
                        <p key={i}>{project}</p>
                    ))
                )}
            </div>
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