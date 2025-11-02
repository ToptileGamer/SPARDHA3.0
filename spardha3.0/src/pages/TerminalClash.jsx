import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";
import bg from "../assets/posters/terminal_clash_poster.jpg";

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
              TERMINAL CLASH IS A HIGH-OCTANE CODING AND DEBUGGING
SHOWDOWN WHERE SHARP MINDS BATTLE IT OUT IN THE COMMAND
LINE ARENA. PARTICIPANTS WILL RACE AGAINST TIME TO SOLVE
PROGRAMMING PUZZLES, SQUASH ELUSIVE BUGS, AND OPTIMIZE
CODE UNDER PRESSURE. WHETHER YOU'RE A SEASONED
DEVELOPER OR A RISING TECH ENTHUSIAST, TERMINAL CLASH
CHALLENGES YOUR LOGIC, SPEED, AND PRECISION IN A THRILLING
TEST OF SKILL. GET READY TO CLASH KEYBOARDS AND CONQUER
CODE!
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
    window.open("/brochure/terminal_clash_brochure.pdf", "_blank")
  }
>
  View Brochure
</button>
          </div>
        </div>

        <div className="details-grid">
          <div>
            <h3>Team size: </h3>
            <p>2-4 Members per team</p>
          </div>
          
          <div>
            <h3>Venue: </h3>
            <p> ECE LAB, CEC</p>
          </div>
          <div>
            <h3>Registration fee: </h3>
            <p>₹ 100 Per Head </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>ASHLEE BANIK: 8095227658</p>
            <p>JASWANTH C: 9449735831</p>
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

export default TerminalClash;
