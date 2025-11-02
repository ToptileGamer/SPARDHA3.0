import React from "react";
import "./EventPage.css";
import bg from "../assets/posters/circuitdebuggingposter.jpeg";

const CircuitDebugging = () => {
  return (
    <div className="event-page">
      {/* HEADER */}
      <header
        className="event-header"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="overlay">
          <h1>Circuit Debugging</h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="event-content">
        <h2>Technical Event</h2>
        <p className="subtitle">
          Analyze, Debug & Fix — test your circuit-solving skills!
        </p>

        {/* Poster + Info Section */}
        <div className="poster-section">
          <img src={bg} alt="Circuit Debugging Poster" className="poster" />
          <div className="poster-info">
            <h3>About the Event</h3>
            <p>
              Circuit Debugging is an electrifying event where participants
              test their knowledge in circuit design and troubleshooting.
              You’ll be presented with faulty circuits that need correction
              and optimization. Analyze the issues, fix them efficiently,
              and prove your mastery in electronics!
            </p>
            <p>
              The event is designed to challenge your logical thinking,
              problem-solving skills, and understanding of electrical
              principles.
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

        {/* Details Section */}
        <div className="details-grid">
          <div>
            <h3>Event Structure</h3>
            <p>• Round 1 – Identify and fix circuit faults.</p>
            <p>• Round 2 – Optimize a working circuit for performance.</p>
            <p>• Round 3 – Bonus challenge (time-based debugging).</p>
          </div>

          <div>
            <h3>Rules & Guidelines</h3>
            <p>• Individual participation only.</p>
            <p>• Use of simulators or online tools is prohibited.</p>
            <p>• Judges’ decisions are final and binding.</p>
          </div>

          <div>
            <h3>Judging Criteria</h3>
            <p>• Accuracy of debugging</p>
            <p>• Time taken to solve</p>
            <p>• Optimization and creativity</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-details">
          <h3>Contact</h3>
          <p>
            <strong>Event Coordinator:</strong> Rahul S<br />
            <strong>Phone:</strong> +91 98765 43210<br />
            <strong>Email:</strong> {" "}
              <a href="mailto:techspardha@cityengineeringcollege.ac.in">
                techspardha@cityengineeringcollege.ac.in
              </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.instagram.com/spardha__3.0?igsh=YnE4NGd3cG83azN2" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CircuitDebugging;
