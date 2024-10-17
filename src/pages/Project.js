import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PageContent from "../components/PageContent";

function Project() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/members").then(
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
                {(typeof data.members === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    data.members.map((member, i) => (
                        <p key={i}>{member}</p>
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