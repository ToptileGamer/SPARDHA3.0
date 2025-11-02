import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/charadposter.jpeg";

const TechCharades = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>Tech Charades</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Non-Technical Event</h2>
        <p className="subtitle">Act it out — guess the tech term!</p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="Tech Charades Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
             Players act out technical terms, topics, or concepts (from engineering, science, or technology subjects) without speaking,
              while their teammates try to guess the correct term within a set time limit.
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
            <h3>Team size: </h3>
            <p>4 per team</p>
          </div>
          
          <div>
            <h3>Venue: </h3>
            <p> ECE department</p>
          </div>
          <div>
            <h3>Registration fee: </h3>
            <p>50 rupee per head</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Varshini : 8660888582</p>
            <p>Pragna : 9480269836</p>
            <p>Jeevesh : 9448011170</p>
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

export default TechCharades;
