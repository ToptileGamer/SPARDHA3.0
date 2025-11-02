import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/got.jpeg";

const GameOfTetrons = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      {/* HEADER WITH BACKGROUND */}
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>Game of Tetrons</h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="event-content">
        {/* BACK BUTTON */}
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Non-Technical Event</h2>
        <p className="subtitle">Think fast, play smart — where logic meets fun!</p>

        {/* POSTER AND INFO SECTION */}
        <div className="poster-section">
          <img src={bg} className="poster" alt="Game of Tetrons Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              Game of Tetrons is a thrilling team-based puzzle challenge that
              combines quick thinking, teamwork, and strategy. Participants
              solve interconnected puzzles that test problem-solving, logic, and
              coordination — with each round increasing in difficulty.
            </p>
            <p>
              Whether you’re a puzzle enthusiast or just love a good mental
              challenge, this event guarantees adrenaline, laughter, and
              surprises at every turn.
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

        {/* DETAILS SECTION */}
        <div className="details-grid">
          <div>
            <h3>Event Structure</h3>
            <p>Round 1 — Logic Puzzles</p>
            <p>Round 2 — Team Strategy Challenge</p>
            <p>Round 3 — Final Showdown</p>
          </div>
          <div>
            <h3>Rules</h3>
            <p>Team size: 2–4 members</p>
            <p>No external aids or devices allowed.</p>
            <p>Points are based on accuracy and completion time.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: tetrons@cityengineeringcollege.ac.in</p>
            <p>Phone: +91 98765 43210</p>
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

export default GameOfTetrons;
