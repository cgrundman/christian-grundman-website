import electricalLogo from '../logos/electrical.svg'
import mechanicalLogo from '../logos/mechanical.svg'
import programmingLogo from '../logos/programming.svg'
import projectManagementLogo from '../logos/project_management.svg'
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
                <p>
                New site coming soon...
                </p>
                <a href="https://github.com/cgrundman/">Github Page</a>
            </header>
        </div>
    )
}

export default ComingSoon;