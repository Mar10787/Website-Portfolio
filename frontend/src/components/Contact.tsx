// The contact form of the website,
// Website should sent me an email

import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section className="Contact-section">
            <div className="contact-left">
                    <div className="contact-info">
                        <p>Throughout my studies, I have really enjoyed and have been fascinated by how the world revolves around the emerging technologies.</p>
                        <p>I love crunching numbers, solving complex problems through innovative solutions.</p>
                        <p>I'm a hard working and naturally curious individual. I love to take on challenges, as I think they are a great opportunity to showcase my skills and grow.</p>
                        <p>Music and fitness aren't the only hobbies I have. I enjoy video games, bouldering, keyboards and many more! It just too hard to showcase my entire personality on a single portfolio.</p>
                    </div>
                    <div className="location">
                        <img src="./location.svg" alt="Location Logo" className="location-logo"></img>
                        <p>Annerley, QLD 4103</p>
                    </div>
                </div>
                <div className="contact-right">
                    <h2 className="contact-title">Let's Get In Touch!</h2>
                    <form className="contact-form">
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-input"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="form-input"
                            />
                        </div>
                        <div className="textarea-container">
                            <textarea
                                placeholder="Leave your message..."
                                className="form-textarea"
                                rows={6}
                                required
                            ></textarea>
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
        </section>
    );
}

export default Contact;
