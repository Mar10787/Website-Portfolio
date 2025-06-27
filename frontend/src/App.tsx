import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <div className="Gallery">
        <Projects 
          name="Project 1"
          techStack={["React", "Python"]}
          description="This is the description"
          experiences={["Learned React Hooks", "Implemented TypeScript"]}
        />
          <Projects 
          name="Project 2"
          techStack={["Django", "Python"]}
          description="This is the description"
          experiences={["Sokoban Puzzle Solver", "Implemented TypeScript"]}
        />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
