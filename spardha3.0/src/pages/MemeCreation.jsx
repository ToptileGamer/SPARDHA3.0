import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/memecreationposter.jpeg";

const MemeCreation = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>Meme Creation</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Non-Technical Event</h2>
        <p className="subtitle">Showcase your humor and creativity through memes.</p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="Meme Creation Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              Unleash your humor! Design memes with a tech or campus twist and
              make the audience laugh while delivering a message.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_0S14M37WCWM8Sgu5PxvhQCS5gGhfsJN18-V8QttOX_Opmg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Details</h3>
            <p>Theme: Tech & College Life</p>
            <p>Format: JPEG/PNG</p>
          </div>
          <div>
            <h3>Rules</h3>
            <p>No plagiarism or offensive content.</p>
          </div>
          <strong>Email:</strong> {" "}
              <a href="mailto:techspardha@cityengineeringcollege.ac.in">
                techspardha@cityengineeringcollege.ac.in
              </a>
        </div>
        <div className="social-links">
          <div className="social-links">
          <a href="https://www.instagram.com/spardha__3.0?igsh=YnE4NGd3cG83azN2" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
          </a>
        </div>
        </div>
      </section>
    </div>
  );
};

export default MemeCreation;
