import electricalLogo from '../logos/electrical.svg'
import mechanicalLogo from '../logos/mechanical.svg'
import programmingLogo from '../logos/programming.svg'
import projectManagementLogo from '../logos/project_management.svg'
import computerVision from '../logos/computer_vision.svg'
import ct from '../logos/ct.svg'
import ecg from '../logos/ecg.svg'
import isp from '../logos/isp.svg'
import leaf_disease from '../logos/leaf_disease.svg'
import mlStethoscope from '../logos/ml_stethoscope.svg'
import morse from '../logos/morse.svg'
import nmr from '../logos/nmr.svg'
import '../App.css';

function ComingSoon() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Christian Grundman</h1>
                <div>
                    <img src={electricalLogo} className="Logo" alt="electricalLogo" />
                    <img src={mechanicalLogo} className="Logo" alt="mechanicalLogo" />
                </div>
                <div>
                    <img src={programmingLogo} className="Logo underscore" alt="programmingLogo" />
                    <img src={projectManagementLogo} className="Logo" alt="projectManagementLogo" />
                </div>
                <div>
                    <img src={computerVision} className="Logo" alt="computerVision" width="75" />
                    <img src={ct} className="Logo" alt="ct" width="75" />
                    <img src={ecg} className="Logo underscore" alt="ecg" width="75" />
                    <img src={isp} className="Logo" alt="isp" width="75" />
                    <img src={leaf_disease} className="Logo" alt="leaf_disease" width="75" />
                    <img src={mlStethoscope} className="Logo" alt="mlStethoscope" width="75" />
                    <img src={morse} className="Logo underscore" alt="morse" width="75" />
                    <img src={nmr} className="Logo" alt="nmr" width="75" />
                </div>
                <p>
                New site coming soon...
                </p>
                <a href="https://github.com/cgrundman/">Github Page</a>
            </header>
        </div>
    )
}

export default ComingSoon;