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

let LOGOSIZE = "100"; 

function Projects() {
    return (
        <PageContent title="Projects" >
            <p>Coming Soon!</p>
            <Link to={`/projects/project`}>
                <div>
                    <button>
                        <p>Project Page</p>
                    </button>
                </div>
            </Link>
            <div>
                <img src={computerVision} className="Logo" alt="computerVision" width={LOGOSIZE} />
                <img src={ct} className="Logo" alt="ct" width={LOGOSIZE} />
                <img src={ecg} className="Logo underscore" alt="ecg" width={LOGOSIZE} />
                <img src={isp} className="Logo" alt="isp" width={LOGOSIZE} />
                <img src={leaf_disease} className="Logo" alt="leaf_disease" width={LOGOSIZE} />
                <img src={mlStethoscope} className="Logo" alt="mlStethoscope" width={LOGOSIZE} />
                <img src={morse} className="Logo underscore" alt="morse" width={LOGOSIZE} />
                <img src={nmr} className="Logo" alt="nmr" width={LOGOSIZE} />
            </div>
        </PageContent>
    )
}

export default Projects;