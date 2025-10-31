import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/charads.jpg";

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
              Play the ultimate guessing game where gestures replace words.
              Teams compete to decode tech terms in time-bound rounds.
            </p>
            <a className="register-btn" href="#register">
              Register Now
            </a>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Rounds</h3>
            <p>Preliminary & Final rounds.</p>
          </div>
          <div>
            <h3>Rules</h3>
            <p>No verbal hints allowed.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>charades@cityengineeringcollege.ac.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechCharades;
