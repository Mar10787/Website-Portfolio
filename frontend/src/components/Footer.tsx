import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return(
        <footer className="portfolio-footer">
            <div className="footer-content">
                <p>Let's Build Something Together!</p>
                <div className="footer-reveal">
                    <button className="reveal-btn" aria-label="Reveal Contact">
                        <p>Contact Me!</p>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
