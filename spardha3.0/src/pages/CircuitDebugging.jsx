import React from "react";
import "./EventPage.css";
import bg from "../assets/circuitdebuggingposter.jpeg";

const CircuitDebugging = () => {
  return (
    <div
      className="event-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="event-overlay"></div>
      <div className="event-content">
        <h1>Circuit Debugging</h1>
        <p>
          Step into the world of electric logic! ⚡  
          This event challenges your circuit design, analysis, and debugging skills.
          Participants will encounter deliberately faulty circuits that need to be diagnosed and corrected.
          The goal? Fix them efficiently using your electrical and logical reasoning skills.
          <br /><br />
          🧠 **Category:** Technical  
          ⏱ **Duration:** 1 hour  
          👥 **Team Size:** 1–2 members  
          🏆 **Judging Criteria:** Accuracy, time taken, and explanation.
        </p>

        <img src={bg} alt="Circuit Debugging Poster" className="poster" />
        <a href="/" className="back-btn">← Back to Home</a>
      </div>
    </div>
  );
};

export default CircuitDebugging;
