import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/trehunpos.jpeg";

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
            <button
                        className="register-btn"
                        onClick={() =>
                          window.open("https://docs.google.com/forms/d/e/1FAIpQLSe_0S14M37WCWM8Sgu5PxvhQCS5gGhfsJN18-V8QttOX_Opmg/viewform?usp=dialog", "_blank")
                        }
                      >
                        Register Now
                      </button>
                      <button
  className="register-btn"
  onClick={() =>
    window.open("/brochure/trehun.pdf", "_blank")
  }
>
  View Brochure
</button>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Team size: </h3>
            <p>2-3 members per team</p>
          </div>
          
          <div>
            <h3>Venue: </h3>
            <p> IOT LAB</p>
          </div>
          <div>
            <h3>Registration fee: </h3>
            <p>₹ 100/150 per team </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Srujan M S – 8904547681</p>
            <p>Ashutosh B Cherekar – 9108677151    </p>
            <p>MD Yousuf – 9845717886</p>
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

export default TreasureHunt;
