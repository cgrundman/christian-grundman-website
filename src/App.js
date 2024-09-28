// import logo from './logo.svg';
// import electricalLogo from './electrical.svg'
import mechanicalLogo from './mechanical.svg'
// import programmingLogo from './programming.svg'
// import projectManagementLogo from './programming.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Christian Grundman</h1>
        <img src={mechanicalLogo} className="App-logo" alt="logo" />
        <p>
          New site coming soon...
        </p>
        <a href="https://github.com/cgrundman/">Github Page</a>
      </header>
    </div>
  );
}

export default App;
