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

        <h2>Technical Event</h2>
        <p className="subtitle">Think fast, play smart — where logic meets fun!</p>

        {/* POSTER AND INFO SECTION */}
        <div className="poster-section">
          <img src={bg} className="poster" alt="Game of Tetrons Poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              The Game of Tetrons, an electrifying showdown of logic, speed, and strategy where every move counts! 
              Teams will battle against the clock to solve challenges, decode broken logic,
               and face intense buzzer rounds that test their technical mastery and presence of mind. With quick thinking,
               sharp teamwork, and coding brilliance as your weapons, rise above the chaos and prove your dominance. In this ultimate war of wits and code.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_0S14M37WCWM8Sgu5PxvhQCS5gGhfsJN18-V8QttOX_Opmg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn"
            >
              Register Now
            </a>
            <button
  className="register-btn"
  onClick={() =>
    window.open("/brochure/got_BROCHURE.pdf", "_blank")
  }
>
  View Brochure
</button>


          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="details-grid">
          <div>
            <h3>Rules</h3>
            <p>Team size: 3 to 5 participants (minimum of 3 and maximum of 5 participants)</p>
          </div>
          <div>
            <h3>Contact</h3>
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

export default GameOfTetrons;
