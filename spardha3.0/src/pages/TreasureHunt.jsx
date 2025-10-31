import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/trehun.jpeg";

const TreasureHunt = () => {
  const navigate = useNavigate();

  return (
    <div className="event-page dark-theme fade-in">
      <div className="event-header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>Treasure Hunt</h1>
        </div>
      </div>

      <section className="event-content">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Events
        </button>

        <h2>Non-Technical Event</h2>
        <p className="subtitle">Find clues, solve puzzles, and race to victory!</p>

        <div className="poster-section">
          <img src={bg} className="poster" alt="Treasure Hunt Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              A thrilling adventure across campus filled with clues, codes, and
              challenges. Teamwork and speed decide your fate!
            </p>
            <a className="register-btn" href="#register">
              Register Now
            </a>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Format</h3>
            <p>Multiple checkpoints with tasks.</p>
          </div>
          <div>
            <h3>Rules</h3>
            <p>Teams must stay together. No external help.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>treasure@cityengineeringcollege.ac.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreasureHunt;
