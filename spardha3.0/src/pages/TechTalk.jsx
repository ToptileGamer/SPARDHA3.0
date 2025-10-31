import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/techtalkposter.jpeg";

const TechTalk = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>Tech Talk</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Non-Technical Event</h2>
        <p className="subtitle">
          Inspiring discussions with experts and innovators.
        </p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="Tech Talk Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              Engage with professionals as they share insights into emerging
              technologies, career journeys, and innovation trends.
            </p>
            <a className="register-btn" href="#register">
              Register Now
            </a>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Topics</h3>
            <p>AI, Startups, and Future Tech</p>
          </div>
          <div>
            <h3>Venue</h3>
            <p>Seminar Hall — Block A</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>techtalk@cityengineeringcollege.ac.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechTalk;
