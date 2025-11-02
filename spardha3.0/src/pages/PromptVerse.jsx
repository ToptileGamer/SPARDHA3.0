import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/promverposter.jpeg";

const PromptVerse = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>PromptVerse — The Prompt Hackathon</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Technical Event</h2>
        <p className="subtitle">
          Creativity meets AI — unleash your imagination through prompts.
        </p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="PromptVerse Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              PromptVerse combines innovation and artificial intelligence in a
              hackathon-style competition. Participants craft prompts for AI
              models to solve real-world challenges in areas like business,
              sustainability, education, and health.
            </p>

           <button
                        className="register-btn"
                        onClick={() =>
                          window.open("https://docs.google.com/forms/d/e/1FAIpQLSe_0S14M37WCWM8Sgu5PxvhQCS5gGhfsJN18-V8QttOX_Opmg/viewform?usp=dialog", "_blank")
                        }
                      >
                        Register Now
                      </button>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Event Details</h3>
            <p>
              <strong>Date:</strong> Nov 20, 2025
            </p>
            <p>
              <strong>Venue:</strong> CEC Main Auditorium
            </p>
            <p>
              <strong>Team Size:</strong> 2–4 Members
            </p>
          </div>
          <div>
            <h3>Structure</h3>
            <p>Round 1: Ideation & Prompt Pitch</p>
            <p>Round 2: Build & Showcase</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Darshan B S — 9353189063</p>
            <p>Aryan Tiwari — 8867122896</p>
            <strong>Email:</strong> {" "}
              <a href="mailto:techspardha@cityengineeringcollege.ac.in">
                techspardha@cityengineeringcollege.ac.in
              </a>
          </div>
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

export default PromptVerse;
