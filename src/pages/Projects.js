import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import computerVision from '../logos/computer_vision.svg'
import ct from '../logos/ct.svg'
import ecg from '../logos/ecg.svg'
import isp from '../logos/isp.svg'
import leaf_disease from '../logos/leaf_disease.svg'
import mlStethoscope from '../logos/ml_stethoscope.svg'
import morse from '../logos/morse.svg'
import nmr from '../logos/nmr.svg'
import PageContent from "../components/PageContent.js";
import classes from '../components/PageContent.module.css'

let LOGOSIZE = "125"; 

function Projects() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/projects").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <PageContent title="Projects" >
            <Link to={`/projects/project`}>
                <div>
                    <button>
                        <p>Project Page</p>
                    </button>
                </div>
            </Link>
            <div>
                <img src={computerVision} className={classes.projectlogo} alt="computerVision" width={LOGOSIZE} />
                <img src={ct} className={classes.projectlogo} alt="ct" width={LOGOSIZE} />
                <img src={ecg} className={classes.projectlogo} alt="ecg" width={LOGOSIZE} />
                <img src={isp} className={classes.projectlogo} alt="isp" width={LOGOSIZE} />
            </div>
            <div>
                <img src={leaf_disease} className={classes.projectlogo} alt="leaf_disease" width={LOGOSIZE} />
                <img src={mlStethoscope} className={classes.projectlogo} alt="mlStethoscope" width={LOGOSIZE} />
                <img src={morse} className={classes.projectlogo} alt="morse" width={LOGOSIZE} />
                <img src={nmr} className={classes.projectlogo} alt="nmr" width={LOGOSIZE} />
            </div>
            <div>
                {(typeof data.projects === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    data.projects.map((project, i) => (
                        <div>
                            <h3 key={i}>{project.title}</h3>
                            <p key={i}>{project.description}</p>
                        </div>
                    ))
                )}
            </div>
        </PageContent>
    )
}

export default Projects;