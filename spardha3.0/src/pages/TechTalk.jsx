import React from "react";
import "./EventPage.css";
import bg from "../assets/techtalkbackground.jpeg";
import poster from "../assets/techtalkposter.jpeg";

const TechTalk = () => {
  return (
    <div
      className="event-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="event-overlay"></div>
      <div className="event-content">
        <h1>Tech Talk</h1>
        <p>
          Join an inspiring session where innovation meets experience. 💡  
          Industry leaders and tech enthusiasts share their insights on emerging technologies, 
          AI advancements, software trends, and how to build a career in tech.
          <br /><br />
          🧠 **Category:** Non-Technical  
          🎤 **Type:** Guest Lecture / Panel Discussion  
          ⏱ **Duration:** 60–90 minutes  
          🏛️ **Venue:** Main Auditorium
        </p>

        <img src={poster} alt="Tech Talk Poster" className="poster" />
        <a href="/" className="back-btn">← Back to Home</a>
      </div>
    </div>
  );
};

export default TechTalk;
