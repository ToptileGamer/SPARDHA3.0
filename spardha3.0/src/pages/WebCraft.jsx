import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/WebCraft_poster.png";

const WebCraft = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>WebCraft</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Technical Event</h2>
        <p className="subtitle">Design, Develop, and Dazzle!</p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="WebCraft Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              WebCraft challenges participants to design and build a creative
              web experience from scratch. Emphasis is on user interface,
              responsiveness, and originality.
            </p>

            <a className="register-btn" href="#register">
              Register Now
            </a>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Event Details</h3>
            <p>Date: Nov 22–23, 2025</p>
            <p>Venue: CEC Innovation Lab</p>
            <p>Team Size: 2–3</p>
          </div>
          <div>
            <h3>Rules</h3>
            <p>No prebuilt templates. Use of open-source tools allowed.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: webcraft@cityengineeringcollege.ac.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebCraft;
