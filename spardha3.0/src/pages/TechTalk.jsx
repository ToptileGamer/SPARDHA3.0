import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/techtalkposter.jpeg";

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

        <h2>Technical Event</h2>
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
    window.open("https://gamma.app/docs/TECH-TALK-oackbwzd5abzfwo", "_blank")
  }
>
  View Brochure
</button>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Team size: </h3>
            <p>Individual</p>
          </div>
          
          <div>
            <h3>Venue: </h3>
            <p> Seminar Hall</p>
          </div>
          <div>
            <h3>Registration fee: </h3>
            <p>₹ 150 </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Soumya.P - 8618571512</p>
            <p>Barani.R – 9483305229</p>
            <p>Dhanushree.C - 6364686033</p>
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

export default TechTalk;
