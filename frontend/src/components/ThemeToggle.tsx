import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const [rotation, setRotation] = useState(0);

  const handleToggle = () => {
    setRotation(prev => prev + 180);
    toggleTheme();
  };

  return (
    <button 
      className={`theme-toggle ${className || ''}`}
      onClick={handleToggle}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <img 
        src="/ThemeIcon.svg" 
        alt="Theme Toggle"
        className="theme-toggle__icon"
        style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
      />
      </button>
  );
};

export default ThemeToggle;