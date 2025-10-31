import React from "react";
import "./EventPage.css";
import bg from "../assets/memecreationbackground.jpeg";
import poster from "../assets/memecreationposter.jpeg";

const MemeCreation = () => {
  return (
    <div
      className="event-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="event-overlay"></div>
      <div className="event-content">
        <h1>Meme Creation</h1>
        <p>
          Bring your humor and creativity to life with tech-inspired memes! 😂  
          Participants will create original memes centered around technology, coding, or student life.
          <br /><br />
          🎨 **Theme:** Tech & Innovation  
          🧍‍♂️ **Individual Event**  
          ⏱ **Duration:** 45 minutes  
          🏆 **Judging Criteria:** Originality, humor, and relevance.
        </p>

        <img src={poster} alt="Meme Creation Poster" className="poster" />
        <a href="/" className="back-btn">← Back to Home</a>
      </div>
    </div>
  );
};

export default MemeCreation;
