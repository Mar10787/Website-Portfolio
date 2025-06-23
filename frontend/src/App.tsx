import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          {/* TODO: Position the theme toggle where you want it */}
          <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <ThemeToggle />
          </div>
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
