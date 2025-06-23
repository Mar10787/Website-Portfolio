import React from 'react';
import './Header.css';
import ThemeToggle from './ThemeToggle';


const Header: React.FC = () => {
    return (
        <header className="portfolio-header">
            <div className="header-left">
                <a href="https://github.com/Mar10787" target="_blank" rel="noopener noreferrer">
                    <img src="/github.svg" alt="GitHub Logo" className="github-logo" />
                </a>
                <a href="https://www.linkedin.com/in/martino-nguyen-173870335" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn Logo" className="linkedin-logo" />
                </a>
                <a href="https://www.facebook.com/martino.nguyen.948/" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook.svg" alt="Facebook Logo" className="facebook-logo" />
                </a>
                <a href="https://www.instagram.com/martino_n03" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.svg" alt="Instagram Logo" className="instagram-logo" />
                </a>
            </div>
            <div className="header-middle">
                <h1>Martino Nguyen</h1>
                <p>Software Developer | Machine Learning Enthusiast | Data Driven Engineer</p>
            </div>
            <div className="header-right">
                <div className="search-container">
                    <input type="text" placeholder="Search Tech Stacks or Project Briefs" />
                </div>
                <div className="theme-toggle-container">
                    <ThemeToggle className="theme-toggle" />
                </div>
            </div>
        </header> 
    );
}

export default Header;