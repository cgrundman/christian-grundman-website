// import logo from './logo.svg';
import electricalLogo from './electrical.svg'
import mechanicalLogo from './mechanical.svg'
import programmingLogo from './programming.svg'
import projectManagementLogo from './project_management.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christian Grundman</h1>
        <img src={electricalLogo} className="App-logo" alt="electricalLogo" />
        <img src={mechanicalLogo} className="App-logo" alt="mechanicalLogo" />
        <img src={programmingLogo} className="App-logo" alt="programmingLogo" />
        <img src={projectManagementLogo} className="App-logo" alt="projectManagementLogo" />
        <p>
          New site coming soon...
        </p>
        <a href="https://github.com/cgrundman/">Github Page</a>
      </header>
    </div>
  );
}

export default App;
