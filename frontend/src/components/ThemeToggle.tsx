import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <button 
      className={`theme-toggle ${className || ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* TODO: Replace with proper icons - you can use emoji, SVG, or icon library */}
      <span className="theme-toggle__icon">
        {isDarkMode ? '☀️' : '🌙'}
      </span>
      
      {/* TODO: Optional text label - remove if you want icon only */}
      <span className="theme-toggle__text">
        {isDarkMode ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeToggle;