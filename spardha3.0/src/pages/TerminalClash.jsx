import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/TERMINAL_CLASH.png";

const TerminalClash = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>Terminal Clash</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Technical Event</h2>
        <p className="subtitle">
          Compete in command-line challenges & prove your terminal mastery.
        </p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="Terminal Clash Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              Dive into the world of Linux and shell scripting! Solve tasks,
              debug scripts, and showcase your terminal skills.
            </p>
            <a className="register-btn" href="#register">
              Register Now
            </a>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Rounds</h3>
            <p>Round 1: Basic Commands</p>
            <p>Round 2: Scripting & Debugging</p>
          </div>
          <div>
            <h3>Rules</h3>
            <p>No internet usage during rounds.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>terminal@cityengineeringcollege.ac.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerminalClash;
