// File used to create the individual project cards to display in the gallery
// MVP1 - Displays: Project Name, List of Tech Stack, Description, Experiences and Outcomes. 
// MVP2 - Gradient Colouring, and Rounded Boxes
// MVP3 - Pulls from a json file for the details displayed

import React from "react";
import './Projects.css';

interface ProjectProps {
    name: string;
    techStack: string[];
    description: string;
    experiences: string[];
}

const Projects: React.FC<ProjectProps> = ({ name, techStack, description, experiences }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3 className="project-name">{name}</h3>
            </div>
            
            <div className="project-section">
                <h4 className="section-title">Tech Stack</h4>
                <p className="section-content">{techStack.join(", ")}</p>
            </div>
            
            <div className="project-section">
                <h4 className="section-title">Description</h4>
                <p className="section-content">{description}</p>
            </div>
            
            <div className="project-section">
                <h4 className="section-title">Experiences and Outcomes</h4>
                <ul className="experiences-list">
                    {experiences.map((experience, index) => (
                        <li key={index}>{experience}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;